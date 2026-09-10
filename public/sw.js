// Offline shell for the static export: precaches the entry points, serves
// navigations network-first, and caches hashed assets as they are fetched.
const CACHE_NAME = 'web-dev-hub-v3';
const STATIC_ASSETS = [
  '/',
  '/manifest.webmanifest',
  '/icon.svg',
  '/offline.html'
];

const CACHEABLE_ASSET = /\.(css|js|png|jpg|jpeg|gif|svg|webp|woff2?)$/;

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(STATIC_ASSETS))
      .catch((error) => {
        console.error('Service Worker: Failed to cache static assets', error);
      })
  );

  // Deliberately no skipWaiting() here. A new worker stays in `waiting` so the
  // page can offer "New Version Available" and let the visitor choose when to
  // switch; skipping made that prompt describe something that had already
  // happened, and the Refresh button then messaged a worker that was active.
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => Promise.all(
        cacheNames
          .filter((cacheName) => cacheName !== CACHE_NAME)
          .map((cacheName) => caches.delete(cacheName))
      ))
      .then(() => self.clients.claim())
  );
});

// Fetch event - serve from cache with network fallback
self.addEventListener('fetch', (event) => {
  // Skip cross-origin requests
  if (!event.request.url.startsWith(self.location.origin)) {
    return;
  }

  if (event.request.method !== 'GET') {
    return;
  }

  // Handle navigation requests
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .catch(() => caches.match('/offline.html'))
    );
    return;
  }

  event.respondWith(serveAsset(event.request));
});

async function serveAsset(request) {
  const cachedResponse = await caches.match(request);
  if (cachedResponse) {
    return cachedResponse;
  }

  try {
    const response = await fetch(request);

    if (response.status === 200 && CACHEABLE_ASSET.test(request.url)) {
      const cache = await caches.open(CACHE_NAME);
      // Clone before the body is consumed by the caller.
      await cache.put(request, response.clone());
    }

    return response;
  } catch (error) {
    if (request.destination === 'image') {
      return new Response(
        '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect width="100" height="100" fill="#f0f0f0"/><text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="#999">Image</text></svg>',
        { headers: { 'Content-Type': 'image/svg+xml' } }
      );
    }

    // Every path has to end in a Response. Returning undefined here resolved
    // respondWith() with nothing, which surfaces as a network error.
    return new Response('', {
      status: 503,
      statusText: 'Offline'
    });
  }
}

// Handle messages from the main thread
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

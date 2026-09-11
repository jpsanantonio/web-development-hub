// Bookmarks: a server component wrapper so the route carries its own
// metadata; the saved list itself renders on the client.
import type { Metadata } from 'next';
import { BookmarksView } from './bookmarks-view';

export const metadata: Metadata = {
  title: 'My Bookmarks',
  description:
    'The resources you have saved on Web Development Hub, grouped by section.',
  alternates: { canonical: '/bookmarks' },
  // Nothing here exists until the visitor's own browser fills it in.
  robots: { index: false, follow: true },
};

export default function Page() {
  return <BookmarksView />;
}

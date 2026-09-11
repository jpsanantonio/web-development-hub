// Tracks which section is nearest the middle of the viewport, for the nav's
// active highlight.
import { useState, useEffect, useRef } from 'react';

interface UseIntersectionObserverOptions {
  rootMargin?: string;
  threshold?: number | number[];
  root?: Element | null;
}

export const useIntersectionObserver = (
  sectionIds: string[],
  options: UseIntersectionObserverOptions = {}
) => {
  const [activeSection, setActiveSection] = useState<string>('');
  const observerRef = useRef<IntersectionObserver | null>(null);

  const {
    rootMargin = '-20% 0px -20% 0px',
    threshold = 0.4,
    root = null,
  } = options;

  // Keyed on the ids themselves rather than the array's identity. Callers
  // build this list inline, and depending on the array meant the observer was
  // disconnected and rebuilt on every render of the nav.
  const sectionKey = sectionIds.join('|');

  useEffect(() => {
    const ids = sectionKey ? sectionKey.split('|') : [];
    if (ids.length === 0) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .map((entry) => entry.target.id)
          .filter((id) => id.startsWith('section-'));

        if (visibleSections.length > 0) {
          const viewportCenter = window.innerHeight / 2;
          let closestSection = visibleSections[0];
          let minDistance = Infinity;

          visibleSections.forEach((sectionId) => {
            const element = document.getElementById(sectionId);
            if (element) {
              const rect = element.getBoundingClientRect();
              const sectionCenter = rect.top + rect.height / 2;
              const distance = Math.abs(
                sectionCenter - viewportCenter
              );

              if (distance < minDistance) {
                minDistance = distance;
                closestSection = sectionId;
              }
            }
          });

          setActiveSection(closestSection);
        }
      },
      {
        rootMargin,
        threshold,
        root,
      }
    );

    ids.forEach((id) => {
      const element = document.getElementById(id);
      if (element && observerRef.current) {
        observerRef.current.observe(element);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [sectionKey, rootMargin, threshold, root]);

  return activeSection;
};

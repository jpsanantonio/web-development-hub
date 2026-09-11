// Chooses what the side nav lists for the current page and search state, and
// hands it to the mobile and desktop renderers.
'use client';

import { useCallback, useMemo } from 'react';
import { usePathname } from 'next/navigation';
import { useSearch } from '@/contexts/search-context';
import { useIntersectionObserver } from '@/lib/hooks/use-intersection-observer';
import {
  DEFAULT_NAV_ITEMS,
  scrollToSection,
  sectionNavItems,
} from '@/lib/utils/navigation';
import { MobileNavigation } from '@/components/ui/navigation/mobile-navigation';
import { DesktopNavigation } from '@/components/ui/navigation/desktop-navigation';
import { DesktopSearch } from '@/components/ui/navigation/desktop-search';

const EXCLUDED_SEARCH_ROUTES = ['/privacy-policy', '/terms-of-service'];

export default function VerticalNavigation() {
  const pathname = usePathname();
  const { searchQuery, searchResults, hasSelectedTags } = useSearch();

  const isHomeActive = pathname === '/';
  const isBookmarksActive = pathname === '/bookmarks';

  const shouldHideSearch = EXCLUDED_SEARCH_ROUTES.includes(pathname);

  // While searching, the page renders one section per group of results, so the
  // nav lists exactly those. Otherwise it lists every section.
  const isSearching =
    searchQuery.trim().length > 0 || hasSelectedTags;

  const navItems = useMemo(
    () =>
      isSearching ? sectionNavItems(searchResults) : DEFAULT_NAV_ITEMS,
    [isSearching, searchResults]
  );

  // Memoised because it is the observer's dependency: a fresh array each render
  // tore the IntersectionObserver down and rebuilt it on every keystroke.
  const sectionIds = useMemo(
    () => navItems.map((item) => item.id),
    [navItems]
  );
  const activeSection = useIntersectionObserver(sectionIds);

  const handleScrollToSection = useCallback((id: string) => {
    scrollToSection(id);
  }, []);

  return (
    <>
      <MobileNavigation
        navItems={navItems}
        activeSection={activeSection}
        onScrollToSection={handleScrollToSection}
        hideSearch={shouldHideSearch}
      />
      <DesktopNavigation
        navItems={navItems}
        activeSection={activeSection}
        isHomeActive={isHomeActive}
        isBookmarksActive={isBookmarksActive}
        onScrollToSection={handleScrollToSection}
      />
      {!shouldHideSearch && <DesktopSearch />}
    </>
  );
}

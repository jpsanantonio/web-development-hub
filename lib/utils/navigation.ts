// The nav's view of the sections: the id each one renders under, and which of
// them a given result set covers.
import { SECTIONS } from '@/constants/sections';
import { getResourceIcon } from '@/lib/data/resource-mappings';

export interface NavigationItem {
  id: string;
  title: string;
  iconName: string;
}

/**
 * The single rule for turning a section title into a DOM id. Four sites used
 * to derive this independently and one of them disagreed, which left the
 * Blogs nav entry pointing at an element that is never rendered.
 */
export function toSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/\s+&\s+/g, '-')
    .replace(/\s+/g, '-');
}

export function toSectionId(title: string): string {
  return `section-${toSlug(title)}`;
}

function toNavigationItem(title: string): NavigationItem {
  return {
    id: toSectionId(title),
    title,
    iconName: getResourceIcon(title),
  };
}

export const DEFAULT_NAV_ITEMS: NavigationItem[] = SECTIONS.map(
  (section) => toNavigationItem(section.title)
);

/**
 * The sections a result set covers, in the order the site lists them.
 *
 * This used to be read back out of the rendered page: it queried every
 * `section[id]`, treated a `.grid` with children as "has results", then
 * rebuilt the display title by title-casing the id — with a hard-coded
 * exception for 'Frameworks and Libraries'. That coupled the nav to a Tailwind
 * utility class and to a round trip through the DOM, and it had to be deferred
 * a tick to let layout settle. The results already carry the answer.
 */
export function sectionNavItems(
  results: { section: string }[]
): NavigationItem[] {
  const present = new Set(results.map((result) => result.section));

  return DEFAULT_NAV_ITEMS.filter((item) => present.has(item.title));
}

export function scrollToSection(id: string, onComplete?: () => void) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
    onComplete?.();
  }
}

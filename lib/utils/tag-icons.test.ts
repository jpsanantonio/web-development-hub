// Covers the tag-to-icon lookup. Most tags have no icon, so the null path is
// the common one and the cards have to handle it.
import { describe, it, expect } from 'vitest';
import { SECTIONS } from '@/constants/sections';
import { getTagIconName, TAG_ICON_MAP } from './tag-icons';

describe('getTagIconName', () => {
  it('returns the mapped icon for a known tag', () => {
    expect(getTagIconName('ai')).toBe('mdi:robot');
  });

  it('returns null for a tag with no icon', () => {
    expect(getTagIconName('no-such-tag')).toBeNull();
  });

  it('only maps tags that the dataset actually uses', () => {
    // An entry for a tag nothing carries is dead weight that reads as coverage.
    const used = new Set(
      SECTIONS.flatMap((section) =>
        section.links.flatMap((link) => link.tags)
      )
    );

    const unused = Object.keys(TAG_ICON_MAP).filter(
      (tag) => !used.has(tag)
    );
    expect(unused).toEqual([]);
  });
});

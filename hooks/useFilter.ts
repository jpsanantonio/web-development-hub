// Tag selection state for the filter panel, plus the predicate that narrows a
// resource list to the selected tags.
import { useCallback, useState } from 'react';

export type TagFilterOptions = {
  /** Tags selected on the first render. */
  initialTags?: string[];

  /** Called once with the new selection whenever it actually changes. */
  onTagsChange?: (tags: string[]) => void;

  /** Upper bound on how many tags may be selected at once. */
  maxTags?: number;
};

/**
 * Selections are computed from the current state and committed with a plain
 * value rather than an updater function. `onTagsChange` used to be called from
 * inside the updater, which React runs twice under StrictMode — so every
 * interaction notified the caller twice.
 */
export function useFilter(options: TagFilterOptions = {}) {
  const { initialTags = [], onTagsChange, maxTags } = options;
  const [selectedTags, setSelectedTags] =
    useState<string[]>(initialTags);

  const commit = useCallback(
    (updated: string[]) => {
      setSelectedTags(updated);
      onTagsChange?.(updated);
    },
    [onTagsChange]
  );

  const isAtCapacity =
    maxTags !== undefined && selectedTags.length >= maxTags;

  /** Adds a tag unless it is already selected or maxTags is reached. */
  const addTag = useCallback(
    (tag: string) => {
      if (selectedTags.includes(tag) || isAtCapacity) return;
      commit([...selectedTags, tag]);
    },
    [selectedTags, isAtCapacity, commit]
  );

  /** Removes a tag; a no-op if it was not selected. */
  const removeTag = useCallback(
    (tag: string) => {
      if (!selectedTags.includes(tag)) return;
      commit(selectedTags.filter((t) => t !== tag));
    },
    [selectedTags, commit]
  );

  /** Adds or removes a tag depending on whether it is already selected. */
  const toggleTag = useCallback(
    (tag: string) => {
      if (selectedTags.includes(tag)) {
        commit(selectedTags.filter((t) => t !== tag));
        return;
      }
      if (isAtCapacity) return;
      commit([...selectedTags, tag]);
    },
    [selectedTags, isAtCapacity, commit]
  );

  /** Drops every selection. */
  const clearAllTags = useCallback(() => {
    commit([]);
  }, [commit]);

  const isTagSelected = useCallback(
    (tag: string) => selectedTags.includes(tag),
    [selectedTags]
  );

  /**
   * Narrows a list to resources carrying every selected tag. Resources with
   * no tags drop out as soon as anything is selected.
   */
  const filterResourcesByTags = useCallback(
    <T extends { tags?: string[] }>(resources: T[]): T[] => {
      if (selectedTags.length === 0) return resources;

      return resources.filter((resource) =>
        selectedTags.every((tag) => resource.tags?.includes(tag))
      );
    },
    [selectedTags]
  );

  return {
    selectedTags,

    addTag,
    removeTag,
    toggleTag,
    clearAllTags,

    isTagSelected,
    filterResourcesByTags,

    hasSelectedTags: selectedTags.length > 0,
    selectedTagCount: selectedTags.length,

    setSelectedTags,
  };
}

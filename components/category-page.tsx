// The body every category route renders: the section's heading, its tagline,
// and either its full resource list or the current search results.
'use client';

import { useEffect } from 'react';
import ResourceGrid from '@/components/ui/resource-grid';
import { useSearch } from '@/contexts/search-context';
import type { Section } from '@/lib/types';

export function CategoryPage({ section }: { section: Section }) {
  const { searchQuery, searchResults, setCurrentCategory } =
    useSearch();

  useEffect(() => {
    setCurrentCategory(section.title);

    return () => setCurrentCategory(null);
  }, [setCurrentCategory, section.title]);

  const displayedResources =
    searchQuery && searchQuery.trim()
      ? searchResults
      : section.links;

  return (
    <div className="container mx-auto md:mt-20 mt-8 py-12 px-4 md:px-6 flex flex-col gap-10">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">
          {section.title}
        </h1>
        <p className="text-foreground-muted max-w-[700px]">
          {section.description}
        </p>
      </div>

      <ResourceGrid
        resources={displayedResources}
        searchQuery={searchQuery || ''}
      />
    </div>
  );
}

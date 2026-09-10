// A responsive grid of resource cards, with the result count above it when a
// search is running.
'use client';

import React from 'react';
import ResourceCard from '@/components/ui/resource-card';
import type { CardResource } from '@/lib/types';

interface ResourceGridProps {
  resources: CardResource[];
  searchQuery?: string;
}

export default function ResourceGrid({
  resources,
  searchQuery,
}: ResourceGridProps) {
  return (
    <>
      {searchQuery && (
        <p className="text-sm text-foreground-muted">
          {resources.length > 0
            ? `Found ${resources.length} results for "${searchQuery}"`
            : `No results found for "${searchQuery}"`}
        </p>
      )}

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {resources.map((resource) => (
          <ResourceCard key={resource.href} resource={resource} />
        ))}
      </div>
    </>
  );
}

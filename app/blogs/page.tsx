// Blogs and Newsletters: the dataset's "Blogs and Newsletters" section, rendered as a full page.
// A server component so the route can carry its own metadata.
import type { Metadata } from 'next';
import { CategoryPage } from '@/components/category-page';
import { sectionByTitle } from '@/constants/sections';

const section = sectionByTitle('Blogs and Newsletters');

export const metadata: Metadata = {
  title: section.title,
  description: section.description,
  alternates: { canonical: section.href },
  openGraph: {
    title: section.title,
    description: section.description,
    url: section.href,
  },
};

export default function Page() {
  return <CategoryPage section={section} />;
}

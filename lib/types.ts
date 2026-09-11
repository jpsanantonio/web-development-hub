// Shapes for the curated resource dataset in constants/sections.ts.
// SECTIONS is checked against these, so a malformed entry fails typecheck.

export type ResourceLink = {
  title: string;
  href: string;
  description: string;
  tags: string[];
};

export type Section = {
  title: string;
  href: string;
  description: string;
  links: ResourceLink[];
};

// A resource as the UI passes it around: a dataset link carrying the section
// it came from. Four modules declared this shape independently.
export type Resource = {
  title: string;
  href: string;
  description: string;
  section: string;
  tags?: string[];
};

// What a resource card needs. Search results carry their section; a dataset
// link rendered directly has its section resolved from the title instead.
export type CardResource = Omit<Resource, 'section'> & {
  section?: string;
};

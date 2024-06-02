"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SearchIcon from "@/components/icons/search";
import MountainIcon from "@/components/icons/mountain";
import { SECTIONS } from "@/constants/sections";

export default function Home() {
  const searchRef = useRef<HTMLInputElement>(null);
  const [search, setSearch] = useState("");

  const filteredSections = SECTIONS.map((section) => {
    const filteredLinks = section.links.filter((link) =>
      link.title.toLowerCase().includes(search.toLowerCase())
    );
    return {
      ...section,
      links: filteredLinks,
    };
  });

  const sectionLabels = SECTIONS.map((section) => section.title);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.metaKey && event.key === "k") {
        searchRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="flex xl:flex-row flex-col">
      <aside className="w-full xl:w-1/5 bg-white dark:bg-gray-800 py-4 px-8 flex flex-row justify-between xl:flex-col xl:justify-normal gap-8 sticky top-0 z-10">
        <Link className="flex items-center gap-2" href="#">
          <MountainIcon className="h-6 w-6" />
          <span className="text-lg font-bold">Web Development Hub</span>
        </Link>
        <div>
          <form className="relative">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 dark:text-gray-400" />
            <Input
              ref={searchRef}
              className="pl-10 pr-4 py-2 rounded-md bg-white dark:bg-gray-950 dark:text-gray-50 focus:outline-none focus:ring-1 focus:ring-gray-500 dark:focus:ring-gray-300"
              placeholder="Search..."
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <span className="absolute top-1/2 -translate-y-1/2 right-2 hidden sm:flex items-center justify-center px-2.5 py-[3px] gap-2.5 bg-white dark:bg-gray-800 rounded-md border border-zinc-400 border-opacity-40 text-zinc-400 dark:text-neutral-200 text-sm font-medium peer-focus:hidden select-none tracking-[2.80px]">
              ⌘K
            </span>
          </form>
        </div>
        <Accordion
          type="multiple"
          className="hidden xl:block"
          defaultValue={sectionLabels}
        >
          {filteredSections.map(
            (section) =>
              section.links.length > 0 && (
                <AccordionItem key={section.title} value={section.title}>
                  <AccordionTrigger>{section.title}</AccordionTrigger>
                  <AccordionContent>
                    <div className="grid gap-3">
                      {section.links.map((link) => (
                        <Link
                          key={link.title}
                          className="group flex items-center gap-3 rounded-md bg-white px-4 py-3 shadow-sm transition-colors hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800"
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <link.icon className="h-6 w-6 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-50" />
                          <p className="text-sm font-medium text-gray-900 group-hover:text-gray-900 dark:text-gray-50 dark:group-hover:text-gray-50">
                            {link.title}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              )
          )}
        </Accordion>
      </aside>
      <main className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Elevate Your Web Development Journey
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Discover a wealth of resources, tools, and community support to
              enhance your web development skills and build exceptional digital
              experiences.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:gap-8">
            {SECTIONS.map((section) => (
              <div
                key={section.title}
                className="flex flex-col items-center justify-center space-y-4 rounded-lg bg-white p-6 shadow-sm transition-all hover:scale-105 hover:shadow-md dark:bg-gray-950 dark:hover:bg-gray-800"
              >
                <section.icon className="h-12 w-12 text-gray-900 dark:text-gray-50" />
                <h3 className="text-lg font-bold">{section.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {section.description}
                </p>
                <Link
                  href="#"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  prefetch={false}
                >
                  Explore
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

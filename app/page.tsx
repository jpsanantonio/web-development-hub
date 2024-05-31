"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import SearchIcon from "@/components/icons/search";
import MountainIcon from "@/components/icons/mountain";
import MdnDocsIcon from "@/components/icons/mdndocs";
import FreeCodeCampIcon from "@/components/icons/freecodecamp";
import CodeAcademyIcon from "@/components/icons/codeacademy";
import VSCodeIcon from "@/components/icons/vscode";
import GitHubIcon from "@/components/icons/github";
import FigmaIcon from "@/components/icons/figma";
import ReactIcon from "@/components/icons/react";
import VueIcon from "@/components/icons/vue";
import AngularIcon from "@/components/icons/angular";
import DevtoIcon from "@/components/icons/devto";
import RedditIcon from "@/components/icons/reddit";
import IcodethisIcon from "@/components/icons/icodethis";
import CssTricksIcon from "@/components/icons/csstricks";
import SmashingMagazineIcon from "@/components/icons/smashingmagazine";
import JoshWComeauIcon from "@/components/icons/joshwcomeau";
import ArrowRightIcon from "@/components/icons/arrowright";

const sections = [
  {
    title: "Learning Resources",
    links: [
      {
        icon: MdnDocsIcon,
        title: "MDN Web Docs",
        href: "https://developer.mozilla.org/",
        description:
          "Provides information about Open Web technologies including HTML, CSS, and APIs for both Web sites and progressive web apps.",
      },
      {
        icon: FreeCodeCampIcon,
        title: "FreeCodeCamp",
        href: "https://www.freecodecamp.org/",
        description:
          "Learn to code for free. Build projects. Earn certifications.",
      },
      {
        icon: CodeAcademyIcon,
        title: "Codecademy",
        href: "https://www.codecademy.com/",
        description:
          "Interactive coding lessons and projects to build your skills.",
      },
    ],
  },
  {
    title: "Developer Tools",
    links: [
      {
        icon: VSCodeIcon,
        title: "Visual Studio Code",
        href: "https://code.visualstudio.com/",
        description:
          "A code editor redefined and optimized for building and debugging modern web and cloud applications.",
      },
      {
        icon: GitHubIcon,
        title: "GitHub",
        href: "https://github.com/",
        description:
          "Where people build software. More than 100 million people use it to discover, fork, and contribute to over 420 million projects.",
      },
      {
        icon: FigmaIcon,
        title: "Figma",
        href: "https://www.figma.com/",
        description:
          "A collaborative design tool for building meaningful products. Seamlessly design, prototype, develop, and collect feedback in a single platform.",
      },
    ],
  },
  {
    title: "Frameworks & Libraries",
    links: [
      {
        icon: ReactIcon,
        title: "React",
        href: "https://react.dev/",
        description: "The library for web and native user interfaces.",
      },
      {
        icon: VueIcon,
        title: "Vue.js",
        href: "https://vuejs.org/",
        description:
          "A progressive, incrementally-adoptable JavaScript framework for building UI on the web.",
      },
      {
        icon: AngularIcon,
        title: "Angular",
        href: "https://angular.dev/",
        description: "The web development framework for building modern apps.",
      },
    ],
  },
  {
    title: "Communities",
    links: [
      {
        icon: DevtoIcon,
        title: "Dev.to",
        href: "https://dev.to/",
        description:
          "A constructive and inclusive social network for software developers. With you every step of your journey.",
      },
      {
        icon: RedditIcon,
        title: "r/webdev",
        href: "https://www.reddit.com/r/webdev/",
        description:
          "The largest web development community on Reddit. Discuss everything from web development to programming.",
      },
      {
        icon: IcodethisIcon,
        title: "iCodeThis",
        href: "https://icodethis.com/",
        description:
          "A helpful community for web developers that encourages growth in a playful yet competitive way.",
      },
    ],
  },
  {
    title: "Blogs",
    links: [
      {
        icon: CssTricksIcon,
        title: "CSS-Tricks",
        href: "https://css-tricks.com/",
        description:
          "Daily articles about CSS, HTML, JavaScript, and all things related to web design and development.",
      },
      {
        icon: SmashingMagazineIcon,
        title: "Smashing Magazine",
        href: "https://www.smashingmagazine.com/",
        description:
          "A leading online magazine for professional web designers and developers.",
      },
      {
        icon: JoshWComeauIcon,
        title: "Josh W Comeau",
        href: "https://www.joshwcomeau.com/",
        description:
          "Friendly tutorials for developers. Focus on React, CSS, Animation, and more!",
      },
    ],
  },
];

export default function Home() {
  const searchRef = useRef<HTMLInputElement>(null);
  const [search, setSearch] = useState("");

  const filteredSections = sections.map((section) => {
    const filteredLinks = section.links.filter((link) =>
      link.title.toLowerCase().includes(search.toLowerCase())
    );
    return {
      ...section,
      links: filteredLinks,
    };
  });

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
    <div className="flex xl:flex-row flex-col h-screen">
      <aside className="bg-gray-100 dark:bg-gray-800 py-4 px-8 flex flex-row justify-between xl:flex-col xl:justify-normal gap-4">
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
              placeholder="Search resources..."
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <span className="absolute top-1/2 -translate-y-1/2 right-2 hidden sm:flex items-center justify-center px-2.5 py-[3px] gap-2.5 bg-white dark:bg-gray-800 rounded-md border border-zinc-400 border-opacity-40 text-zinc-400 dark:text-neutral-200 text-sm font-medium peer-focus:hidden select-none tracking-[2.80px]">
              ⌘K
            </span>
          </form>
        </div>
      </aside>
      <main className="w-full max-w-5xl mx-auto px-4 md:px-6 py-12 md:py-16 lg:py-20">
        <div className="space-y-6">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              Web Development Hub
            </h1>
            <p className="mt-3 text-gray-500 max-w-xl mx-auto dark:text-gray-400">
              Discover a curated collection of the best web development
              resources, tools, and communities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSections.map(
              (section) =>
                section.links.length > 0 && (
                  <section key={section.title} className="flex flex-col">
                    <h2 className="text-lg font-semibold mb-4">
                      {section.title}
                    </h2>
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
                          <div className="flex-1">
                            <p className="text-sm font-medium text-gray-900 group-hover:text-gray-900 dark:text-gray-50 dark:group-hover:text-gray-50">
                              {link.title}
                            </p>
                            <p className="text-sm text-gray-500 line-clamp-2 group-hover:text-gray-700 dark:text-gray-400 dark:group-hover:text-gray-300">
                              {link.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                    {section.links.length > 3 && (
                      <Link
                        href="/"
                        className="self-end text-black hover:underline hover:underline-offset-4 text-sm flex items-center gap-1 mt-4 mr-2"
                      >
                        <ArrowRightIcon className="text-black" />
                        <span>View All</span>
                      </Link>
                    )}
                  </section>
                )
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

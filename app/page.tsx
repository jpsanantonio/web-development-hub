import Link from "next/link";
import MdnDocs from "@/components/icons/mdndocs";
import FreeCodeCampIcon from "@/components/icons/freecodecamp";
import CodeAcademyIcon from "@/components/icons/codeacademy";
import VSCodeIcon from "@/components/icons/vscode";
import GitHubIcon from "@/components/icons/github";
import FigmaIcon from "@/components/icons/figma";
import BookIcon from "@/components/icons/book";
import ReactIcon from "@/components/icons/react";
import VueIcon from "@/components/icons/vue";
import AngularIcon from "@/components/icons/angular";
import NewspaperIcon from "@/components/icons/newspaper";
import UsersIcon from "@/components/icons/user";

export default function Home() {
  return (
    <>
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
            {/** Learning Resources */}
            <section>
              <h2 className="text-lg font-semibold mb-4">Learning Resources</h2>
              <div className="grid gap-3">
                <Link
                  className="group flex items-center gap-3 rounded-md bg-white px-4 py-3 shadow-sm transition-colors hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800"
                  href="https://developer.mozilla.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MdnDocs className="h-6 w-6 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-50" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900 group-hover:text-gray-900 dark:text-gray-50 dark:group-hover:text-gray-50">
                      MDN Web Docs
                    </p>
                    <p className="text-sm text-gray-500 line-clamp-2 group-hover:text-gray-700 dark:text-gray-400 dark:group-hover:text-gray-300">
                      Provides information about Open Web technologies including
                      HTML, CSS, and APIs for both Web sites and progressive web
                      apps.
                    </p>
                  </div>
                </Link>
                <Link
                  className="group flex items-center gap-3 rounded-md bg-white px-4 py-3 shadow-sm transition-colors hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800"
                  href="https://www.freecodecamp.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FreeCodeCampIcon className="h-6 w-6 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-50" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900 group-hover:text-gray-900 dark:text-gray-50 dark:group-hover:text-gray-50">
                      FreeCodeCamp
                    </p>
                    <p className="text-sm text-gray-500 line-clamp-2 group-hover:text-gray-700 dark:text-gray-400 dark:group-hover:text-gray-300">
                      Learn to code for free. Build projects. Earn
                      certifications.
                    </p>
                  </div>
                </Link>
                <Link
                  className="group flex items-center gap-3 rounded-md bg-white px-4 py-3 shadow-sm transition-colors hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800"
                  href="https://www.codecademy.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CodeAcademyIcon className="h-6 w-6 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-50" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900 group-hover:text-gray-900 dark:text-gray-50 dark:group-hover:text-gray-50">
                      Codecademy
                    </p>
                    <p className="text-sm text-gray-500 line-clamp-2 group-hover:text-gray-700 dark:text-gray-400 dark:group-hover:text-gray-300">
                      Interactive coding lessons and projects to build your
                      skills.
                    </p>
                  </div>
                </Link>
              </div>
            </section>
            {/** Developer Tools */}
            <section>
              <h2 className="text-lg font-semibold mb-4">Developer Tools</h2>
              <div className="grid gap-3">
                <Link
                  className="group flex items-center gap-3 rounded-md bg-white px-4 py-3 shadow-sm transition-colors hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800"
                  href="https://code.visualstudio.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <VSCodeIcon className="h-6 w-6 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-50" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900 group-hover:text-gray-900 dark:text-gray-50 dark:group-hover:text-gray-50">
                      Visual Studio Code
                    </p>
                    <p className="text-sm text-gray-500 line-clamp-2 group-hover:text-gray-700 dark:text-gray-400 dark:group-hover:text-gray-300">
                      A code editor redefined and optimized for building and
                      debugging modern web and cloud applications.
                    </p>
                  </div>
                </Link>
                <Link
                  className="group flex items-center gap-3 rounded-md bg-white px-4 py-3 shadow-sm transition-colors hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800"
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon className="h-6 w-6 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-50" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900 group-hover:text-gray-900 dark:text-gray-50 dark:group-hover:text-gray-50">
                      GitHub
                    </p>
                    <p className="text-sm text-gray-500 line-clamp-2 group-hover:text-gray-700 dark:text-gray-400 dark:group-hover:text-gray-300">
                      It is where people build software. More than 100 million
                      people use it to discover, fork, and contribute to over
                      420 million projects.
                    </p>
                  </div>
                </Link>
                <Link
                  className="group flex items-center gap-3 rounded-md bg-white px-4 py-3 shadow-sm transition-colors hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800"
                  href="https://www.figma.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FigmaIcon className="h-6 w-6 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-50" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900 group-hover:text-gray-900 dark:text-gray-50 dark:group-hover:text-gray-50">
                      Figma
                    </p>
                    <p className="text-sm text-gray-500 line-clamp-2 group-hover:text-gray-700 dark:text-gray-400 dark:group-hover:text-gray-300">
                      It is the leading collaborative design tool for building
                      meaningful products. Seamlessly design, prototype,
                      develop, and collect feedback in a single platform.
                    </p>
                  </div>
                </Link>
              </div>
            </section>
            {/** Frameworks & Libraries */}
            <section>
              <h2 className="text-lg font-semibold mb-4">
                Frameworks & Libraries
              </h2>
              <div className="grid gap-3">
                <Link
                  className="group flex items-center gap-3 rounded-md bg-white px-4 py-3 shadow-sm transition-colors hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800"
                  href="https://react.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ReactIcon className="h-6 w-6 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-50" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900 group-hover:text-gray-900 dark:text-gray-50 dark:group-hover:text-gray-50">
                      React
                    </p>
                    <p className="text-sm text-gray-500 line-clamp-2 group-hover:text-gray-700 dark:text-gray-400 dark:group-hover:text-gray-300">
                      The library for web and native user interfaces.
                    </p>
                  </div>
                </Link>
                <Link
                  className="group flex items-center gap-3 rounded-md bg-white px-4 py-3 shadow-sm transition-colors hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800"
                  href="https://vuejs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <VueIcon className="h-6 w-6 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-50" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900 group-hover:text-gray-900 dark:text-gray-50 dark:group-hover:text-gray-50">
                      Vue.js
                    </p>
                    <p className="text-sm text-gray-500 line-clamp-2 group-hover:text-gray-700 dark:text-gray-400 dark:group-hover:text-gray-300">
                      A progressive, incrementally-adoptable JavaScript
                      framework for building UI on the web.
                    </p>
                  </div>
                </Link>
                <Link
                  className="group flex items-center gap-3 rounded-md bg-white px-4 py-3 shadow-sm transition-colors hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800"
                  href="https://angular.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AngularIcon className="h-6 w-6 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-50" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900 group-hover:text-gray-900 dark:text-gray-50 dark:group-hover:text-gray-50">
                      Angular
                    </p>
                    <p className="text-sm text-gray-500 line-clamp-2 group-hover:text-gray-700 dark:text-gray-400 dark:group-hover:text-gray-300">
                      The web development framework for building modern apps.
                    </p>
                  </div>
                </Link>
              </div>
            </section>
            <section>
              <h2 className="text-lg font-semibold mb-4">Community & Blogs</h2>
              <div className="grid gap-3">
                <Link
                  className="group flex items-center gap-3 rounded-md bg-white px-4 py-3 shadow-sm transition-colors hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800"
                  href="#"
                >
                  <UsersIcon className="h-6 w-6 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-50" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900 group-hover:text-gray-900 dark:text-gray-50 dark:group-hover:text-gray-50">
                      Dev.to
                    </p>
                    <p className="text-sm text-gray-500 line-clamp-2 group-hover:text-gray-700 dark:text-gray-400 dark:group-hover:text-gray-300">
                      A community of software developers sharing ideas and
                      helping each other.
                    </p>
                  </div>
                </Link>
                <Link
                  className="group flex items-center gap-3 rounded-md bg-white px-4 py-3 shadow-sm transition-colors hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800"
                  href="#"
                >
                  <NewspaperIcon className="h-6 w-6 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-50" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900 group-hover:text-gray-900 dark:text-gray-50 dark:group-hover:text-gray-50">
                      CSS-Tricks
                    </p>
                    <p className="text-sm text-gray-500 line-clamp-2 group-hover:text-gray-700 dark:text-gray-400 dark:group-hover:text-gray-300">
                      A community-edited collection of CSS, HTML, and JavaScript
                      techniques.
                    </p>
                  </div>
                </Link>
                <Link
                  className="group flex items-center gap-3 rounded-md bg-white px-4 py-3 shadow-sm transition-colors hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800"
                  href="#"
                >
                  <NewspaperIcon className="h-6 w-6 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-50" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900 group-hover:text-gray-900 dark:text-gray-50 dark:group-hover:text-gray-50">
                      Smashing Magazine
                    </p>
                    <p className="text-sm text-gray-500 line-clamp-2 group-hover:text-gray-700 dark:text-gray-400 dark:group-hover:text-gray-300">
                      A leading online magazine for professional web designers
                      and developers.
                    </p>
                  </div>
                </Link>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}

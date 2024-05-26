import Link from "next/link";
import AngryIcon from "@/components/icons/angry";
import ViewIcon from "@/components/icons/view";
import BookIcon from "@/components/icons/book";
import CodeIcon from "@/components/icons/code";
import ComponentIcon from "@/components/icons/component";
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
            <section>
              <h2 className="text-lg font-semibold mb-4">Learning Resources</h2>
              <div className="grid gap-3">
                <Link
                  className="group flex items-center gap-3 rounded-md bg-white px-4 py-3 shadow-sm transition-colors hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800"
                  href="#"
                >
                  <BookIcon className="h-6 w-6 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-50" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900 group-hover:text-gray-900 dark:text-gray-50 dark:group-hover:text-gray-50">
                      MDN Web Docs
                    </p>
                    <p className="text-sm text-gray-500 line-clamp-2 group-hover:text-gray-700 dark:text-gray-400 dark:group-hover:text-gray-300">
                      The definitive source for all things web development.
                    </p>
                  </div>
                </Link>
                <Link
                  className="group flex items-center gap-3 rounded-md bg-white px-4 py-3 shadow-sm transition-colors hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800"
                  href="#"
                >
                  <BookIcon className="h-6 w-6 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-50" />
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
                  href="#"
                >
                  <BookIcon className="h-6 w-6 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-50" />
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
            <section>
              <h2 className="text-lg font-semibold mb-4">Developer Tools</h2>
              <div className="grid gap-3">
                <Link
                  className="group flex items-center gap-3 rounded-md bg-white px-4 py-3 shadow-sm transition-colors hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800"
                  href="#"
                >
                  <CodeIcon className="h-6 w-6 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-50" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900 group-hover:text-gray-900 dark:text-gray-50 dark:group-hover:text-gray-50">
                      Visual Studio Code
                    </p>
                    <p className="text-sm text-gray-500 line-clamp-2 group-hover:text-gray-700 dark:text-gray-400 dark:group-hover:text-gray-300">
                      A powerful code editor with a vast ecosystem of
                      extensions.
                    </p>
                  </div>
                </Link>
                <Link
                  className="group flex items-center gap-3 rounded-md bg-white px-4 py-3 shadow-sm transition-colors hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800"
                  href="#"
                >
                  <CodeIcon className="h-6 w-6 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-50" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900 group-hover:text-gray-900 dark:text-gray-50 dark:group-hover:text-gray-50">
                      GitHub
                    </p>
                    <p className="text-sm text-gray-500 line-clamp-2 group-hover:text-gray-700 dark:text-gray-400 dark:group-hover:text-gray-300">
                      The world's leading software development platform.
                    </p>
                  </div>
                </Link>
                <Link
                  className="group flex items-center gap-3 rounded-md bg-white px-4 py-3 shadow-sm transition-colors hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800"
                  href="#"
                >
                  <CodeIcon className="h-6 w-6 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-50" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900 group-hover:text-gray-900 dark:text-gray-50 dark:group-hover:text-gray-50">
                      Figma
                    </p>
                    <p className="text-sm text-gray-500 line-clamp-2 group-hover:text-gray-700 dark:text-gray-400 dark:group-hover:text-gray-300">
                      The collaborative design tool for teams.
                    </p>
                  </div>
                </Link>
              </div>
            </section>
            <section>
              <h2 className="text-lg font-semibold mb-4">
                Frameworks & Libraries
              </h2>
              <div className="grid gap-3">
                <Link
                  className="group flex items-center gap-3 rounded-md bg-white px-4 py-3 shadow-sm transition-colors hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800"
                  href="#"
                >
                  <ComponentIcon className="h-6 w-6 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-50" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900 group-hover:text-gray-900 dark:text-gray-50 dark:group-hover:text-gray-50">
                      React
                    </p>
                    <p className="text-sm text-gray-500 line-clamp-2 group-hover:text-gray-700 dark:text-gray-400 dark:group-hover:text-gray-300">
                      A JavaScript library for building user interfaces.
                    </p>
                  </div>
                </Link>
                <Link
                  className="group flex items-center gap-3 rounded-md bg-white px-4 py-3 shadow-sm transition-colors hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800"
                  href="#"
                >
                  <AngryIcon className="h-6 w-6 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-50" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900 group-hover:text-gray-900 dark:text-gray-50 dark:group-hover:text-gray-50">
                      Angular
                    </p>
                    <p className="text-sm text-gray-500 line-clamp-2 group-hover:text-gray-700 dark:text-gray-400 dark:group-hover:text-gray-300">
                      A TypeScript-based web application framework.
                    </p>
                  </div>
                </Link>
                <Link
                  className="group flex items-center gap-3 rounded-md bg-white px-4 py-3 shadow-sm transition-colors hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800"
                  href="#"
                >
                  <ViewIcon className="h-6 w-6 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-50" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900 group-hover:text-gray-900 dark:text-gray-50 dark:group-hover:text-gray-50">
                      Vue.js
                    </p>
                    <p className="text-sm text-gray-500 line-clamp-2 group-hover:text-gray-700 dark:text-gray-400 dark:group-hover:text-gray-300">
                      A progressive JavaScript framework for building user
                      interfaces.
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

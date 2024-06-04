import FrontendMastersIcon from "@/components/icons/frontendmasters";
import EpicWebIcon from "@/components/icons/epicweb";
import MdnDocsIcon from "@/components/icons/mdndocs";
import FreeCodeCampIcon from "@/components/icons/freecodecamp";
import WesBosIcon from "@/components/icons/wesbos";
import CodeAcademyIcon from "@/components/icons/codeacademy";
import WebDevIcon from "@/components/icons/webdev";
import EricelliottJsIcon from "@/components/icons/ericelliottjs";
import TestingJavaScriptIcon from "@/components/icons/testingjavascript";
import EpicReactIcon from "@/components/icons/epicreact";
import BuildUIIcon from "@/components/icons/buildui";
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
import LearningResourcesIcon from "@/components/icons/learningresources";
import DeveloperToolsIcon from "@/components/icons/developertools";
import FrameworkAndLibrariesIcon from "@/components/icons/frameworkandlibraries";
import CommunitiesIcon from "@/components/icons/communities";
import BlogsIcon from "@/components/icons/blogs";

/**
 * @description The list of sections and links to be displayed on the page.
 * @constant
 */
export const SECTIONS = [
  {
    icon: LearningResourcesIcon,
    title: "Learning Resources",
    href: "/learning-resources",
    description:
      "Comprehensive tutorials and courses to master the fundamentals and advanced topics in web development.",
    links: [
      {
        icon: FrontendMastersIcon,
        title: "Frontend Masters",
        href: "https://frontendmasters.com/",
        description:
          "A leading brand that offers in-depth and modern JavaScript and front-end engineering courses to help developers advance their skills. ",
      },
      {
        icon: EpicWebIcon,
        title: "Epic Web",
        href: "https://epicweb.dev/",
        description:
          "Learn full-stack web development with Kent C. Dodds and the Epic Web instructors. Learn TypeScript, React, Node.js, and more through hands-on workshops.",
      },
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
        icon: WesBosIcon,
        title: "Wes Bos",
        href: "https://wesbos.com/",
        description:
          "Wes Bos creates and shares tutorials, courses, and articles on web development. He also does a tri-weekly podcast called Syntax",
      },
      {
        icon: CodeAcademyIcon,
        title: "Codecademy",
        href: "https://www.codecademy.com/",
        description:
          "Interactive coding lessons and projects to build your skills.",
      },
      {
        icon: WebDevIcon,
        title: "web.dev",
        href: "https://webdev.to/",
        description:
          "A curated list of web development resources, tutorials, and courses.",
      },
      {
        icon: EricelliottJsIcon,
        title: "EricElliottJS",
        href: "https://ericelliottjs.com/",
        description:
          "Learn JavaScript with Eric Elliott. Don't just learn JavaScript; learn how to change the world.",
      },
      {
        icon: TestingJavaScriptIcon,
        title: "Testing JavaScript",
        href: "https://testingjavascript.com/",
        description:
          "Learn the smart, efficient way to test any JavaScript application.",
      },
      {
        icon: EpicReactIcon,
        title: "Epic React",
        href: "https://epicreact.dev/",
        description:
          "Strap in and take your React applications to the next level.",
      },
      {
        icon: BuildUIIcon,
        title: "Build UI",
        href: "https://buildui.dev/",
        description: "Learn how to build modern user interfaces for the web.",
      },
    ],
  },
  {
    icon: DeveloperToolsIcon,
    title: "Developer Tools",
    href: "/developer-tools",
    description:
      "Essential tools and software to streamline your web development workflow and enhance productivity.",
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
    icon: FrameworkAndLibrariesIcon,
    title: "Frameworks & Libraries",
    description:
      "Popular frameworks and libraries to help you build robust and scalable web applications efficiently.",
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
    icon: CommunitiesIcon,
    title: "Communities",
    description:
      "Engaging forums and groups where you can connect with fellow developers, share knowledge, and collaborate on projects.",
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
    icon: BlogsIcon,
    title: "Blogs",
    description:
      "Insightful articles and updates from industry experts to keep you informed about the latest trends and best practices in web development.",
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

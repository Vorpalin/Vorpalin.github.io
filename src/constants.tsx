// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.webp";
import cssLogo from "./assets/tech_logo/css.webp";
import javascriptLogo from "./assets/tech_logo/javascript.webp";
import reactjsLogo from "./assets/tech_logo/reactjs.webp";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.webp";
import nodejsLogo from "./assets/tech_logo/nodejs.webp";
import expressjsLogo from "./assets/tech_logo/express.webp";
import mysqlLogo from "./assets/tech_logo/mysql.webp";
import cLogo from "./assets/tech_logo/c.webp";
import cppLogo from "./assets/tech_logo/cpp.webp";
import javaLogo from "./assets/tech_logo/java.webp";
import pythonLogo from "./assets/tech_logo/python.webp";
import typescriptLogo from "./assets/tech_logo/typescript.webp";
import gitLogo from "./assets/tech_logo/git.webp";
import githubLogo from "./assets/tech_logo/github.webp";
import vscodeLogo from "./assets/tech_logo/vscode.webp";
import postgreLogo from "./assets/tech_logo/postgre.webp";
import csharpLogo from "./assets/tech_logo/csharp.webp";
import dockerLogo from "./assets/tech_logo/docker.webp";
import gitlabLogo from "./assets/tech_logo/gitlab.webp";
import unityLogo from "./assets/tech_logo/unity.webp";
import quarkusLogo from "./assets/tech_logo/quarkus.webp";

// Experience Section Logo's
import opensee from "./assets/company_logo/opensee.webp";
import lre from "./assets/company_logo/lre.webp";
import supbiotech from "./assets/company_logo/supbiotech.webp";

// Education Section Logo's

import epita from "./assets/education_logo/epita.webp";
import centria from "./assets/education_logo/centria.webp";

// Projects Section Logo's
import monster_binder from "./assets/project_logo/monster_binder.webp";
import portfolio_website from "./assets/project_logo/portfolio_website.webp";
import simucorp from "./assets/project_logo/simucorp.webp";
import emulator_collections from "./assets/project_logo/emulator_collections.webp";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "MySQL", logo: mysqlLogo },
      { name: "PostgreSQL", logo: postgreLogo },
      { name: "Quarkus", logo: quarkusLogo },
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "C-Sharp", logo: csharpLogo },
      { name: "Java", logo: javaLogo },
      { name: "Python", logo: pythonLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo, invertOnDark: true },
      { name: "GitLab", logo: gitlabLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Docker", logo: dockerLogo },
      { name: "Unity", logo: unityLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: opensee,
    role: "AI Intern",
    company: "Opensee",
    date: "September 2026 - Present",
    desc: "Intern in the AI team, I work on the chat bot Agensee in an agile environment.",
    skills: ["Python"],
  },
  {
    id: 1,
    img: lre,
    role: "Research Student",
    company: "LRE",
    date: "February 2026 - July 2026",
    desc: "Research student within the system security team.\nThe goal of this project is to optimize the active S-box minimization step of the TAGADA differential cryptanalysis tool by implementing multithreaded dynamic programming algorithms in C++, while accounting for the library format.",
    skills: ["C++", "Docker"],
  },
  {
    id: 2,
    img: epita,
    role: "Teaching Assistant",
    company: "EPITA",
    date: "August 2025 - July 2026",
    desc: "Programming assistant for first-year students in EPITA's preparatory cycle.\nMy primary responsibilities involve providing daily guidance to students as they learn C, Python, and Git, and helping them get up to speed with the Linux environment (NixOS).\nAdditionally, I assist in reviewing assignments and tests for weekly practical sessions via GitLab, as well as grading the students' work.\nThese tasks allow me to practice using the C language and the Criterion framework on a daily basis, while also honing my adaptability and problem-solving skills.",
    skills: ["Python", "C", "OCaml"],
  },
  {
    id: 3,
    img: supbiotech,
    role: "Teaching Assistant",
    company: "Supbiotech",
    date: "September 2025 - June 2026",
    desc: "Assisting preparatory class students during programming practical sessions.\nMy primary role is to support students during Python practicals, helping them with both language-specific details and algorithmic concepts.",
    skills: ["Python"],
  },
];

export const education = [
  {
    id: 0,
    img: epita,
    school: "EPITA, Lyon",
    date: "Sept 2023 - present",
    grade: "17/20",
    desc: "Fourth year Student at EPITA",
    degree: "Engineering degree",
  },
  {
    id: 1,
    img: centria,
    school: "Centria, Kokkola",
    date: "Jan 2025 - May 2025",
    grade: "5/5",
    desc: "Exchange Student at Centria. During this semester I studied Networking, IoT and AI",
    degree: "Exchange Student",
  },
];

export const projects = [
  {
    id: 0,
    title: "Portfolio website",
    description: "This portfolio website",
    image: portfolio_website,
    tags: ["HTML", "CSS", "TypeScript", "React JS"],
    github: "https://github.com/Vorpalin/Vorpalin.github.io",
    webapp: "https://vorpalin.github.io/",
  },
  {
    id: 1,
    title: "Emulator collections",
    description: "A collection of emulator written in C++",
    image: emulator_collections,
    tags: ["C++", "SDL"],
    github: "https://github.com/Vorpalin/emulators-collection",
    webapp: "https://vorpalin.github.io/emulators-collection",
  },
  {
    id: 2,
    title: "Interactive monster binder",
    description:
      "An application developed in Python and SQL that allows users to create custom monsters and search for them by name, characteristics, or even a photo.",
    image: monster_binder,
    tags: ["Python", "MySQL", "Tensorflow"],
    github: "https://github.com/Vorpalin/Pokedex",
    webapp: null,
  },
  {
    id: 3,
    title: "Simucorp",
    description: "2D local business management game developed with Unity",
    image: simucorp,
    tags: ["C#", "Unity"],
    github: "https://github.com/SimuCorp/SIMUCORP",
    webapp: null,
  },
];

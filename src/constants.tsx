// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import opensee from './assets/company_logo/opensee.jpg';
import lre from './assets/company_logo/lre.png';
import supbiotech from './assets/company_logo/supbiotech.jpg';

// Education Section Logo's

import epita from './assets/education_logo/epita.jpg';
import centria from './assets/education_logo/centria.png';

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'C-Sharp', logo: csharpLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
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
      skills: [
        "Python",
      ],
    },
    {
      id: 1,
      img: lre,
      role: "Research Student",
      company: "LRE",
      date: "February 2026 - July 2026",
      desc: "Research student within the system security team.\nThe goal of this project is to optimize the active S-box minimization step of the TAGADA differential cryptanalysis tool by implementing multithreaded dynamic deprogramming algorithms in C++, while accounting for the library format.",
      skills: [
        "C++", "Docker",
      ],
    },
    {
      id: 2,
      img: epita,
      role: "Teaching Assistant",
      company: "EPITA",
      date: "August 2025 - July 2026",
      desc: "Programming assistant for first-year students in EPITA's preparatory cycle.\nMy primary responsibilities involve providing daily guidance to students as they learn C, Python, and Git, and helping them get up to speed with the Linux environment (NixOS).\nAdditionally, I assist in reviewing assignments and tests for weekly practical sessions via GitLab, as well as grading the students' work.\nThese tasks allow me to practice using the C language and the Criterion framework on a daily basis, while also honing my adaptability and problem-solving skills.",
      skills: [
        "Python", "C", "OCaml",
      ],
    },
    {
      id: 2,
      img: supbiotech,
      role: "Teaching Assistant",
      company: "Supbiotech",
      date: "September 2025 - June 2026",
      desc: "Assisting preparatory class students during programming practical sessions.\nMy primary role is to support students during Python practicals, helping them with both language-specific details and algorithmic concepts.",
      skills: [
        "Python",
      ],
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
      id: 0,
      img: centria,
      school: "Centria, Kokkola",
      date: "Jan 2025 - May 2025",
      grade: "5/5",
      desc: "Exchange Student at Centria. During this semester I studied Networking, IoT and AI",
      degree: "Exchange Student",
    },
];
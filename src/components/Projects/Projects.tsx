import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "./Projects.css";

type Project = {
    title: string;
    description: string;
    technologies: string[];
    github?: string;
};

const projects: Project[] = [
    {
        title: "Ping",
        description:
            "A project using TypeScript, React, and Java, aiming to create an online gamified IDE designed to teach programming to beginners aged 15 to 25.",
        technologies: ["React", "Quarkus", "TypeScript", "Java", "CI/CD pipeline"],
    },
    {
        title: "E-Place",
        description:
            "A JavaScript project aiming to recreate the collaborative experience of r/place.",
        technologies: ["JavaScript", "Web application"],
    },
    {
        title: "Libzork",
        description:
            "Project to create a \"choose-your-own-adventure\" game in C++, implemented as a dynamic library.",
        technologies: ["C++", "CMake", "YAML"],
    },
    {
        title: "JWS",
        description:
            "Project to recreate the backend of a creature-collecting game in Java.",
        technologies: ["Quarkus", "Java", "Layered Architecture"],
    },
    {
        title: "42sh",
        description:
            "A project to recreate a POSIX-compliant shell interpreter using the C language and its standard library, carried out in groups of four using the Agile methodology.",
        technologies: ["Autotools", "Gitlab", "C"],
    },
    {
        title: "HTTPD",
        description:
            "Project to create a daemonizable HTTP/1.1 server using the C language.",
        technologies: ["C", "Git"],
    },
    {
        title: "MyMalloc",
        description:
            "Project aimed at recreating the malloc, calloc, realloc, and free functions using mmap system calls, employing a \"bit bucket\" implementation.",
        technologies: ["C", "Git", "Memory Management"],
    },
    {
        title: "Minimake",
        description:
            "A project to create a minimal version of the `make` command, capable of parsing a file and executing the commands for the rule selected by the user.",
        technologies: ["C", "Git", "File Processing"],
    },
    {
        title: "Interactive monster binder",
        description:
            "An application developed in Python and SQL that allows users to create custom monsters and search for them by name, characteristics, or even a photo.",
        technologies: ["Python", "Git", "SQL", "Tensorflow"],
        github: "https://github.com/Vorpalin/Pokedex",
    },
    {
        title: "Space Invaders",
        description:
            "Creating a Space Invaders game in 68000 assembly language.",
        technologies: ["Assembly Programming"],
    },
    {
        title: "SolveSmart",
        description:
            "Application developed in C, capable of solving a word search puzzle from an image.",
        technologies: ["C", "Git", "AI", "Teamwork", "Image Processing"],
    },
    {
        title: "Simucorp",
        description:
            "2D local business management game developed with Unity",
        technologies: ["C#", "Git", "Unity", "Teamwork", "LaTeX", "Project Management"],
        github: "https://github.com/SimuCorp/SIMUCORP",
    },
    {
        title: "AFIT",
        description:
            "Creation of cryptography methods in OCaml.",
        technologies: ["OCaml", "Git", "Algorithm", "Arythmetic", "Cryptophy"],
    },
];

function Projects() {
    const [currentProject, setCurrentProject] = useState(0);

    const previousProject = () => {
        setCurrentProject((current) =>
            current === 0 ? projects.length - 1 : current - 1
        );
    };

    const nextProject = () => {
        setCurrentProject((current) =>
            current === projects.length - 1 ? 0 : current + 1
        );
    };

    const project = projects[currentProject];

    return (
        <section id="projects" className="projects">
            <h2>Projects</h2>

            <div className="project-carousel">
                <button
                    className="carousel-button carousel-button-left"
                    onClick={previousProject}
                    aria-label="Previous project"
                >
                    <ChevronLeft />
                </button>

                <article className="project-card">
                    <span className="project-number">
                        {String(currentProject + 1).padStart(2, "0")}
                    </span>

                    <h3>{project.title}</h3>

                    <p>{project.description}</p>

                    <div className="project-technologies">
                        {project.technologies.map((technology) => (
                            <span key={technology}>
                                {technology}
                            </span>
                        ))}
                    </div>

                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link"
                        >
                            View on GitHub →
                        </a>
                    )}
                </article>

                <button
                    className="carousel-button carousel-button-right"
                    onClick={nextProject}
                    aria-label="Next project"
                >
                    <ChevronRight />
                </button>
            </div>

            <div className="carousel-indicators">
                {projects.map((project, index) => (
                    <button
                        key={project.title}
                        className={
                            index === currentProject
                                ? "carousel-dot active"
                                : "carousel-dot"
                        }
                        onClick={() => setCurrentProject(index)}
                        aria-label={`Go to ${project.title}`}
                    />
                ))}
            </div>
        </section>
    );
}

export default Projects;

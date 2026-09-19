import { useEffect, useState } from "react";
import { projects } from "../../constants";
import Reveal from "../Reveal/Reveal";

interface ModalLinkProps {
  href?: string | null;
  label: string;
  variant: "secondary" | "primary";
}

function ModalLink({ href, label, variant }: ModalLinkProps) {
  const base =
    "flex-1 px-4 py-2 rounded-xl text-sm sm:text-base lg:text-xl font-semibold text-center";

  if (!href || href.trim() === "" || href === "#") {
    return (
      <span
        aria-disabled="true"
        title="Not available"
        className={`${base} cursor-not-allowed bg-content/5 text-muted/50 select-none`}
      >
        {label}
      </span>
    );
  }

  const colors =
    variant === "primary"
      ? "bg-purple-600 hover:bg-purple-800 text-content"
      : "bg-content/10 text-muted hover:bg-purple-800 hover:text-white";

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`${base} ${colors}`}>
      {label}
    </a>
  );
}

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string | null;
  webapp?: string | null;
}

function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpenModal = (project: Project) => setSelectedProject(project);
  const handleCloseModal = () => setSelectedProject(null);

  useEffect(() => {
    if (!selectedProject) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  return (
    <section
      id="projects"
      className="relative px-5 py-16 font-sans sm:px-[7vw] sm:py-24 lg:px-[12vw]"
    >
      {/* Section Title */}
      <div className="mb-12 text-center sm:mb-16">
        <h2 className="text-3xl font-bold text-content sm:text-4xl">PROJECTS</h2>
        <div className="mx-auto mt-4 h-1 w-32 bg-purple-500"></div>
        <p className="mt-4 text-base font-semibold text-muted sm:text-lg">
          A showcase of the projects I have worked on, highlighting my skills and experience in
          various technologies
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:gap-10 xl:grid-cols-3">
        {(projects as Project[]).map((project) => (
          <Reveal delay={(project.id + 1) * 100}>
            <div
              key={project.id}
              onClick={() => handleOpenModal(project)}
              className="flex min-w-0 cursor-pointer flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-lg backdrop-blur-md transition duration-300 hover:shadow-purple-500/50 sm:hover:-translate-y-2"
            >
              <div className="p-3 sm:p-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-40 w-full rounded-xl object-cover sm:h-48"
                />
              </div>

              <div className="flex flex-1 flex-col p-4 pt-0 sm:p-6 sm:pt-0">
                <h3 className="mb-2 text-xl font-bold break-words text-content sm:text-2xl">
                  {project.title}
                </h3>
                <p className="mb-4 line-clamp-3 text-sm text-muted sm:text-base">
                  {project.description}
                </p>
                {/* mt-auto : les tags restent alignés en bas, cartes de même hauteur */}
                <div className="mt-auto flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="rounded-full bg-purple-100 px-2 py-1 text-xs font-semibold text-purple-700 dark:bg-[#251f38] dark:text-purple-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Modal Container */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-3 sm:p-4"
          onClick={handleCloseModal}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-xl bg-surface shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Bouton fermer : reste visible pendant le scroll de la modale */}
            <div className="sticky top-0 z-10 flex justify-end bg-surface/90 px-4 py-2 backdrop-blur">
              <button
                onClick={handleCloseModal}
                aria-label="Close"
                className="focus-visible text-3xl leading-none font-bold text-content hover:text-purple-500"
              >
                &times;
              </button>
            </div>

            <div className="flex flex-col">
              <div className="flex w-full justify-center px-4">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="max-h-[40vh] w-full rounded-xl object-contain shadow-2xl sm:max-h-[50vh]"
                />
              </div>

              <div className="p-4 sm:p-6 lg:p-8">
                <h3 className="mb-3 text-xl font-bold break-words text-content sm:mb-4 sm:text-2xl lg:text-3xl">
                  {selectedProject.title}
                </h3>
                <p className="mb-4 text-sm text-muted sm:mb-6 lg:text-base">
                  {selectedProject.description}
                </p>

                <div className="mb-4 flex flex-wrap gap-2 sm:mb-6">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="rounded-full bg-purple-100 px-2 py-1 text-xs font-semibold text-purple-700 dark:bg-[#251f38] dark:text-purple-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                  <ModalLink href={selectedProject.github} label="View Code" variant="secondary" />
                  <ModalLink href={selectedProject.webapp} label="View Live" variant="primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;

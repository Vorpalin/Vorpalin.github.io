import { useEffect, useRef, useState } from "react";
import { projects } from "../../constants";
import Reveal from "../Reveal/Reveal";

interface ModalLinkProps {
  href?: string | null;
  label: string;
  variant: "secondary" | "primary";
}

function ModalLink({ href, label, variant }: ModalLinkProps) {
  const base =
    "flex min-h-11 flex-1 items-center justify-center px-4 py-2 rounded-xl text-sm sm:text-base lg:text-xl font-semibold text-center transition-colors";

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
      ? "bg-purple-700 hover:bg-purple-800 text-white"
      : "bg-content/10 text-muted hover:bg-purple-800 hover:text-white";

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`${base} ${colors}`}>
      {label}
      <span className="sr-only"> (opens in a new tab)</span>
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

  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  const handleOpenModal = (project: Project, trigger: HTMLElement) => {
    triggerRef.current = trigger;
    setSelectedProject(project);
  };
  const handleCloseModal = () => setSelectedProject(null);

  // Dialog behaviour: initial focus, Escape, focus trap, scroll lock, focus restore
  useEffect(() => {
    if (!selectedProject) return;

    const dialog = dialogRef.current;
    const trigger = triggerRef.current;
    closeButtonRef.current?.focus();
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
        return;
      }
      if (e.key !== "Tab" || !dialog) return;

      const focusables = Array.from(
        dialog.querySelectorAll<HTMLElement>("a[href], button:not([disabled])")
      );
      if (focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
      trigger?.focus();
    };
  }, [selectedProject]);

  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="relative px-5 py-16 font-sans sm:px-[7vw] sm:py-24 lg:px-[12vw]"
    >
      {/* Section Title */}
      <div className="mb-12 text-center sm:mb-16">
        <h2 id="projects-title" className="text-3xl font-bold text-content sm:text-4xl">
          PROJECTS
        </h2>
        <div className="mx-auto mt-4 h-1 w-32 bg-purple-500"></div>
        <p className="mt-4 text-base font-semibold text-muted sm:text-lg">
          A showcase of the projects I have worked on, highlighting my skills and experience in
          various technologies
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:gap-10 xl:grid-cols-3">
        {(projects as Project[]).map((project) => (
          <Reveal key={project.id} delay={(project.id + 1) * 100}>
            <article className="relative flex h-full min-w-0 cursor-pointer flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-lg backdrop-blur-md transition duration-300 has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-accent hover:shadow-purple-500/50 sm:hover:-translate-y-2 motion-reduce:transition-none motion-reduce:hover:translate-y-0">
              <div className="p-3 sm:p-4">
                <img
                  src={project.image}
                  alt={`Screenshot of the ${project.title} project`}
                  loading="lazy"
                  decoding="async"
                  className="h-40 w-full rounded-xl object-cover sm:h-48"
                />
              </div>

              <div className="flex flex-1 flex-col p-4 pt-0 sm:p-6 sm:pt-0">
                <h3 className="mb-2 text-xl font-bold break-words text-content sm:text-2xl">
                  {/* Stretched button: the whole card is clickable and keyboard accessible */}
                  <button
                    type="button"
                    aria-haspopup="dialog"
                    onClick={(e) => handleOpenModal(project, e.currentTarget)}
                    className="text-left after:absolute after:inset-0 after:content-[''] focus-visible:outline-none"
                  >
                    {project.title}
                    <span className="sr-only"> (view details)</span>
                  </button>
                </h3>
                <p className="mb-4 line-clamp-3 text-sm text-muted sm:text-base">
                  {project.description}
                </p>
                {/* mt-auto : les tags restent alignés en bas, cartes de même hauteur */}
                <ul className="mt-auto flex flex-wrap gap-2" aria-label="Technologies">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full bg-purple-100 px-2 py-1 text-xs font-semibold text-purple-700 dark:bg-[#251f38] dark:text-purple-400"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
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
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-dialog-title"
            className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-xl bg-surface shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Bouton fermer : reste visible pendant le scroll de la modale */}
            <div className="sticky top-0 z-10 flex justify-end bg-surface/90 px-2 py-1 backdrop-blur">
              <button
                ref={closeButtonRef}
                type="button"
                onClick={handleCloseModal}
                aria-label="Close project details"
                className="inline-flex size-11 items-center justify-center rounded-lg text-3xl leading-none font-bold text-content transition-colors hover:text-accent"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div className="flex flex-col">
              <div className="flex w-full justify-center px-4">
                <img
                  src={selectedProject.image}
                  alt={`Screenshot of the ${selectedProject.title} project`}
                  decoding="async"
                  className="max-h-[40vh] w-full rounded-xl object-contain shadow-2xl sm:max-h-[50vh]"
                />
              </div>

              <div className="p-4 sm:p-6 lg:p-8">
                <h3
                  id="project-dialog-title"
                  className="mb-3 text-xl font-bold break-words text-content sm:mb-4 sm:text-2xl lg:text-3xl"
                >
                  {selectedProject.title}
                </h3>
                <p className="mb-4 text-sm text-muted sm:mb-6 lg:text-base">
                  {selectedProject.description}
                </p>

                <ul className="mb-4 flex flex-wrap gap-2 sm:mb-6" aria-label="Technologies">
                  {selectedProject.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full bg-purple-100 px-2 py-1 text-xs font-semibold text-purple-700 dark:bg-[#251f38] dark:text-purple-400"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

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

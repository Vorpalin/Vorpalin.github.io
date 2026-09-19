import React, { useEffect, useState } from "react";
import { projects } from "../../constants";

interface ModalLinkProps {
  href?: string | null;
  label: string;
  variant: "secondary" | "primary";
}

function ModalLink({ href, label, variant }: ModalLinkProps) {
  const base =
    "flex-1 px-4 py-2 rounded-xl text-sm sm:text-base lg:text-xl font-semibold text-center";

  // Lien absent, vide ou "#" : bouton désactivé
  if (!href || href.trim() === "" || href === "#") {
    return (
      <span
        aria-disabled="true"
        title="Not available"
        className={`${base} bg-content/5 text-muted/50 cursor-not-allowed select-none`}
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
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${colors}`}
    >
      {label}
    </a>
  );
}

interface Project {
  id: number | string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string | null;
  webapp?: string | null;
}

function Projects()
{
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpenModal = (project: Project) => setSelectedProject(project);
  const handleCloseModal = () => setSelectedProject(null);

  // Ferme avec Échap et bloque le scroll de la page quand la modale est ouverte
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
      className="relative py-16 sm:py-24 px-5 sm:px-[7vw] lg:px-[12vw] font-sans"
    >
      {/* Section Title */}
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-content">PROJECTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-muted mt-4 text-base sm:text-lg font-semibold">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
        {(projects as Project[]).map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="flex min-w-0 flex-col border border-line bg-surface backdrop-blur-md rounded-2xl shadow-lg overflow-hidden cursor-pointer transition duration-300 sm:hover:-translate-y-2 hover:shadow-purple-500/50"
          >
            <div className="p-3 sm:p-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 sm:h-48 object-cover rounded-xl"
              />
            </div>

            <div className="flex flex-1 flex-col p-4 sm:p-6 pt-0 sm:pt-0">
              <h3 className="text-xl sm:text-2xl font-bold text-content mb-2 break-words">
                {project.title}
              </h3>
              <p className="text-muted mb-4 text-sm sm:text-base line-clamp-3">
                {project.description}
              </p>
              {/* mt-auto : les tags restent alignés en bas, cartes de même hauteur */}
              <div className="mt-auto flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-purple-100 text-purple-700 dark:bg-[#251f38] dark:text-purple-400 text-xs font-semibold rounded-full px-2 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Container */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-3 sm:p-4"
          onClick={handleCloseModal}
        >
          <div
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-surface rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Bouton fermer : reste visible pendant le scroll de la modale */}
            <div className="sticky top-0 z-10 flex justify-end bg-surface/90 backdrop-blur px-4 py-2">
              <button
                onClick={handleCloseModal}
                aria-label="Close"
                className="text-content text-3xl font-bold leading-none hover:text-purple-500"
              >
                &times;
              </button>
            </div>

            <div className="flex flex-col">
              <div className="w-full flex justify-center px-4">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full max-h-[40vh] sm:max-h-[50vh] object-contain rounded-xl shadow-2xl"
                />
              </div>

              <div className="p-4 sm:p-6 lg:p-8">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-content mb-3 sm:mb-4 break-words">
                  {selectedProject.title}
                </h3>
                <p className="text-muted mb-4 sm:mb-6 text-sm lg:text-base">
                  {selectedProject.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-purple-100 text-purple-700 dark:bg-[#251f38] dark:text-purple-400 text-xs font-semibold rounded-full px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
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
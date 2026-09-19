import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import ThemeToggle from "../../ThemeToggle";

interface NavLink {
  id: string;
  label: string;
}

const LINKS: NavLink[] = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // check scroll and change navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // scroll function
  const handleMenuItemClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 z-50 w-full px-[7vw] transition duration-300 lg:px-[12vw] ${
        isScrolled ? "bg-page/80 shadow-md backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between gap-8 py-5 text-content">
        {/* Logo */}
        <div className="shrink-0 cursor-pointer text-lg font-semibold whitespace-nowrap">
          <span className="text-[#8245ec]">&lt;</span>
          <span className="text-content">Alexis</span>
          <span className="text-[#8245ec]">/</span>
          <span className="text-content">Mialon</span>
          <span className="text-[#8245ec]">&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden space-x-6 whitespace-nowrap text-muted md:flex lg:space-x-8">
          {LINKS.map((link) => (
            <li
              key={link.id}
              className={`cursor-pointer hover:text-[#8245ec] ${
                activeSection === link.id ? "text-[#8245ec]" : ""
              }`}
            >
              <button onClick={() => handleMenuItemClick(link.id)} className="focus-visible">
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Social Media */}
        <div className="hidden shrink-0 space-x-4 md:flex">
          {/* Github */}
          <a
            href="https://github.com/Vorpalin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-[#8245ec]"
          >
            <FaGithub size={24} />
          </a>

          {/* Linkedin */}
          <a
            href="https://www.linkedin.com/in/alexis-mialon-79117b329/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-[#8245ec]"
          >
            <FaLinkedin size={24} />
          </a>

          {/* Theme */}
          <ThemeToggle />
        </div>

        {/* Mobile Menu Icons */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="cursor-pointer text-3xl text-[#8245ec]"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="cursor-pointer text-3xl text-[#8245ec]"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu Item */}
      {isOpen && (
        <div className="absolute top-16 left-1/2 z-50 w-4/5 -translate-x-1/2 transform rounded-lg bg-page/90 shadow-lg backdrop-blur-lg md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4 text-muted">
            {LINKS.map((link) => (
              <li
                key={link.id}
                className={`cursor-pointer hover:text-content ${activeSection === link.id ? "text-[#8245ec]" : ""}`}
              >
                <button onClick={() => handleMenuItemClick(link.id)} className="focus-visible">
                  {link.label}
                </button>
              </li>
            ))}

            <div className="flex space-x-4">
              {/* Github */}
              <a
                href="https://github.com/Vorpalin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-content"
              >
                <FaGithub size={24} />
              </a>

              {/* Linkedin */}
              <a
                href="https://www.linkedin.com/in/alexis-mialon-79117b329/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-content"
              >
                <FaLinkedin size={24} />
              </a>

              {/* Theme */}
              <ThemeToggle />
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

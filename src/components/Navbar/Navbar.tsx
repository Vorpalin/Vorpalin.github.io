import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import "./Navbar.css";

interface NavLink {
  id: string;
  label: string;
}

const LINKS: NavLink[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "experiences", label: "Experiences" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

function Navbar() {
  const [theme, setTheme] = useState<"dark" | "light">(() => {
        const savedTheme = localStorage.getItem("theme");

        return savedTheme === "light" ? "light" : "dark";
    });

  useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

  const toggleTheme = () => {
        setTheme((currentTheme) =>
            currentTheme === "dark" ? "light" : "dark"
        );
    };
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = LINKS
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const renderLink = (link: NavLink) => {
    const isActive = active === link.id;
    return (
      <a
        key={link.id}
        href={`#${link.id}`}
        className={isActive ? "active" : ""}
        onClick={() => setMenuOpen(false)}
      >
        {link.label}
      </a>
    );
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">Alexis MIALON</div>

      <button
        className="navbar-burger"
        onClick={() => setMenuOpen((o) => !o)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>

      <div className={`navbar-links ${menuOpen ? "open" : ""}`}>
        {LINKS.map(renderLink)}
      </div>

      <button
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label="Toggle theme"
      >

        {theme === "dark" ? <Sun /> : <Moon />}
      </button>
    </nav>
  );
}

export default Navbar;

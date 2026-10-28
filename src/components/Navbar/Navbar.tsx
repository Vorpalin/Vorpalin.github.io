import { useEffect, useRef, useState } from "react";
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
  { id: "contact", label: "Contact" },
];

const ICON_BUTTON =
  "inline-flex size-11 items-center justify-center rounded-lg text-muted transition-colors hover:text-accent";

function SocialLinks() {
  return (
    <>
      <a
        href="https://github.com/Vorpalin"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub (opens in a new tab)"
        className={ICON_BUTTON}
      >
        <FaGithub size={24} aria-hidden="true" />
      </a>
      <a
        href="https://www.linkedin.com/in/alexis-mialon-79117b329/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn (opens in a new tab)"
        className={ICON_BUTTON}
      >
        <FaLinkedin size={24} aria-hidden="true" />
      </a>
      <ThemeToggle />
    </>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(() => window.scrollY > 50);

  const navRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Change the navbar background once the page is scrolled
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scrollspy: highlight the section currently in view
  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(
      (el): el is HTMLElement => el !== null
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        }
      },
      { rootMargin: "-35% 0px -60% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Mobile menu: Escape to close, focus trap, click outside, close when switching to desktop
  useEffect(() => {
    if (!isOpen) return;
    const nav = navRef.current;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (e.key !== "Tab" || !nav) return;

      const focusables = Array.from(
        nav.querySelectorAll<HTMLElement>("a[href], button:not([disabled])")
      ).filter((el) => el.offsetParent !== null);
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

    const onPointerDown = (e: PointerEvent) => {
      if (nav && !nav.contains(e.target as Node)) setIsOpen(false);
    };

    const desktop = window.matchMedia("(min-width: 768px)");
    const onBreakpoint = (e: MediaQueryListEvent) => {
      if (e.matches) setIsOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    desktop.addEventListener("change", onBreakpoint);

    // Move focus into the menu when it opens
    nav?.querySelector<HTMLElement>("#mobile-menu a")?.focus();

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
      desktop.removeEventListener("change", onBreakpoint);
    };
  }, [isOpen]);

  return (
    <nav
      ref={navRef}
      aria-label="Main"
      className={`fixed top-0 z-50 w-full px-[7vw] transition duration-300 lg:px-[12vw] ${
        isScrolled ? "bg-page/80 shadow-md backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between gap-8 py-3 text-content">
        {/* Logo */}
        <a
          href="#about"
          aria-label="Alexis Mialon, back to top"
          className="shrink-0 rounded text-lg font-semibold whitespace-nowrap"
        >
          <span aria-hidden="true" className="text-accent">
            &lt;
          </span>
          <span aria-hidden="true">Alexis</span>
          <span aria-hidden="true" className="text-accent">
            /
          </span>
          <span aria-hidden="true">Mialon</span>
          <span aria-hidden="true" className="text-accent">
            &gt;
          </span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden gap-6 whitespace-nowrap md:flex lg:gap-8">
          {LINKS.map((link) => {
            const active = activeSection === link.id;
            return (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  aria-current={active ? "location" : undefined}
                  className={`inline-flex min-h-11 items-center rounded transition-colors hover:text-accent ${
                    active ? "text-accent" : "text-muted"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Social Media + theme */}
        <div className="hidden shrink-0 items-center gap-1 md:flex">
          <SocialLinks />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            ref={toggleRef}
            type="button"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsOpen((open) => !open)}
            className="inline-flex size-11 items-center justify-center rounded-lg text-3xl text-accent"
          >
            {isOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="absolute top-full left-1/2 z-50 w-4/5 -translate-x-1/2 rounded-lg border border-line bg-page/95 shadow-lg backdrop-blur-lg md:hidden"
        >
          <ul className="flex flex-col items-center py-2">
            {LINKS.map((link) => {
              const active = activeSection === link.id;
              return (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={() => setIsOpen(false)}
                    aria-current={active ? "location" : undefined}
                    className={`inline-flex min-h-11 items-center px-4 transition-colors hover:text-accent ${
                      active ? "text-accent" : "text-muted"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="flex items-center justify-center gap-1 pb-3">
            <SocialLinks />
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

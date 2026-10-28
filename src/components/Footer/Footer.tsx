import type { ReactNode } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const NAV_ITEMS = [
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Experience", id: "experience" },
  { name: "Projects", id: "projects" },
  { name: "Education", id: "education" },
  { name: "Contact", id: "contact" },
];

const SOCIALS: { label: string; icon: ReactNode; link: string }[] = [
  {
    label: "LinkedIn",
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/alexis-mialon-79117b329/",
  },
  { label: "GitHub", icon: <FaGithub />, link: "https://github.com/Vorpalin" },
  { label: "Discord", icon: <FaDiscord />, link: "https://www.discord.com/users/alexis0206/" },
  { label: "Instagram", icon: <FaInstagram />, link: "https://www.instagram.com/mialonalexis/" },
  { label: "X (Twitter)", icon: <FaXTwitter />, link: "https://x.com/MialonAlex454/" },
];

function Footer() {
  return (
    <footer className="px-5 py-8 text-content sm:px-[7vw] lg:px-[12vw]">
      <div className="container mx-auto text-center">
        {/* Name / Logo */}
        <p className="text-xl font-semibold text-accent">Alexis Mialon</p>

        {/* Navigation Links */}
        <nav aria-label="Footer" className="mt-4">
          <ul className="flex flex-wrap justify-center gap-x-2 sm:gap-x-4">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="inline-flex min-h-11 items-center px-2 text-sm transition-colors hover:text-accent sm:text-base"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Media Icons */}
        <ul className="mt-4 flex flex-wrap justify-center gap-1">
          {SOCIALS.map((item) => (
            <li key={item.label}>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${item.label} (opens in a new tab)`}
                className="inline-flex size-11 items-center justify-center rounded-lg text-xl transition-transform hover:scale-110 hover:text-accent motion-reduce:transition-none motion-reduce:hover:scale-100"
              >
                {item.icon}
              </a>
            </li>
          ))}
        </ul>

        {/* Copyright Text */}
        <p className="mt-6 text-sm text-muted">
          © {new Date().getFullYear()} Alexis Mialon. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

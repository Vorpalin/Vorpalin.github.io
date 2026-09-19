import { FaGithub, FaLinkedin, FaInstagram, FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
function Footer() {
  // Smooth scroll function
  const handleScroll = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="px-5 py-8 text-content sm:px-[7vw] lg:px-[12vw]">
      <div className="container mx-auto text-center">
        {/* Name / Logo */}
        <h2 className="text-xl font-semibold text-purple-500">Alexis Mialon</h2>

        {/* Navigation Links */}
        <nav className="mt-4 flex flex-wrap justify-center space-x-4 sm:space-x-6">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "projects" },
            { name: "Education", id: "education" },
            { name: "Contact", id: "contact" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="focus-visible my-1 text-sm hover:text-purple-500 sm:text-base"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media Icons */}
        <div className="mt-6 flex flex-wrap justify-center space-x-4">
          {[
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/alexis-mialon-79117b329/" },
            { icon: <FaGithub />, link: "https://github.com/Vorpalin" },
            { icon: <FaDiscord />, link: "https://www.discord.com/users/alexis0206/" },
            { icon: <FaInstagram />, link: "https://www.instagram.com/mialonalexis/" },
            { icon: <FaXTwitter />, link: "https://x.com/MialonAlex454/" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="transform text-xl transition-transform hover:scale-110 hover:text-purple-500"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright Text */}
        <p className="mt-6 text-sm text-muted">
          © {new Date().getFullYear()} Alexis Mialon. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

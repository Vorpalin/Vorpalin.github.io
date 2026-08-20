import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import "./Contact.css";

function Contact() {
    return (
        <section id="contact" className="contact">
            <h2>Get in touch</h2>

            <p>
                Interested in my profile, have a question, or want to discuss
                a project? Feel free to reach out!
            </p>

            <div className="contact-links">
                <a
                    href="mailto:alexis.mialon69@gmail.com"
                    className="contact-link"
                >
                    <Mail size={20} />
                    <span>Email</span>
                </a>

                <a
                    href="https://www.linkedin.com/in/alexis-mialon-79117b329/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                >
                    <FaLinkedin size={20} />
                    <span>LinkedIn</span>
                </a>

                <a
                    href="https://github.com/Vorpalin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                >
                    <FaGithub size={20} />
                    <span>GitHub</span>
                </a>
            </div>
        </section>
    );
}

export default Contact;

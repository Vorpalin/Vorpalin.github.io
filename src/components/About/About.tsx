import Skills from "../Skills/Skills";

import "./About.css"

function About() {
    return (
        <section id="about" className="about">
            <h1>About me</h1>
            <p>
                Student-researcher pursuing an Computer Science 
                Engineering degree at EPITA. Passionate about computer 
                science and artificial intelligence in particular,
                I am eager to learn and apply my skills 
                to real-world projects.
            </p>
            <Skills />
        </section>
    );
}

export default About;

import {
    SiLinux,
    SiNixos,
    SiUbuntu,
    SiPython,
    SiC,
    SiCplusplus,
    SiRust,
    SiOcaml,
    SiJavascript,
    SiTypescript,
    SiPostgresql,
    SiMysql,
    SiGit,
    SiGitlab,
    SiDocker,
    SiReact,
    SiGithub,
    SiNumpy,
    SiPandas,
} from "react-icons/si";

import { TbBrandCSharp } from "react-icons/tb";
import { FaJava, FaWindows, FaHtml5 } from "react-icons/fa";
import "./Skills.css";

function Skills() {
    return (
        <section id="skills" className="skills">
            <h2>Skills</h2>

            <div className="skills-grid">

                <div className="skill-card">
                    <h3>Operating Systems</h3>

                    <div className="skill-icons">
                        <SiLinux title="Linux" />
                        <SiNixos title="NixOS" />
                        <SiUbuntu title="Ubuntu" />
                        <FaWindows title="Windows" />
                    </div>
                </div>

                <div className="skill-card">
                    <h3>Programming Languages</h3>

                    <div className="skill-icons">
                        <SiPython title="Python" />
                        <SiC title="C" />
                        <SiCplusplus title="C++" />
                        <TbBrandCSharp title="C#" />
                        <SiRust title="Rust" />
                        <FaJava title="Java" />
                        <SiJavascript title="JavaScript" />
                        <SiTypescript title="TypeScript" />
                        <FaHtml5 title="HTML" />
                        <SiOcaml title="Ocaml" />
                    </div>
                </div>

                <div className="skill-card">
                    <h3>Tools & Technologies</h3>

                    <div className="skill-icons">
                        <SiGit title="Git" />
                        <SiGithub title="GitHub" />
                        <SiGitlab title="Gitlab" />
                        <SiDocker title="Docker" />
                        <SiMysql title="MySQL" />
                        <SiPostgresql title="PostgreSQL" />
                        <SiNumpy title="Numpy" />
                        <SiPandas title="Pandas" />
                        <SiReact title="React" />
                    </div>
                </div>

                <div className="skill-card">
                    <h3>Languages</h3>

                    <div className="skill-icons">
                        <div className="language-item">
                            <span className="language-icon">🇫🇷</span>
                            <span className="language-name">French</span>
                            <span className="language-level">Native</span>
                        </div>

                        <div className="language-item">
                            <span className="language-icon">🇬🇧</span>
                            <span className="language-name">English</span>
                            <span className="language-level">C1 - TOIEC (960/990)</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Skills;

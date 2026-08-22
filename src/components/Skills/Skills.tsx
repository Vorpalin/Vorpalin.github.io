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
    SiGnubash,
    SiPostgresql,
    SiMysql,
    SiLatex,
    SiGit,
    SiGitlab,
    SiDocker,
    SiReact,
    SiGithub,
    SiNumpy,
    SiPandas,
    SiRider,
    SiPycharm,
    SiIntellijidea,
    SiUnity,
} from "react-icons/si";

import { TbBrandCSharp } from "react-icons/tb";
import { FaJava, FaWindows, FaHtml5 } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

import { motion } from "framer-motion";
import "./Skills.css";

function Skills() {
    return (
        <motion.section
            id="skills"
            className="skills"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
        >
            <h2>Skills</h2>

            <div className="skills-grid">

                <motion.div
                    className="skill-card"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <h3>Operating Systems</h3>

                    <div className="skill-icons">
                        <SiLinux title="Linux" />
                        <SiNixos title="NixOS" />
                        <SiUbuntu title="Ubuntu" />
                        <FaWindows title="Windows" />
                    </div>
                </motion.div>

                <motion.div
                    className="skill-card"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
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
                        <SiGnubash title="Bash" />
                    </div>
                </motion.div>

                <motion.div
                    className="skill-card"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <h3>Tools & Technologies</h3>

                    <div className="skill-icons">
                        <SiGit title="Git" />
                        <SiGithub title="GitHub" />
                        <SiGitlab title="Gitlab" />
                        <SiDocker title="Docker" />
                        <SiMysql title="MySQL" />
                        <SiPostgresql title="PostgreSQL" />
                        <SiLatex title="LaTeX" />
                        <SiNumpy title="Numpy" />
                        <SiPandas title="Pandas" />
                        <SiReact title="React" />
                        <VscVscode title="VScode" />
                        <SiRider title="Rider" />
                        <SiPycharm title="Pycharm" />
                        <SiIntellijidea title="IntellijIdea" />
                        <SiUnity title="Unity" />
                    </div>
                </motion.div>

                <motion.div
                    className="skill-card"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
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
                </motion.div>

            </div>
        </motion.section>
    );
}

export default Skills;

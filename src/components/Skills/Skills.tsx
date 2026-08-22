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

type SkillIconProps = {
    name: string;
    children: React.ReactNode;
};

function SkillIcon({ name, children }: SkillIconProps) {
    return (
        <div
            className="skill-icon"
            data-tooltip={name}
        >
            {children}
        </div>
    );
}


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

                    <br />

                    <div className="skill-icons">
                        <SkillIcon name="Linux">
                            <SiLinux color="grey"/>
                        </SkillIcon>

                        <SkillIcon name="NixOS">
                            <SiNixos color="cyan"/>
                        </SkillIcon>

                        <SkillIcon name="Ubuntu">
                            <SiUbuntu color="orange"/>
                        </SkillIcon>

                        <SkillIcon name="Windows">
                            <FaWindows color="blue"/>
                        </SkillIcon>
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

                    <br />

                    <div className="skill-icons">
                        <SkillIcon name="Python">
                            <SiPython color="yellow"/>
                        </SkillIcon>

                        <SkillIcon name="C">
                            <SiC color="blue"/>
                        </SkillIcon>

                        <SkillIcon name="C++">
                            <SiCplusplus color="blue"/>
                        </SkillIcon>

                        <SkillIcon name="C#">
                            <TbBrandCSharp color="purple"/>
                        </SkillIcon>

                        <SkillIcon name="Rust">
                            <SiRust color="orange"/>
                        </SkillIcon>

                        <SkillIcon name="Java">
                            <FaJava color="blue"/>
                        </SkillIcon>

                        <SkillIcon name="JavaScript">
                            <SiJavascript color="yellow"/>
                        </SkillIcon>

                        <SkillIcon name="TypeScript">
                            <SiTypescript color="blue"/>
                        </SkillIcon>

                        <SkillIcon name="HTML">
                            <FaHtml5 color="orange"/>
                        </SkillIcon>

                        <SkillIcon name="Ocaml">
                            <SiOcaml color="orange"/>
                        </SkillIcon>

                        <SkillIcon name="Bash">
                            <SiGnubash color="grey"/>
                        </SkillIcon>
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

                    <br />

                    <div className="skill-icons">
                        <SkillIcon name="Git">
                            <SiGit color="orange"/>
                        </SkillIcon>

                        <SkillIcon name="GitHub">
                            <SiGithub />
                        </SkillIcon>

                        <SkillIcon name="Gitlab">
                            <SiGitlab color="orange"/>
                        </SkillIcon>

                        <SkillIcon name="Docker">
                            <SiDocker color="blue"/>
                        </SkillIcon>

                        <SkillIcon name="MySQL">
                            <SiMysql color="blue"/>
                        </SkillIcon>

                        <SkillIcon name="PostgreSQL">
                            <SiPostgresql color="blue"/>
                        </SkillIcon>

                        <SkillIcon name="LaTeX">
                            <SiLatex color="cyan"/>
                        </SkillIcon>

                        <SkillIcon name="Numpy">
                            <SiNumpy color="cyan"/>
                        </SkillIcon>

                        <SkillIcon name="Pandas">
                            <SiPandas color="blue"/>
                        </SkillIcon>

                        <SkillIcon name="React">
                            <SiReact color="cyan"/>
                        </SkillIcon>

                        <SkillIcon name="VScode">
                            <VscVscode color="blue"/>
                        </SkillIcon>

                        <SkillIcon name="Rider">
                            <SiRider />
                        </SkillIcon>

                        <SkillIcon name="Pycharm">
                            <SiPycharm />
                        </SkillIcon>

                        <SkillIcon name="IntellijIdea">
                            <SiIntellijidea />
                        </SkillIcon>

                        <SkillIcon name="Unity">
                            <SiUnity color="grey"/>
                        </SkillIcon>
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

                    <br />

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

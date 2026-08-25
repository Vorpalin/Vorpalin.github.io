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
                            <SiLinux />
                        </SkillIcon>

                        <SkillIcon name="NixOS">
                            <SiNixos />
                        </SkillIcon>

                        <SkillIcon name="Ubuntu">
                            <SiUbuntu />
                        </SkillIcon>

                        <SkillIcon name="Windows">
                            <FaWindows />
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
                            <SiPython />
                        </SkillIcon>

                        <SkillIcon name="C">
                            <SiC />
                        </SkillIcon>

                        <SkillIcon name="C++">
                            <SiCplusplus />
                        </SkillIcon>

                        <SkillIcon name="C#">
                            <TbBrandCSharp />
                        </SkillIcon>

                        <SkillIcon name="Rust">
                            <SiRust />
                        </SkillIcon>

                        <SkillIcon name="Java">
                            <FaJava />
                        </SkillIcon>

                        <SkillIcon name="JavaScript">
                            <SiJavascript />
                        </SkillIcon>

                        <SkillIcon name="TypeScript">
                            <SiTypescript />
                        </SkillIcon>

                        <SkillIcon name="HTML">
                            <FaHtml5 />
                        </SkillIcon>

                        <SkillIcon name="Ocaml">
                            <SiOcaml />
                        </SkillIcon>

                        <SkillIcon name="Bash">
                            <SiGnubash />
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
                            <SiGit />
                        </SkillIcon>

                        <SkillIcon name="GitHub">
                            <SiGithub />
                        </SkillIcon>

                        <SkillIcon name="Gitlab">
                            <SiGitlab />
                        </SkillIcon>

                        <SkillIcon name="Docker">
                            <SiDocker />
                        </SkillIcon>

                        <SkillIcon name="MySQL">
                            <SiMysql />
                        </SkillIcon>

                        <SkillIcon name="PostgreSQL">
                            <SiPostgresql />
                        </SkillIcon>

                        <SkillIcon name="LaTeX">
                            <SiLatex />
                        </SkillIcon>

                        <SkillIcon name="Numpy">
                            <SiNumpy />
                        </SkillIcon>

                        <SkillIcon name="Pandas">
                            <SiPandas />
                        </SkillIcon>

                        <SkillIcon name="React">
                            <SiReact />
                        </SkillIcon>

                        <SkillIcon name="VScode">
                            <VscVscode />
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
                            <SiUnity />
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

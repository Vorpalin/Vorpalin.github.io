import { SkillsInfo } from "../../constants";
import TiltCard from "../TiltCard/TiltCard";
import Reveal from "../Reveal/Reveal";

function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="px-[12vw] py-24 pb-24 font-sans clip-path-custom bg-skills-gradient md:px-[7vw] lg:px-[20vw]"
    >
      {/* Section Title */}
      <div className="mb-8 text-center">
        <h2 id="skills-title" className="text-3xl font-bold text-content sm:text-4xl">
          SKILLS
        </h2>
        <div className="mx-auto mt-2 h-1 w-24 bg-[#8245ec]"></div>
        <p className="mt-4 text-lg font-semibold text-muted">
          A collection of my technical skills and expertise honed through various projects and
          experiences
        </p>
      </div>

      {/* Skill Categories */}
      <div className="grid grid-cols-1 gap-6 py-10 lg:grid-cols-2 lg:gap-8">
        {SkillsInfo.map((category, index) => (
          <Reveal key={category.title} delay={(index + 1) * 100}>
            <div
              className="min-w-0 rounded-2xl border border-line bg-surface/60 px-4 py-6 shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] backdrop-blur-md sm:px-8"
            >
              <h3 className="mb-4 text-center text-2xl font-semibold text-muted sm:text-3xl">
                {category.title}
              </h3>

              {/* Skill Items */}
              <TiltCard className="w-full">
                <ul
                  className="grid w-full grid-cols-3 gap-2 sm:gap-3"
                  style={{ containerType: "inline-size" }}
                >
                  {category.skills.map((skill) => (
                    <li
                      key={skill.name}
                      className="flex min-w-0 flex-col items-center justify-center gap-1.5 rounded-2xl border-2 border-line bg-transparent px-1 py-3 text-center sm:rounded-3xl"
                    >
                      {/* Decorative: the technology name is written right below */}
                      <img
                        src={skill.logo}
                        alt=""
                        width={32}
                        height={32}
                        loading="lazy"
                        decoding="async"
                        className={`h-6 w-6 shrink-0 sm:h-8 sm:w-8 ${skill.invertOnDark ? "dark:invert" : ""}`}
                      />
                      <span className="text-[clamp(0.55rem,3cqw,0.875rem)] whitespace-nowrap text-content">
                        {skill.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </TiltCard>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default Skills;

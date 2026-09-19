import React from "react";
import { SkillsInfo } from "../../constants";
import TiltCard from "../TiltCard/TiltCard";

function Skills() {
  return (
    <section
      id="skills"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
    >
      {/* Section Title */}
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-content">SKILLS</h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
        <p className="text-muted mt-4 text-lg font-semibold">
          A collection of my technical skills and expertise honed through
          various projects and experiences
        </p>
      </div>

      {/* Skill Categories */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 py-10">
        {SkillsInfo.map((category) => (
          <div
            key={category.title}
            className="min-w-0 bg-surface/60 backdrop-blur-md px-4 sm:px-8 py-6 rounded-2xl border border-line
                            shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]"
          >
            <h3 className="text-2xl sm:text-3xl font-semibold text-muted mb-4 text-center">
              {category.title}
            </h3>

            {/* Skill Items */}
            <TiltCard className="w-full">
              <div
                className="grid grid-cols-3 gap-2 sm:gap-3 w-full"
                style={{ containerType: "inline-size" }}
              >
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex min-w-0 flex-col items-center justify-center gap-1.5 bg-transparent border-2 border-line rounded-2xl sm:rounded-3xl py-3 px-1 text-center"
                  >
                    <img
                      src={skill.logo}
                      alt={`${skill.name} logo`}
                      className="w-6 h-6 sm:w-8 sm:h-8 shrink-0"
                    />
                    <span className="whitespace-nowrap text-content text-[clamp(0.55rem,3cqw,0.875rem)]">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </TiltCard>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;

import React from "react";
import { education } from "../../constants";

function Education() {
  return (
    <section
      id="education"
      className="py-16 sm:py-24 px-5 sm:px-[7vw] lg:px-[12vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-content">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-muted mt-4 text-base sm:text-lg font-semibold">
          My education has been a journey of learning and development. Here are
          the details of my academic background
        </p>
      </div>

      {/* Education Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute top-0 left-5 sm:left-1/2 h-full w-1 -translate-x-1/2 bg-content/40" />

        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`relative flex pl-14 sm:pl-0 mb-10 sm:mb-16 last:mb-0 ${
              index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
            }`}
          >
            {/* Timeline Circle */}
            <div className="absolute left-5 sm:left-1/2 top-4 sm:top-6 -translate-x-1/2 z-10 w-10 h-10 sm:w-14 sm:h-14 rounded-full border-4 border-[#8245ec] bg-gray-400 overflow-hidden">
              <img
                src={edu.img}
                alt={edu.school}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Card */}
            <div className="min-w-0 w-full sm:w-[calc(50%-2.5rem)] p-4 sm:p-6 rounded-2xl border border-line bg-surface backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transition-transform duration-300 sm:hover:scale-[1.03]">
              <div className="flex items-center gap-4 sm:gap-6">
                {/* School logo */}
                <div className="w-20 h-14 sm:w-24 sm:h-16 shrink-0 bg-content/40 rounded-md overflow-hidden">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Degree, school, date */}
                <div className="min-w-0 flex flex-col">
                  <h3 className="text-lg sm:text-xl font-semibold text-content break-words">
                    {edu.degree}
                  </h3>
                  <h4 className="text-sm sm:text-base text-muted break-words">
                    {edu.school}
                  </h4>
                  <p className="text-xs sm:text-sm text-muted mt-1">
                    {edu.date}
                  </p>
                </div>
              </div>

              <p className="mt-4 text-sm sm:text-base text-muted font-bold">
                Grade: {edu.grade}
              </p>
              <p className="mt-2 text-sm sm:text-base text-muted">
                {edu.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;

import { experiences } from "../../constants";

function Experience() {
  return (
    <section
      id="experience"
      className="px-5 py-16 font-sans bg-skills-gradient clip-path-custom-2 sm:px-[7vw] sm:py-24 lg:px-[12vw]"
    >
      {/* Section Title */}
      <div className="mb-12 text-center sm:mb-16">
        <h2 className="text-3xl font-bold text-content sm:text-4xl">EXPERIENCE</h2>
        <div className="mx-auto mt-4 h-1 w-32 bg-purple-500"></div>
        <p className="mt-4 text-base font-semibold text-muted sm:text-lg">
          A collection of my work experience and the roles I have taken in various organizations
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute top-0 left-5 h-full w-1 -translate-x-1/2 bg-content/40 sm:left-1/2" />

        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`relative mb-10 flex pl-14 last:mb-0 sm:mb-16 sm:pl-0 ${
              index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
            }`}
          >
            {/* Timeline Circle */}
            <div className="absolute top-4 left-5 z-10 h-10 w-10 -translate-x-1/2 overflow-hidden rounded-full border-4 border-[#8245ec] bg-gray-400 sm:top-6 sm:left-1/2 sm:h-14 sm:w-14">
              <img
                src={experience.img}
                alt={experience.company}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Card */}
            <div className="w-full min-w-0 rounded-2xl border border-line bg-surface p-4 shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] backdrop-blur-md transition-transform duration-300 sm:w-[calc(50%-2.5rem)] sm:p-6 sm:hover:scale-[1.03]">
              <div className="flex items-center gap-4 sm:gap-6">
                {/* Company logo */}
                <div className="h-14 w-14 shrink-0 overflow-hidden rounded-md bg-content/40 sm:h-16 sm:w-16">
                  <img
                    src={experience.img}
                    alt={experience.company}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Role, company, date */}
                <div className="flex min-w-0 flex-col">
                  <h3 className="text-lg font-semibold break-words text-content sm:text-xl">
                    {experience.role}
                  </h3>
                  <h4 className="text-sm break-words text-muted sm:text-base">
                    {experience.company}
                  </h4>
                  <p className="mt-1 text-xs text-muted sm:text-sm">{experience.date}</p>
                </div>
              </div>

              <p className="mt-4 text-sm text-muted sm:text-base">{experience.desc}</p>

              <div className="mt-4">
                <h5 className="font-medium text-content">Skills:</h5>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {experience.skills.map((skill, i) => (
                    <li
                      key={i}
                      className="rounded-lg border border-gray-400 bg-[#8245ec] px-3 py-1 text-xs text-white sm:text-sm"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;

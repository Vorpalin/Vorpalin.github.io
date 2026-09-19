import { education } from "../../constants";

function Education() {
  return (
    <section
      id="education"
      className="py-16 sm:py-24 pb-[calc(4rem+var(--cut))] sm:pb-[calc(6rem+var(--cut))] px-5 sm:px-[7vw] lg:px-[12vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="mb-12 text-center sm:mb-16">
        <h2 className="text-3xl font-bold text-content sm:text-4xl">EDUCATION</h2>
        <div className="mx-auto mt-4 h-1 w-32 bg-purple-500"></div>
        <p className="mt-4 text-base font-semibold text-muted sm:text-lg">
          My education has been a journey of learning and development. Here are the details of my
          academic background
        </p>
      </div>

      {/* Education Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute top-0 left-5 h-full w-1 -translate-x-1/2 bg-content/40 sm:left-1/2" />

        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`relative mb-10 flex pl-14 last:mb-0 sm:mb-16 sm:pl-0 ${
              index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
            }`}
          >
            {/* Timeline Circle */}
            <div className="absolute top-4 left-5 z-10 h-10 w-10 -translate-x-1/2 overflow-hidden rounded-full border-4 border-[#8245ec] bg-gray-400 sm:top-6 sm:left-1/2 sm:h-14 sm:w-14">
              <img src={edu.img} alt={edu.school} className="h-full w-full object-cover" />
            </div>

            {/* Card */}
            <div className="w-full min-w-0 rounded-2xl border border-line bg-surface p-4 shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] backdrop-blur-md transition-transform duration-300 sm:w-[calc(50%-2.5rem)] sm:p-6 sm:hover:scale-[1.03]">
              <div className="flex items-center gap-4 sm:gap-6">
                {/* School logo */}
                <div className="h-14 w-20 shrink-0 overflow-hidden rounded-md bg-content/40 sm:h-16 sm:w-24">
                  <img src={edu.img} alt={edu.school} className="h-full w-full object-cover" />
                </div>

                {/* Degree, school, date */}
                <div className="flex min-w-0 flex-col">
                  <h3 className="text-lg font-semibold break-words text-content sm:text-xl">
                    {edu.degree}
                  </h3>
                  <h4 className="text-sm break-words text-muted sm:text-base">{edu.school}</h4>
                  <p className="mt-1 text-xs text-muted sm:text-sm">{edu.date}</p>
                </div>
              </div>

              <p className="mt-4 text-sm font-bold text-muted sm:text-base">Grade: {edu.grade}</p>
              <p className="mt-2 text-sm text-muted sm:text-base">{edu.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;

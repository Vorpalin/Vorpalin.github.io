import TiltCard from "../TiltCard/TiltCard";
import { TypeAnimation } from "react-type-animation";
import { useReducedMotion } from "motion/react";
import { FiDownload } from "react-icons/fi";

import profilImage from "../../assets/photo_linkedin.webp";

const ROLES = "research student, AI student and developer";

const PRIMARY_CTA =
  "inline-flex min-h-11 items-center gap-2 rounded-full bg-linear-to-r from-purple-700 to-pink-600 px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:opacity-90 motion-reduce:transition-none motion-reduce:hover:translate-y-0";
const SECONDARY_CTA =
  "inline-flex min-h-11 items-center rounded-full border-2 border-accent px-6 py-3 font-semibold text-accent transition hover:bg-accent hover:text-page motion-reduce:transition-none";

function About() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="mt-16 px-[7vw] py-4 font-sans md:mt-24 lg:mt-32 lg:px-[10vw] xl:px-[15vw]"
    >
      <div className="flex flex-col-reverse items-center justify-between gap-8 md:flex-row md:gap-10">
        {/* Left Side */}
        <div className="min-w-0 text-center md:w-1/2 md:text-left">
          <h1 id="about-title" className="mb-4 leading-tight font-bold text-content">
            <span className="mb-2 block text-3xl sm:text-4xl lg:text-5xl">Hi, I am</span>
            <span className="block text-4xl sm:text-5xl lg:text-6xl">Alexis Mialon</span>
          </h1>

          <p className="mb-4 min-h-[2.5rem] text-xl leading-tight font-semibold sm:text-2xl lg:text-3xl">
            <span className="text-content">I am a </span>
            <span className="text-accent">
              {reduceMotion ? (
                <span>{ROLES}</span>
              ) : (
                <>
                  {/* The animation is hidden from screen readers, which get the full text once */}
                  <span aria-hidden="true">
                    <TypeAnimation
                      sequence={["research student", 2000, "AI student", 2000, "developer", 2000]}
                      speed={50}
                      repeat={Infinity}
                      cursor={true}
                    />
                  </span>
                  <span className="sr-only">{ROLES}</span>
                </>
              )}
            </span>
          </p>

          <p className="mt-6 mb-8 text-base leading-relaxed text-muted sm:text-lg">
            Computer Science Engineering student at EPITA, currently an AI intern at Opensee. I have
            done research in differential cryptanalysis and taught programming to first-year
            students. I enjoy AI, algorithms and systems programming, and I like turning them into
            projects that actually run: emulators, games and AI tools.
          </p>

          <div className="flex flex-wrap justify-center gap-3 md:justify-start">
            <a
              href={`${import.meta.env.BASE_URL}CV_Alexis_MIALON.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className={PRIMARY_CTA}
            >
              <FiDownload aria-hidden="true" />
              Download CV<span className="sr-only"> (PDF, opens in a new tab)</span>
            </a>
            <a href="#projects" className={SECONDARY_CTA}>
              View my projects
            </a>
            <a href="#contact" className={SECONDARY_CTA}>
              Contact me
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex w-full min-w-0 justify-center md:w-1/2 md:justify-end">
          <TiltCard className="aspect-square w-48 max-w-full rounded-full border-4 border-purple-700 sm:w-64 md:w-64 lg:w-80 xl:w-[26rem]">
            <img
              src={profilImage}
              alt="Portrait of Alexis Mialon"
              width={465}
              height={519}
              fetchPriority="high"
              decoding="async"
              className="h-full w-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </TiltCard>
        </div>
      </div>
    </section>
  );
}

export default About;

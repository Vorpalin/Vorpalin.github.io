import TiltCard from "../TiltCard/TiltCard";
import { TypeAnimation } from "react-type-animation";
import { FiDownload } from "react-icons/fi";

import profilImage from "../../assets/photo_linkedin.png";

function About() {
  return (
    <section
      id="about"
      className="mt-16 px-[7vw] py-4 font-sans md:mt-24 lg:mt-32 lg:px-[10vw] xl:px-[15vw]"
    >
      <div className="flex flex-col-reverse items-center justify-between gap-8 md:flex-row md:gap-10">
        {/* Left Side */}
        <div className="min-w-0 text-center md:w-1/2 md:text-left">
          <h1 className="mb-2 text-3xl leading-tight font-bold text-content sm:text-4xl lg:text-5xl">
            Hi, I am
          </h1>
          <h2 className="mb-4 text-4xl leading-tight font-bold text-content sm:text-5xl lg:text-6xl">
            Alexis Mialon
          </h2>
          <h3 className="mb-4 min-h-[2.5rem] text-xl leading-tight font-semibold text-[#8245ec] sm:text-2xl md:text-2xl lg:text-3xl">
            <span className="text-content">I am a </span>
            <TypeAnimation
              sequence={["research student", 2000, "AI student", 2000, "developer", 2000]}
              speed={50}
              repeat={Infinity}
              cursor={true}
            />
          </h3>

          <p className="mt-6 mb-8 text-base leading-relaxed text-muted sm:text-lg">
            Research student pursuing a Computer Science Engineering degree at EPITA. Passionate
            about computer science and artificial intelligence in particular, I am eager to learn
            and apply my skills to real-world projects.
          </p>

          <a
            href={`${import.meta.env.BASE_URL}CV_Alexis_MIALON.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-purple-600 to-pink-500 px-6 py-3 font-semibold text-white transition hover:opacity-90"
          >
            <FiDownload />
            Download CV
          </a>
        </div>

        {/* Right Side */}
        <div className="flex w-full min-w-0 justify-center md:w-1/2 md:justify-end">
          <TiltCard className="aspect-square w-48 max-w-full rounded-full border-4 border-purple-700 sm:w-64 md:w-64 lg:w-80 xl:w-[26rem]">
            <img
              src={profilImage}
              alt="Alexis Mialon"
              className="h-full w-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </TiltCard>
        </div>
      </div>
    </section>
  );
}

export default About;

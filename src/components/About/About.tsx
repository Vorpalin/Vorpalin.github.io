import React from "react";
import TiltCard from "../TiltCard/TiltCard";
import { TypeAnimation } from "react-type-animation";
import { FiDownload } from "react-icons/fi";

import profilImage from "../../assets/photo_linkedin.jpg";

function About() {
  return (
    <section
      id="about"
      className="mt-16 px-[7vw] py-4 font-sans md:mt-24 md:px-[7vw] lg:mt-32 lg:px-[20vw]"
    >
      <div className="flex flex-col-reverse items-center justify-between md:flex-row">
        {/* Left Side */}
        <div className="mt-8 text-center md:mt-0 md:w-1/2 md:text-left">
          {/* Greeting */}
          <h1 className="mb-2 text-3xl leading-tight font-bold text-content sm:text-4xl md:text-5xl">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="mb-4 text-4xl leading-tight font-bold text-content sm:text-5xl md:text-6xl">
            Alexis Mialon
          </h2>
          {/* Skills Heading with Typing Effect */}
          <h3 className="mb-4 text-xl leading-tight font-semibold text-[#8245ec] sm:text-2xl md:text-3xl">
            <span className="text-content">I am a </span>

            <TypeAnimation
              sequence={["Research student", 2000, "AI student", 2000, "Developer", 2000]}
              speed={50}
              repeat={Infinity}
              cursor={true}
            />
          </h3>

          {/* About me paragraph */}
          <p className="mt-8 mb-10 text-base leading-relaxed text-gray-400 sm:text-lg md:text-lg">
            Research student pursuing an Computer Science Engineering degree at EPITA. Passionate
            about computer science and artificial intelligence in particular, I am eager to learn
            and apply my skills to real-world projects.
          </p>
          {/* Resume Button */}
          <a
            href={`${import.meta.env.BASE_URL}CV_Alexis_MIALON.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-linear-to-r from-purple-600 to-pink-500 px-6 py-3 font-semibold text-white transition hover:opacity-90"
          >
            <FiDownload />
            Download CV
          </a>
        </div>

        {/* Right Side */}
        <div className="flex justify-center md:w-1/2 md:justify-end">
          <TiltCard className="h-48 w-48 rounded-full border-4 border-purple-700 sm:h-64 sm:w-64 md:h-[30rem] md:w-[30rem]">
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

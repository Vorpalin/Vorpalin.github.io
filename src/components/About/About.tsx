import React from "react";
import TiltCard from "../TiltCard/TiltCard";
import { TypeAnimation } from "react-type-animation";
import { FiDownload } from "react-icons/fi";

import profilImage from "../../assets/photo_linkedin.jpg";

function About() {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-content mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-content mb-4 leading-tight">
            Alexis Mialon
          </h2>
          {/* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-content">I am a </span>

            <TypeAnimation
              sequence={[
                "Research student",
                2000,
                "AI student",
                2000,
                "Developer",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
              cursor={true}
            />
          </h3>

          {/* About me paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            Research student pursuing an Computer Science Engineering degree at
            EPITA. Passionate about computer science and artificial intelligence
            in particular, I am eager to learn and apply my skills to real-world
            projects.
          </p>
          {/* Resume Button */}
          <a
              href={`${import.meta.env.BASE_URL}CV_Alexis_MIALON.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 px-6 py-3 rounded-full bg-linear-to-r from-purple-600 to-pink-500 text-white font-semibold hover:opacity-90 transition"
            >
              <FiDownload />
              Download CV
            </a>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <TiltCard className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full">
            <img
              src={profilImage}
              alt="Alexis Mialon"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </TiltCard>
        </div>
      </div>
    </section>
  );
}

export default About;

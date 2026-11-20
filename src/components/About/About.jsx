
import React from "react";
import ReactTypingEffect from "react-typing-effect";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/musharraf-profile.jpeg";

const About = () => {
  return (
    <section
      id="about"
      className="py-16 px-[7vw] md:px-[10vw] lg:px-[12vw] font-sans"    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-12">

        {/* Left Side */}
        <div className="md:w-[58%] text-center md:text-left">

          <p className="text-[#397BFF] text-sm md:text-base font-semibold tracking-[0.25em] uppercase mb-5">
            B.Tech Computer Science · Class of 2026
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-gray-300 mb-3">
            Hello, I'm
          </h1>

          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Mohd <span className="text-[#397BFF]">Musharraf.</span>
          </h2>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 text-white">
            I'm a{" "}
            <span className="text-[#397BFF]">
              <ReactTypingEffect
                text={[
                  "Full-Stack Developer",
                  "React.js Developer",
                  "Web Developer",
                ]}
                speed={100}
                eraseSpeed={50}
                typingDelay={500}
                eraseDelay={1800}
              />
            </span>
          </h3>

          <p className="text-base sm:text-lg text-gray-400 mb-9 leading-relaxed max-w-2xl">
            I'm a Computer Science graduate interested in building
            modern, responsive and user-friendly web applications.
            I work with React.js on the frontend and explore backend
            development using Node.js, Express.js, Python and MongoDB.
            I'm currently looking for an internship where I can
            contribute to real projects and grow as a developer.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4">

            <a
              href="mailto:mohdmushharraf8839@gmail.com"
              className="px-7 py-3 rounded-lg bg-[#397BFF] text-white font-semibold hover:bg-[#2865df] hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
            >
              Contact Me
            </a>

            <a
              href="https://github.com/musharraffff"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 rounded-lg border border-[#397BFF] text-white font-semibold bg-transparent hover:bg-[#397BFF] hover:text-white hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
            >
              GitHub Profile ↗
            </a>

            <a
              href="/resume.pdf"
              download="Mohd_Musharraf_Resume.pdf"
              className="px-7 py-3 rounded-lg border border-[#397BFF] text-white font-semibold hover:bg-[#397BFF] hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
            >
              Download Resume ↓
            </a>

          </div>
        </div>

        {/* Right Side - Profile Image */}
        <div className="md:w-[42%] flex justify-center">
          <Tilt
            className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-[22rem] md:h-[22rem]"
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            perspective={1000}
            scale={1.03}
            transitionSpeed={1000}
          >
            {/* Blue Glow */}
            <div className="absolute inset-3 rounded-full bg-[#397BFF] blur-3xl opacity-20" />

            {/* Image Frame */}
            <div className="relative w-full h-full rounded-full p-[5px] bg-gradient-to-br from-[#397BFF] via-[#263247] to-transparent shadow-[0_0_35px_rgba(57,123,255,0.18)] hover:shadow-[0_0_55px_rgba(57,123,255,0.35)] transition-all duration-500">

              <img
                src={profileImage}
                alt="Mohd Musharraf"
                className="w-full h-full rounded-full object-cover object-top border-4 border-[#080D18] transition-transform duration-500 hover:scale-105"
              />

            </div>
          </Tilt>
        </div>

      </div>
    </section>
  );
};

export default About;

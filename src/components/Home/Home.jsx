
import React from "react";

const Home = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-[7vw] md:px-[10vw] lg:px-[12vw] pt-24 pb-16 md:pt-28 md:pb-20"
    >
      {/* Background glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-72 h-72 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-5xl mx-auto text-center">

        {/* Availability label */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/5 text-blue-300 text-xs sm:text-sm tracking-wide mb-7">
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
          OPEN TO SOFTWARE DEVELOPMENT INTERNSHIPS
        </div>

        {/* Main headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
          Building the web,
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
            one solution at a time.
          </span>
        </h1>

        {/* Description */}
        <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto mt-6 leading-relaxed">
          Exploring full-stack development through modern web technologies,
          creative problem-solving and practical projects.
        </p>

        {/* Technology tags */}
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {["React.js", "Node.js", "Express.js", "MongoDB"].map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 text-sm text-gray-300 bg-white/[0.04] border border-white/10 rounded-lg"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Scroll indicator */}
        <button
          onClick={() =>
            document.getElementById("about")?.scrollIntoView({
              behavior: "smooth",
            })
          }
          className="mt-10 inline-flex items-center gap-2 text-sm text-blue-400 hover:text-white transition-colors"
        >
          Discover my journey
          <span className="text-lg">↓</span>
        </button>

      </div>
    </section>
  );
};

export default Home;

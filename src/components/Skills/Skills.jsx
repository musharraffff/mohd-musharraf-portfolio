
import React from "react";

const skillCategories = [
  {
    title: "Frontend Development",
    number: "01",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    title: "Backend Development",
    number: "02",
    skills: [
      "Node.js",
      "Express.js",
      "Python",
    ],
  },
  {
    title: "Database",
    number: "03",
    skills: [
      "MongoDB",
    ],
  },
  {
    title: "Development Tools",
    number: "04",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 px-[7vw] md:px-[10vw] lg:px-[12vw] font-sans"
    >
      {/* Section Heading */}
      <div className="max-w-3xl mb-14">
        <p className="text-[#397BFF] text-sm font-semibold tracking-[0.25em] uppercase mb-4">
          What I Work With
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
          Technical <span className="text-[#397BFF]">Skills.</span>
        </h2>

        <p className="text-gray-400 mt-5 text-base md:text-lg leading-relaxed">
          Technologies and tools I use to develop responsive
          interfaces, build backend applications and work with databases.
        </p>
      </div>

      {/* Skill Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {skillCategories.map((category) => (
          <div
            key={category.number}
            className="group p-7 md:p-8 rounded-xl bg-[#101827]/70 border border-white/10 hover:border-[#397BFF]/50 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-7">
              <h3 className="text-xl font-semibold text-white">
                {category.title}
              </h3>

              <span className="text-sm text-[#397BFF] font-medium">
                {category.number}
              </span>
            </div>

            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-lg bg-[#080D18] border border-white/10 text-gray-300 text-sm hover:text-white hover:border-[#397BFF]/60 transition-all duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

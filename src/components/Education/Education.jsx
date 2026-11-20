
import React from "react";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-[7vw] md:px-[10vw] lg:px-[12vw] font-sans"
    >
      {/* Section Heading */}
      <div className="max-w-3xl mb-14">
        <p className="text-[#397BFF] text-sm font-semibold tracking-[0.25em] uppercase mb-4">
          Academic Qualifications
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
          My <span className="text-[#397BFF]">Qualifications.</span>
        </h2>

        <p className="text-gray-400 mt-5 text-base md:text-lg leading-relaxed">
          My academic journey in computer science has helped me
          develop a foundation in programming and software development.
        </p>
      </div>

      {/* Qualification Cards */}
      <div className="max-w-3xl flex flex-col gap-6">

        {/* B.Tech Card */}
        <div className="relative p-7 md:p-9 rounded-xl bg-[#101827]/80 border border-white/10 hover:border-[#397BFF]/50 transition-all duration-300">

          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div>
              <p className="text-[#397BFF] text-sm font-semibold mb-3">
                BACHELOR'S DEGREE
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-white">
                B.Tech in Computer Science
              </h3>

              <p className="text-gray-300 mt-3">
                Vikrant Group of Institutions
              </p>

              <p className="text-gray-500 text-sm mt-1">
                Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV)
              </p>
            </div>

            <span className="w-fit px-4 py-2 rounded-lg bg-[#397BFF]/10 border border-[#397BFF]/30 text-[#78A8FF] text-sm font-semibold">
              2026
            </span>
          </div>

          <div className="mt-7 pt-5 border-t border-white/10">
            <p className="text-gray-400 text-sm">
              Degree: Bachelor of Technology
            </p>
          </div>
        </div>

        {/* Class 12th Card */}
        <div className="relative p-7 md:p-9 rounded-xl bg-[#101827]/80 border border-white/10 hover:border-[#397BFF]/50 transition-all duration-300">

          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div>
              <p className="text-[#397BFF] text-sm font-semibold mb-3">
                HIGHER SECONDARY
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-white">
                Class 12th
              </h3>

              <p className="text-gray-300 mt-3">
                Wishwood Cottage School
              </p>

              <p className="text-gray-500 text-sm mt-1">
                CBSE Board
              </p>
            </div>

            <span className="w-fit px-4 py-2 rounded-lg bg-[#397BFF]/10 border border-[#397BFF]/30 text-[#78A8FF] text-sm font-semibold">
              2022
            </span>
          </div>

          <div className="mt-7 pt-5 border-t border-white/10">
            <p className="text-gray-400 text-sm">
              Qualification: Higher Secondary (Class 12)
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;

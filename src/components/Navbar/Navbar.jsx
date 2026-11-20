
import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Qualifications" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 px-[7vw] md:px-[7vw] lg:px-[10vw] ${
        isScrolled
          ? "bg-[#080D18]/90 backdrop-blur-xl border-b border-white/10 shadow-lg"
          : "bg-[#080D18]/70 backdrop-blur-md"
      }`}
    >
      <div className="text-white py-5 flex justify-between items-center">

        {/* Logo */}
        <button
          onClick={() => handleMenuItemClick("home")}
          className="text-lg md:text-xl font-bold tracking-tight whitespace-nowrap"
        >
          <span className="text-[#397BFF]">&lt;</span>
          <span>Mohd</span>
          <span className="text-[#397BFF]">/</span>
          <span>Musharraf</span>
          <span className="text-[#397BFF]">&gt;</span>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-7 text-sm xl:text-base text-gray-300">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleMenuItemClick(item.id)}
                className={`transition-colors duration-200 hover:text-[#397BFF] ${
                  activeSection === item.id ? "text-[#397BFF]" : ""
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* GitHub */}
        <div className="hidden lg:flex items-center">
          <a
            href="https://github.com/musharraffff"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="text-gray-300 hover:text-[#397BFF] transition-colors"
          >
            <FaGithub size={25} />
          </a>
        </div>

        {/* Mobile / Tablet Menu Icon */}
        <button
          className="lg:hidden text-3xl text-[#397BFF]"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#080D18]/95 backdrop-blur-xl border-t border-white/10 shadow-xl lg:hidden">
          <ul className="flex flex-col items-center gap-5 py-7 text-gray-300">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleMenuItemClick(item.id)}
                  className={`hover:text-[#397BFF] transition-colors ${
                    activeSection === item.id ? "text-[#397BFF]" : ""
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}

            <li>
              <a
                href="https://github.com/musharraffff"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="flex items-center gap-2 hover:text-[#397BFF]"
              >
                <FaGithub size={22} />
                GitHub Profile
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

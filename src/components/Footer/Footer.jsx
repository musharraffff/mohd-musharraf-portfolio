
import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navigation = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Qualification", id: "education" },
    { name: "Contact", id: "contact" },
  ];

  const socialLinks = [
    {
      icon: <FaGithub />,
      name: "GitHub",
      link: "https://github.com/musharraffff",
    },
    {
      icon: <FaLinkedin />,
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/mohammed-musharraf-401832362/",
    },
    {
      icon: <FaFacebook />,
      name: "Facebook",
      link: "https://www.facebook.com/profile.php?id=100011993591085",
    },
    {
      icon: <FaEnvelope />,
      name: "Email",
      link: "mailto:mohdmushharraf8839@gmail.com",
    },
  ];

  return (
    <footer className="text-white py-12 px-[7vw] md:px-[10vw] lg:px-[12vw] border-t border-[#263247]">
      <div className="max-w-5xl mx-auto text-center">

        {/* Name and Role */}
        <h2 className="text-2xl font-bold text-[#397BFF]">
          Mohd Musharraf
        </h2>

        <p className="text-gray-400 text-sm mt-2">
          Full-Stack Developer
        </p>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-x-7 gap-y-4 mt-8">
          {navigation.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="text-gray-400 hover:text-[#397BFF] text-sm transition duration-300"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media Links */}
        <div className="flex justify-center items-center gap-7 mt-9">
          {socialLinks.map((item) => (
            <a
              key={item.name}
              href={item.link}
              target={item.name === "Email" ? undefined : "_blank"}
              rel={item.name === "Email" ? undefined : "noopener noreferrer"}
              aria-label={item.name}
              title={item.name}
              className="text-xl text-gray-400 hover:text-[#397BFF] hover:-translate-y-1 transition-all duration-300"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Divider and Copyright */}
        <div className="border-t border-[#263247] mt-9 pt-6">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Mohd Musharraf. All rights reserved.
          </p>

          <p className="text-xs text-gray-600 mt-2">
            Designed & Developed by Mohd Musharraf
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

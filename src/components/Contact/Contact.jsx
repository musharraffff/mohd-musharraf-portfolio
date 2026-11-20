
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    if (isSending) return;

    setIsSending(true);

    try {
      await emailjs.sendForm(
        "service_6r3fjrb",
        "template_08vd0cl",
        form.current,
        "toXv9jM9zPe2Rodt2"
      );

      form.current.reset();

      toast.success("Message sent successfully!", {
        theme: "dark",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);

      toast.error(
        error?.text || "Failed to send message. Please try again.",
        { theme: "dark" }
      );
    } finally {
      setIsSending(false);
    }
  };

  const inputStyle =
    "w-full p-4 rounded-xl bg-[#080D18] text-white border border-[#263247] placeholder:text-[#778397] focus:outline-none focus:border-[#397BFF] transition duration-300";

  return (
    <section
      id="contact"
      className="py-24 px-[7vw] md:px-[10vw] lg:px-[12vw] font-sans"
    >
      <ToastContainer />

      {/* Section Heading */}
      <div className="max-w-3xl mb-14">
        <p className="text-[#397BFF] text-sm font-semibold tracking-[0.25em] uppercase mb-4">
          Get In Touch
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
          Let's <span className="text-[#397BFF]">Connect.</span>
        </h2>

        <p className="text-gray-400 mt-5 text-base md:text-lg leading-relaxed">
          I'm open to Full-Stack Developer internship opportunities.
          Feel free to contact me for opportunities or collaboration.
        </p>
      </div>

      {/* Contact Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl">

        {/* Contact Information */}
        <div className="bg-[#101827]/80 border border-white/10 rounded-2xl p-7 md:p-9">
          <p className="text-[#397BFF] text-sm font-semibold tracking-widest mb-4">
            CONTACT DETAILS
          </p>

          <h3 className="text-2xl font-bold text-white mb-4">
            Let's work together.
          </h3>

          <p className="text-gray-400 leading-relaxed mb-8">
            Have an internship opportunity or want to discuss a project?
            You can reach me through email or GitHub.
          </p>

          <div className="space-y-6">
            <div>
              <p className="text-gray-500 text-sm mb-1">Email</p>
              <a
                href="mailto:mohdmushharraf8839@gmail.com"
                className="text-white hover:text-[#397BFF] transition break-all"
              >
                mohdmushharraf8839@gmail.com
              </a>
            </div>

            <div>
              <p className="text-gray-500 text-sm mb-1">GitHub</p>
              <a
                href="https://github.com/musharraffff"
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-[#397BFF] transition"
              >
                github.com/musharraffff
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-[#101827]/80 border border-white/10 rounded-2xl p-7 md:p-9">
          <h3 className="text-xl font-bold text-white mb-6">
            Send Me a Message
          </h3>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col gap-5"
          >
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className={inputStyle}
            />

            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className={inputStyle}
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className={inputStyle}
            />

            <textarea
              name="message"
              placeholder="Write your message..."
              rows="5"
              required
              className={`${inputStyle} resize-none`}
            />

            <button
              type="submit"
              disabled={isSending}
              className="w-full py-4 rounded-xl bg-[#397BFF] text-white font-semibold hover:bg-[#2865df] disabled:opacity-60 disabled:cursor-not-allowed transition duration-300"
            >
              {isSending ? "Sending..." : "Send Message →"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

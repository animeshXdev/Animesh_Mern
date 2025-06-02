import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaUserCircle, FaFolderOpen } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { MdContactMail } from "react-icons/md";

const navItems = [
  { name: "Home", icon: <AiOutlineHome /> },
  { name: "About", icon: <FaUserCircle /> },
  { name: "Projects", icon: <FaFolderOpen /> },
  { name: "Contact", icon: <MdContactMail /> },
];

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 sm:px-16 pt-16 pb-6 border-t border-emerald-700">
      <div
        className="
          max-w-6xl mx-auto
          grid grid-cols-1 sm:grid-cols-3
          gap-10 sm:gap-6
          items-center
          text-center sm:text-left
        "
      >
        {/* Left: Title + Description */}
        <div className="sm:text-left">
          <h2 className="text-2xl font-bold text-emerald-400">Animesh</h2>
          <p className="text-gray-400 mt-2 max-w-xs sm:max-w-full text-sm sm:text-base mx-auto sm:mx-0">
            MERN Stack Developer focused on building clean, scalable, and interactive web experiences.
          </p>
        </div>

        {/* Center: Navigation Icons */}
        <ul className="flex justify-center gap-8 text-gray-300 text-2xl">
          {navItems.map(({ name, icon }, i) => (
            <li
              key={i}
              className="hover:text-emerald-400 transition duration-300 cursor-pointer"
              title={name}
            >
              <a href={`#${name.toLowerCase()}`}>{icon}</a>
            </li>
          ))}
        </ul>

        {/* Right: Social Media Icons */}
        <div className="flex justify-center sm:justify-end gap-6 text-2xl text-gray-300">
          <a
            href="https://www.facebook.com/animesh.prakash.16"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition hover:scale-110 duration-300"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/active_animesh?utm_source=qr&igsh=bHE0aW5lemZzMGw0"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition hover:scale-110 duration-300"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://youtube.com/@parkour_by_animesh?si=ZTEpZ5oYgpz1AS70"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition hover:scale-110 duration-300"
            aria-label="YouTube"
          >
            <FaYoutube />
          </a>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-8 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} <a target="_blank" href="https://animesh-parkour.vercel.app/"><strong>Animesh Prakash</strong></a> . All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

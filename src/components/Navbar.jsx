import React, { useState, useRef, useEffect } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { AnimatePresence, motion } from "motion/react";

const navItems = ["Home", "About", "Projects", "Contact"];

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
  };

  return (
    <>
      <div className="sticky  top-0 bg-black text-white h-[70px] flex justify-between items-center px-10 z-50">
        <div>
          <h1 className="title font-mono text-3xl">
            <span className="text-4xl text-emerald-400">A</span>nimesh
          </h1>
        </div>

        <ul className="hidden sm:flex list-none gap-6 text-xl">
          {navItems.map((item, key) => (
            <li
              key={key}
              className="hover:text-emerald-400 cursor-pointer active:scale-90 transition"
            >
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </li>
          ))}
        </ul>

        {/* Toggle Button (Hamburger or Close) */}
        <div className="sm:hidden">
          <button
            className={`transition-colors duration-200 text-2xl ${
              isMenuOpen ? "text-emerald-400" : "text-white"
            }`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <IoClose /> : <IoMenu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.ul
            ref={menuRef}
            key="mobileMenu"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            className="fixed top-20 left-0 right-0 sm:hidden bg-black text-white py-5 gap-5 flex flex-col items-center z-50"
          >
            {navItems.map((item, key) => (
              <li
                key={key}
                className="cursor-pointer hover:text-emerald-400 active:scale-90 transition list-none text-xl"
                onClick={() => setMenuOpen(false)}
              >
                <a href={`#${item.toLowerCase()}`}>{item}</a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

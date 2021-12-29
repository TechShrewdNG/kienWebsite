import React, { useState } from "react";
import { X } from "react-feather";
import About from "./Pages/about";
import Contact from "./Pages/contact";
import Experience from "./Pages/experience";
import Resume from "./Pages/resume";
import Works from "./Pages/works";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [selectedId, setSelectedId] = useState(null);

  const showContent = () => {
    switch (selectedId) {
      case "works":
        return <Works />;
      case "contact":
        return <Contact />;
      case "resume":
        return <Experience />;
      case "experience":
        return <Resume />;
      case "about":
        return <About />;
      default:
        return null;
    }
  };

  const list = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
    duration: 0.7,
  };

  const menu = ["about", "works", "resume", "experience", "contact"];

  return (
    <>
      <div className="hidden lg:flex justify-center items-center h-screen">
        <motion.ul
          initial="hidden"
          animate="visible"
          variants={list}
          className="Words"
        >
          <li
            className="Words-line cursor-pointer"
            onClick={() => setSelectedId("about")}
          >
            <p>&nbsp;</p>
            <p>About</p>
          </li>
          <li
            className="Words-line cursor-pointer"
            onClick={() => setSelectedId("works")}
          >
            <p>About</p>
            <p>Works</p>
          </li>
          <li
            className="Words-line cursor-pointer"
            onClick={() => setSelectedId("resume")}
          >
            <p>Works</p>
            <p>Resume</p>
          </li>
          <li
            className="Words-line cursor-pointer"
            onClick={() => setSelectedId("experience")}
          >
            <p>Resume</p>
            <p>Experience</p>
          </li>
          <li
            className="Words-line cursor-pointer"
            onClick={() => setSelectedId("contact")}
          >
            <p>Experience</p>
            <p>Contact</p>
          </li>
          <li className="Words-line cursor-pointer">
            <p>Contact</p>
            <p>&nbsp;</p>
          </li>
        </motion.ul>
      </div>

      {/* mobile menu */}
      <div className="lg:hidden flex flex-wrap uppercase font-bold p-3">
        {menu.map((item, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedId(item)}
            className="relative inline-block group mb-5 md:ml-5 text-[2.7rem] cursor-pointer"
          >
            <div className="absolute inset-0 bg-white transition-transform transform translate-x-2 translate-y-2 group-hover:translate-y-0 group-hover:translate-x-0"></div>

            <div className="relative inline-block px-5 py-3 text-black font-bold tracking-widest uppercase border-2 border-black">
              {item}
            </div>
          </div>
        ))}

        <div className="md:ml-5 mt-5 text-lg text-white">&copy; kien.app</div>
      </div>

      {/* main content */}
      {!selectedId ? null : (
        <motion.div
          className={`${
            selectedId ? "" : "hidden"
          } fixed inset-0 w-full h-full z-10 bg-blue-500 bg-opacity-90 duration-300 overflow-y-auto`}
        >
          <AnimatePresence>
            <motion.div
              animate={{ x: [100, 0, 10], opacity: [0.6, 1] }}
              transition={{ duration: 0.3 }}
              className="relative group w-11/12 sm:9/12 lg:w-3/5 lg:mx-auto mx-0 sm:mx-auto lg:my-10 my-2"
            >
              <div className="absolute inset-0 bg-white transition-transform transform translate-x-2 translate-y-2 group-hover:translate-y-0 group-hover:translate-x-0"></div>
              <div
                className={`relative w-full inline-block font-bold tracking-widest border-2 border-black ${
                  selectedId === "works" ? "p-0" : "p-5 lg:p-10"
                }`}
              >
                <X
                  onClick={() => setSelectedId(null)}
                  size={15}
                  stroke={0.1}
                  className="z-10 cursor-pointer stroke-blue-600 hover:stroke-black transition absolute right-0 top-0 w-9 h-9 p-2"
                />
                {showContent()}
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      )}
    </>
  );
}

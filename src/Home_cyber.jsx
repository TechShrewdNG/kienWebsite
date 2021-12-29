import React, { useState } from "react";
import About from "./Pages/about";
import Contact from "./Pages/contact";
import Experience from "./Pages/experience";
import Resume from "./Pages/resume";
import Works from "./Pages/works";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [selectedId, setSelectedId] = useState(null);
  const menuItems = ["about", "works", "resume", "expierence", "contact"];

  const showContent = () => {
    switch (selectedId) {
      case "works":
        return <Works />;
      case "contact":
        return <Contact />;
      case "resume":
        return <Resume />;
      case "expierence":
        return <Experience />;
      case "about":
      default:
        return <About />;
    }
  };

  return (
    <>
      <div className="relative grid place-items-center h-screen ">
        <div className="flex w-3/5 sticky top-5">
          {/* menu */}
          <div className="w-4/12 mr-5">
            {menuItems.map((menu, idx) => (
              <div
                onClick={() => setSelectedId(`${menu}`)}
                key={idx}
                className="cybr-btn mb-3 text_bold"
                // style={{ background: "#000" }}
              >
                <span className="cybr-btn__text" data-text={`_${menu}_`}>
                  {menu}
                </span>
                <span className="cybr-btn__glitch"></span>
              </div>
            ))}
          </div>

          <div className="w-8/12 text-white text_thin text-lg p-5 mb-3 border border-cyber ">
            {showContent()}
          </div>
        </div>
      </div>
    </>
  );
}

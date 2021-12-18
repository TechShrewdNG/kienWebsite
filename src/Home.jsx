import React, { useState } from "react";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  AtSign,
  Briefcase,
  Check,
  CheckSquare,
  Code,
  Cpu,
  File,
} from "react-feather";
import About from "./Pages/about";
import Contact from "./Pages/contact";
import Experience from "./Pages/experience";
import Resume from "./Pages/resume";
import Works from "./Pages/works";

export default function Home() {
  const [page, setPage] = useState("about");

  const showContent = () => {
    switch (page) {
      case "works":
        return <Works />;
      case "contact":
        return <Contact />;
      case "resume":
        return <Resume />;
      case "expierence":
        return <Experience />;
      default:
        return <About />;
    }
  };

  return (
    <>
      <div className="flex flex-wrap justify-center">
        <section
          onClick={() => setPage("about")}
          className="cursor-pointer mr-3 mb-3 grow hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1"
        >
          <div className="bg-black w-full h-28 pt-4">
            <div className="border-t text-white text-3xl font-semibold pt-2 pb-4 px-5 flex justify-between items-center">
              <div className="flex flex-col">
                <div className="text-2xl">Hello</div>
                <div>I'm Kien</div>
              </div>
              <div className="flex font-medium text-3xl">
                <p className=" rounded-full p-3 bg-red-600 w-10 h-10 flex justify-center items-center mr-2">
                  K
                </p>
                <p className=" rounded-full p-3 bg-green-700 w-10 h-10 flex justify-center items-center">
                  P
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          onClick={() => setPage("works")}
          className="cursor-pointer mr-3 mb-3 w-full lg:w-96 hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1"
        >
          <div className="bg-black  h-28 pt-4">
            <div className="text-white font-semibold pt-2 pb-4 pr-1 px-5 flex justify-between items-center">
              <div className="flex flex-col">
                <div className="text-4xl mb-2">Works</div>
                <div className="flex font-medium text-lg">
                  <p className="rounded-full p-3 bg-green-700 w-7 h-7 flex justify-center items-center mr-2">
                    P
                  </p>
                  <p className="rounded-full p-3 bg-red-600 w-7 h-7 flex justify-center items-center mr-2">
                    R
                  </p>
                  <p className="rounded-full p-3 bg-orange-600 w-7 h-7 flex justify-center items-center mr-2">
                    J
                  </p>
                  <p className="rounded-full p-3 bg-yellow-500 w-7 h-7 flex justify-center items-center mr-2">
                    S
                  </p>
                </div>
              </div>
              <div className="flex ">
                <ArrowDownRight size={70} strokeWidth={0.5} />
              </div>
            </div>
          </div>
        </section>

        <section
          onClick={() => setPage("expierence")}
          className="cursor-pointer mr-3 mb-3 grow w-full lg:w-auto hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1"
        >
          <div className="bg-black h-28 pt-4">
            <div className="text-white  font-semibold pt-2 pb-4 px-5 flex justify-between items-center">
              <div className="flex flex-col">
                <div className="text-4xl mb-2">Experience</div>
                <div className="flex font-medium text-lg">
                  <p className="rounded-full p-3 bg-green-700 w-7 h-7 flex justify-center items-center mr-2">
                    M
                  </p>
                  <p className="rounded-full p-3 bg-orange-600 w-7 h-7 flex justify-center items-center mr-2">
                    Y
                  </p>
                  <p className="rounded-full p-3 bg-orange-600 w-7 h-7 flex justify-center items-center mr-2">
                    E
                  </p>
                </div>
              </div>
              <div className="flex ">
                <ArrowRight size={70} strokeWidth={0.5} />
              </div>
            </div>
          </div>
        </section>

        <section
          onClick={() => setPage("resume")}
          className="cursor-pointer mr-3 mb-3 w-full lg:w-auto hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1"
        >
          <div className="bg-black h-28 pt-4">
            <div className="text-white  font-semibold pt-2 pb-4 pr-1 px-5 flex justify-between items-center">
              <div className="flex flex-col">
                <div className="text-4xl mb-2">Resume</div>
                <div className="flex font-medium text-lg">
                  <p className="rounded-full p-3 bg-red-600 w-7 h-7 flex justify-center items-center mr-2">
                    C
                  </p>
                  <p className="rounded-full p-3 bg-yellow-500 w-7 h-7 flex justify-center items-center mr-2">
                    V
                  </p>
                </div>
              </div>
              <div className="flex ">
                <ArrowUp size={70} strokeWidth={0.5} />
              </div>
            </div>
          </div>
        </section>

        <section
          onClick={() => setPage("contact")}
          className="cursor-pointer mr-3 mb-3 w-full lg:w-auto hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1"
        >
          <div className="bg-black h-28 pt-4">
            <div className="text-white font-semibold pt-2 pb-4 pr-1 px-5 flex justify-between items-center">
              <div className="flex flex-col">
                <div className="text-4xl mb-2">Contact</div>
                <div className="flex font-medium text-lg">
                  <p className="rounded-full p-3 bg-red-600 w-7 h-7 flex justify-center items-center mr-2">
                    C
                  </p>
                  <p className="rounded-full p-3 bg-blue-600 w-7 h-7 flex justify-center items-center mr-2">
                    T
                  </p>
                  <p className="rounded-full p-3 bg-green-700 w-7 h-7 flex justify-center items-center mr-2">
                    M
                  </p>
                </div>
              </div>
              <div className="flex ">
                <ArrowUpRight size={70} strokeWidth={0.5} />
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="bg-white border-2 border-black p-3 lg:p-10 mb-10 mt-5 mr-3 font-light">
        {showContent()}
      </section>
    </>
  );
}

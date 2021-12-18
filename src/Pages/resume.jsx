import React from "react";
import { ArrowDown, ArrowRight, ExternalLink, Linkedin } from "react-feather";

export default function Resume() {
  const data = [
    {
      field: "Frontend",
      yearExp: "> 3 years",
      body: [
        { skill: "HTML5/CSS3/SCSS/SASS" },
        {
          skill:
            "Using library, frameworks like TaiwindCSS, Material UI, Bootstrap...",
        },
        { skill: "Javascript, jQuery, PHP" },
        { skill: "Angular, ReactJs, TypeScript" },
        { skill: "WordPress theme development" },
      ],
    },
    {
      field: "Backend",
      yearExp: "> 3 years",
      body: [
        { skill: "NodeJs, ExpressJs" },
        { skill: "MySQL, MongoDB, Database design" },
        { skill: "AWS S3, AWS Lambda, CDN integration" },
        { skill: "Restful API" },
        { skill: "Git" },
        { skill: "Setup and configure VPS (CentOS, Ubuntu)" },
      ],
    },
    {
      field: "Design",
      yearExp: "> 3 years",
      body: [
        { skill: "UX/UI design with Sketch App, XD" },
        { skill: "Photoshop" },
        { skill: "Illustrator" },
        { skill: "After Effects (2D Motion graphic)" },
      ],
    },
    {
      field: "Marketing",
      yearExp: "> 3 years",
      body: [
        { skill: "Manage marketing team, content team" },
        { skill: "Planing marketing strategy, set the KPIs for team member" },
        { skill: "Content planing for social channels" },
        { skill: "SEO, Facebook Ads, Google Ads management" },
        { skill: "Email marketing" },
        {
          skill:
            "Website analysis, giving advices for develop team to improve the product",
        },
        { skill: "Working with media agency, newspapers/magazine" },
      ],
    },
    {
      field: "Language",
      yearExp: "> 3 years",
      body: [
        {
          skill:
            "Able to communicate in English (good at speaking, listening, reading, writing)",
        },
        { skill: "Can read/write technical document in English" },
      ],
    },
    {
      field: "Others",
      yearExp: "> 3 years",
      body: [
        { skill: "Hand drawing" },
        { skill: "Photography" },
        {
          skill:
            "Writing in tech field (was a collaborator for tinhte.vn, eChip, LBVMVT magazine since 2000s)",
        },
      ],
    },
  ];

  return (
    <div className="">
      <div className="relative flex items-center justify-center">
        <a
          href="https://kien.app/KienPham_CV.pdf"
          rel="noreferrer"
          className="lg:absolute right-0 top-0 flex items-center inline-block px-4 py-2 border border-black hover:bg-blue-600 hover:text-white transition"
        >
          <ArrowDown size={20} strokeWidth={0.9} className="mr-2" />
          Download Resume{" "}
        </a>
      </div>

      <div className="relative mt-5 text-left">
        {data.map((item, idx) => {
          return (
            <div key={idx} className="flex relative mb-5">
              <div className="hidden md:block ">
                <div className="font-bold italic w-20">{item.field}</div>
                {/* <div className="md:flex space-x-1 text-xs">{item.yearExp}</div> */}
              </div>

              <div className="ml-10 pr-3">
                <ul className="list-disc text-sm">
                  {item.body.map((skill, id) => {
                    return (
                      <li className="mb-1" key={id}>
                        {skill.skill}
                      </li>
                    );
                  })}
                </ul>
                {/* <div className="mb-10 text-sm"></div> */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

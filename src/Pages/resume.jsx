import React from "react";
import { ArrowDown } from "react-feather";
import PageTitle from "../Components/pageTitle";

export default function Resume() {
  const data = [
    {
      field: "Frontend",
      yearExp: "> 3 years",
      body: [
        { skill: "HTML5/CSS3/SCSS/SASS" },
        {
          skill:
            "Using the libraries, frameworks like TaiwindCSS, Material UI, Bootstrap, Framer Motion, ChartJs...",
        },
        { skill: "Javascript, jQuery, PHP" },
        { skill: "Angular, ReactJs with TypeScript" },
        { skill: "WordPress theme development" },
      ],
    },
    {
      field: "Backend",
      yearExp: "> 3 years",
      body: [
        { skill: "NodeJs, ExpressJs" },
        { skill: "MySQL, MongoDB, Database design" },
        {
          skill:
            "Amazon, Google Cloud services integration: AWS S3, AWS Lambda, CDN, Google APIs... ",
        },
        { skill: "Restful API design" },
        { skill: "Git" },
        { skill: "Setup and configure VPS (CentOS, Ubuntu)" },
        {
          skill:
            "Security implementation for backend, server (CORS, JWT Authorization...)",
        },
      ],
    },
    {
      field: "Design",
      yearExp: "> 3 years",
      body: [
        { skill: "UX/UI design with Sketch App, XD" },
        { skill: "Photoshop" },
        { skill: "Illustrator" },
        { skill: "After Effects (2D Motion Graphic)" },
      ],
    },
    {
      field: "Marketing",
      yearExp: "> 3 years",
      body: [
        { skill: "Worked as a digital marketing manager before" },
        { skill: "Planing marketing strategy, set the KPIs for team members" },
        { skill: "Tracking goals and manage marketing team, content team" },
        { skill: "Content planing for social channels (Facebook, Youtube)" },
        { skill: "SEO, Facebook Ads, Google Ads management" },
        { skill: "Email marketing" },
        {
          skill:
            "Website analysis, working with the product team to improve product",
        },
        { skill: "A/B testing implementation" },
        { skill: "Working with media agencies, newspapers/magazines" },
      ],
    },
    {
      field: "Language",
      yearExp: "> 3 years",
      body: [
        {
          skill: "Able to communicate in English",
        },
        { skill: "Can read/write the technical document in English" },
      ],
    },
    {
      field: "Other skills",
      yearExp: "> 3 years",
      body: [
        { skill: "Hand drawing" },
        { skill: "Photography" },
        {
          skill:
            "Writing in the tech field (was a collaborator for tinhte.vn, eChip, LBVMVT magazine since the 2000s)",
        },
      ],
    },
    {
      field: "Education",
      yearExp: "> 3 years",
      body: [
        {
          skill:
            "HCMC University of Information Technology - Bachelor degree of Computer Science.",
        },
        {
          skill:
            "Frontend, Backend Development - Janeto Traning Center & Cybersoft Academy with excellent degree.",
        },
        {
          skill:
            "Multimedia School - I studied Sketch, Adobe Illustrator, UX/UI Design, 2D Motion Graphic with After Effects from KeyFrame tranning center.",
        },
      ],
    },
  ];

  return (
    <div className="content font-light text-gray-600">
      <PageTitle title="My Experience" />

      <div className="relative text-left">
        {data.map((item, idx) => {
          return (
            <div
              key={idx}
              className="w-full p-4 lg:p-8 overflow-hidden border border-black hover:border-blue-600 transition mb-8 last:mb-0"
            >
              <div className="">
                <div className="font-bold uppercase mb-5">{item.field}</div>
              </div>

              <div className="ml-5">
                <ul className="list-disc">
                  {item.body.map((skill, id) => {
                    return (
                      <li className="mb-1" key={id}>
                        {skill.skill}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

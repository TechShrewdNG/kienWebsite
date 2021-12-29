import React from "react";
import { Briefcase, Clock } from "react-feather";
import PageTitle from "../Components/pageTitle";

export default function Experience() {
  const data = [
    {
      time: "2021 - present",
      company: "Doutu.be",
      position: "FE, BE Developer",
      img: "https://doutu.be/static/media/doutube_logo.68bb4630.svg",
      body: "Founded Doutu.be, a short video social network. I worked with this site from idea to production. I do UX/UI design, develop API backend (NodeJs, MongoDB, AWS, AWS Lambda) and Frontend development (ReactJs). I also do some DevOps jobs, deploy the website to the server.",
    },
    {
      time: "2014 - 2017",
      company: "Otos",
      position: "Digital Marketing Manager",
      img: "https://otos.vn/ContentNew/images/logo.svg",
      body: "Otos.vn is an automobile marketplace website, I helped the company to build Marketing, Content teams. Joining in the product development process, business planning, online/offline/SEO marketing strategy. Working with Agencies, Investors, Partners, Car Dealers...",
    },
    {
      time: "2012 - 2014",
      company: "Savico",
      position: "Website Developer",
      img: "https://savico.com.vn/Content/theme_btq/images/logo.svg",
      body: "Join the first stage in Otos project development. Design the website’s structure, analyze competitors. I also developed subsidiaries’ websites and internal information systems.",
    },
    {
      time: "2013 - present",
      company: "WPGroupbuy",
      position: "WordPress Theme, Plugin Developer",
      img: "https://kien.app/images/wpgroupbuy_logo.jpg",
      body: "Start a new WordPress Theme business with a Group buying theme, plugin. Worked from planning, designing, developing, and marketing.",
    },
    {
      time: "2010 - 2012",
      company: "MusicFaces",
      position: "Website Developer, Designer",
      img: "",
      body: "Design, develop websites for popular singers like Suboi, Ho Ngoc Ha, Pham Anh Khoa... and some event websites. I also worked as a webmaster and joined in the development for an Online music website.",
    },
    {
      time: "2006 - present",
      company: "Freelancer",
      position: "Website Developer",
      img: "",
      body: "Design, develop corporate, eCommerce websites for many clients: Savico Invest, Nano Pharmacy Australia, Fujiwa, Nhat Huy Mobi, Orion New Tech...",
    },
  ];

  return (
    <div className="font-light text-gray-600">
      <PageTitle title="My Resume" />

      <div className="flex justify-between flex-wrap">
        {data.map((item, idx) => {
          return (
            <div
              key={idx}
              className="w-full p-4 lg:p-8 overflow-hidden border border-black hover:border-blue-600 transition mb-8 last:mb-0"
            >
              <div className="mb-3 lg:mb-0 lg:h-20 justify-between">
                <div className="">
                  <h5 className="text-xl font-bold text-gray-900">
                    {item.position}
                  </h5>
                  <div className="flex items-center mt-2 text-xs font-medium text-gray-600">
                    <span className="flex items-center text-gray-500 font-light">
                      <Briefcase
                        size={12}
                        stroke={0.5}
                        className="stroke-gray-500 mr-1"
                      />
                      <span className="font-normal">{item.company}</span>
                    </span>
                    <span className="flex items-center text-gray-500 font-light ml-4">
                      <Clock
                        size={10}
                        stroke={0.5}
                        className="stroke-gray-500 mr-1"
                      />{" "}
                      {item.time}
                    </span>
                  </div>
                </div>

                <div className="hidden ml-3">
                  <img
                    className="object-cover w-full h-10 rounded-lg object-fit"
                    src={item.img}
                    alt={item.company}
                  />
                </div>
              </div>

              <div className="">
                <div className="text-gray-800 text-normal lg:leading-6">
                  {item.body}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

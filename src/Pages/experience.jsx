import React from "react";

export default function Experience() {
  const data = [
    {
      time: "2021",
      month: "present",
      company: "Doutu.be",
      position: "Developer",
      body: "Founded Doutu.be, a short video social network. I worked with this site from idea to production. I do UX/UI design, develop API backend (NodeJs, MongoDB, AWS, AWS Lambda) and Frontend development (ReactJs). I also do some DevOps jobs, deploy system to server.",
    },
    {
      time: "2017",
      month: "- 2014",
      company: "Otos JSC",
      position: "Digital Marketing & Content Manager",
      body: "Otos.vn is an automobile marketplace website, I helped company to build Marketing, Content team. Joining in product development process, business planning, online/offline/SEO marketing strategy. Working with Agencies, Investors, Partners, Car Dealers...",
    },
    {
      time: "2014",
      month: "- 2012",
      company: "Savico",
      position: "Developer",
      body: "Join the first stage in Otos project development. Design the website’s structure, analyte competitors. I also developed subsidiaries’s websites and internal information system.",
    },
    {
      time: "2013",
      month: "present",
      company: "WPGroupbuy.com",
      position: "WordPress Theme, Plugin Developer",
      body: "Start new WordPress Theme business with a Group buying theme, plugin. Worked from planning, designing, developing and marketing.",
    },
    {
      time: "2012",
      month: "- 2006",
      company: "MusicFaces JSC",
      position: "Website Developer, Designer",
      body: "Design, develop websites for popular singers like Suboi, Ho Ngoc Ha, Pham Anh Khoa... and some event websites. I also worked as a webmaster and joining in the development for Online music website.",
    },
    {
      time: "2006",
      month: "present",
      company: "Freelancer",
      position: "Website Developer",
      body: "Design, develop corporate, ecommerce websites for many clients: Savico Invest, Nano Pharmacy Australia, Fujiwa, Nhat Huy Mobi, Orion New Tech...",
    },
  ];

  return (
    <div className="">
      <div className="relative text-left">
        {data.map((item, idx) => {
          return (
            <div key={idx} className="flex relative">
              <div className="hidden md:block min-w-20">
                <div className="font-bold italic">{item.time}</div>
                <div className="md:flex space-x-1 text-xs">{item.month}</div>
              </div>

              <div className="ml-10 pr-3">
                <div className="font-bold">{item.position}</div>
                <div className="italic md:mb-4 text-xs">{item.company}</div>
                <div className="mb-10 text-sm">{item.body}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

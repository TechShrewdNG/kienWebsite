import React from "react";

export default function About() {
  return (
    <div className="w-full content font-light text-gray-600">
      <div className="lg:leading-6 mb-6 flex flex-col items-center justify-center">
        <img
          alt="Kien Pham"
          src="https://mir-s3-cdn-cf.behance.net/user/230/f3ebda5989353.60dec130c8995.jpg"
          className="rounded-full w-24 h-24 mb-4 border-2 border-black hover:brightness-150 transition"
        />
        <span className="text-xl">Hi, I'm Kien</span>
      </div>
      <div className="mb-6 lg:leading-6">
        I love creating products from ideas, paper, and pencil and I’ve made
        some digital products. I'm also known as a programmer, digital marketer,
        UX/UI designer, I can do 2D animation as well.
      </div>
      <div className="lg:leading-6">
        I have a technical background and graduated from HCMC UIT. But I also
        have a passion for colors, images, drawing so my first career is about
        designing, photoshop. I've designed websites since the 2000s, and I
        always keep upgrading my skills. For now, I'd love to resolve people's
        issues through software, app.
      </div>
    </div>
  );
}

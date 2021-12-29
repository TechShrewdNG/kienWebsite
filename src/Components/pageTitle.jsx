import React from "react";

export default function PageTitle(props) {
  return (
    <div className="flex flex-col lg:flex-row justify-center lg:justify-between lg:items-end items-center mb-10 pb-4 border-b-2 border-black">
      <h1 className="text-2xl lg:text-3xl font-bold text-black pb-3 lg:p-0">
        {props.title}
      </h1>
      <a
        href="https://kien.app/KienPham_CV.pdf"
        className="relative inline-block group"
      >
        <span className="absolute inset-0 bg-blue-600 transition-transform transform translate-x-1 translate-y-1 group-hover:translate-y-0 group-hover:translate-x-0"></span>

        <span className="relative inline-block px-3 lg:px-5 py-3 font-medium text-sm text-blue-600 bg-white hover:bg-blue-600 hover:text-white transition border-2 border-current">
          Download CV
        </span>
      </a>
    </div>
  );
}

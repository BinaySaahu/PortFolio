"use client";

import React, { useEffect, useState } from "react";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import Link from "next/link";
import { BASE_URL } from "../../file";

function Nav(props) {
  const [scroll, setSroll] = useState(false);

  useEffect(() => {
    const handleChange = () => {
      if (window.scrollY >= 40) {
        setSroll(true);
      } else {
        setSroll(false);
      }
    };
    window.addEventListener("scroll", handleChange);
  });

  return (
    <div
      className={
        scroll
          ? "z-10 md:flex hidden justify-between fixed w-full top-0 left-0 bg-white text-[#555555] font-bold text-[16px] font-poppins items-center p-2 shadow-boxShadow"
          : "md:flex hidden justify-between fixed top-0 left-0 w-full text-[#555555] font-bold text-[16px] font-poppins items-center p-2 z-10"
      }
    >
      <div className="w-1/3 pl-5">
        <h2>
          <a
            href={`${BASE_URL}/#${props.id1}`}
            className="text-[20px] text-violet-600 cursor-pointer w-fit"
          >
            Binay
          </a>
        </h2>
      </div>
      <div className="flex w-1/3 justify-between">
        <a
          href={`${BASE_URL}/#${props.id1}`}
          className={`hover:text-violet-600 cursor-pointer transition-all duration-300`}
        >
          <p>Home</p>
        </a>
        <a
          href={`${BASE_URL}/#${props.id2}`}
          className={`hover:text-violet-600 cursor-pointer transition-all duration-300`}
        >
          <p>Skills</p>
        </a>
        <a
          href={`${BASE_URL}/#${props.id3}`}
          className={`hover:text-violet-600 cursor-pointer transition-all duration-300`}
        >
          <p>Projects</p>
        </a>
        <a
          href={`${BASE_URL}/#${props.id4}`}
          className={`hover:text-violet-600 cursor-pointer transition-all duration-300`}
        >
          <p>Contact</p>
        </a>
        <a
          href={`${BASE_URL}/#${props.id5}`}
          className={`hover:text-violet-600 cursor-pointer transition-all duration-300`}
        >
          <p>About</p>
        </a>
      </div>
      <div className="w-1/3 flex justify-end pr-5">
        <a href="/resume/Resume.pdf" download="Binay Kumar Sahu resume">
          <button className="h-full bg-violet-600 rounded-[7px] p-2 flex items-center justify-between hover:scale-110 transition-all duration-300 text-white">
            <p>Download Resume</p>
            <FileDownloadOutlinedIcon />
          </button>
        </a>
      </div>
    </div>
  );
}

export default Nav;

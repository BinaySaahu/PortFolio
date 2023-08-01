"use client";

import React, { useEffect, useState } from "react";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import Link from "next/link";

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
          ? "z-10 md:flex hidden justify-between fixed w-full bg-white text-[#555555] font-bold text-[16px] font-poppins items-center p-2 shadow-boxShadow"
          : "md:flex hidden justify-between fixed w-full text-[#555555] font-bold text-[16px] font-poppins items-center p-2 z-10"
      }
    >
      <div className="w-1/3 pl-5">
        <h2>
          <Link
            href={`https://binaykumarsahu.netlify.app/#${props.id1}`}
            className="text-[20px] text-violet-600 cursor-pointer w-fit"
          >
            Binay
          </Link>
        </h2>
      </div>
      <div className="flex w-1/3 justify-between">
        <Link
          href={`https://binaykumarsahu.netlify.app/#${props.id1}`}
          className={`hover:text-violet-600 cursor-pointer transition-all duration-300`}
        >
          <p>Home</p>
        </Link>
        <Link
          href={`https://binaykumarsahu.netlify.app/#${props.id2}`}
          className={`hover:text-violet-600 cursor-pointer transition-all duration-300`}
        >
          <p>Skills</p>
        </Link>
        <Link
          href={`https://binaykumarsahu.netlify.app/#${props.id3}`}
          className={`hover:text-violet-600 cursor-pointer transition-all duration-300`}
        >
          <p>Projects</p>
        </Link>
        <Link
          href={`https://binaykumarsahu.netlify.app/#${props.id4}`}
          className={`hover:text-violet-600 cursor-pointer transition-all duration-300`}
        >
          <p>Contact</p>
        </Link>
        <Link
          href={`https://binaykumarsahu.netlify.app/#${props.id5}`}
          className={`hover:text-violet-600 cursor-pointer transition-all duration-300`}
        >
          <p>About</p>
        </Link>
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

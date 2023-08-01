"use client";
import React, { useEffect, useState } from "react";

import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import Link from "next/link";
import { motion } from "framer-motion";

function MoboNav(props) {
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
    <>
      <div
        className={
          scroll
            ? "z-10 flex md:hidden justify-between fixed w-full bg-white text-[#555555] font-bold text-[16px] font-poppins items-center p-2 shadow-boxShadow bg-secondary"
            : "flex md:hidden justify-between fixed w-full text-[#555555] font-bold text-[16px] font-poppins items-center p-2 z-10 bg-secondary"
        }
      >
        <div
          className="flex flex-col justify-center items-center h-full cursor-pointer"
          onClick={() => props.setActive(!props.active)}
        >
          <div className={props.active ? "activemoboNav" : "inactivemoboNav"}></div>
        </div>

        {/* <div className="flex w-1/3 justify-between">
        
      </div> */}
        <div className="w-1/3 pl-5 text-center">
          <h2>
            <Link
              href={`https://binaykumarsahu.netlify.app/#${props.id1}`}
              className="text-[20px] text-violet-600 cursor-pointer w-fit"
            >
              Binay
            </Link>
          </h2>
        </div> 

        <div className="w-1/3 flex justify-end pr-5">
          <a href="/resume/Resume.pdf" download="Binay Kumar Sahu resume">
            <button className="h-full bg-violet-600 rounded-[7px] p-2 flex items-center justify-between hover:scale-110 transition-all duration-300 text-white">
              <p className="text-xs">Download Resume</p>
              <FileDownloadOutlinedIcon />
            </button>
          </a>
        </div>
      </div>
    </>
  );
}

export default MoboNav;

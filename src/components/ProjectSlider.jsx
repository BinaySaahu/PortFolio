import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";
import Image from "next/image";

function ProjectSlider({ project }) {
  return (
    <>
      <div className="flex flex-col bg-white rounded-[20px] overflow-hidden shadow-boxShadow">
        <div className="w-full h-3/5">
          <Image src={project.projectImg}></Image>
        </div>
        <div className="p-3 h-2/5">
          <div className="flex justify-start">
            <h2 className="text-2xl font-poppins font-extrabold">{project.title}</h2>
          </div>
          <div className="flex justify-around">
            <a href={project.githubUri}>
              <button className="rounded-[20px] w-[112px] py-2 border-2 border-solid border-black text-black flex justify-evenly items-center hover:bg-violet-600 hover:text-white hover:border-violet-600 mt-3 transition-all duration-300">
                <GitHubIcon />
                <p className="text-poppins">Github</p>
              </button>
            </a>
            <a href={project.projectLink}>
              <button className="rounded-[20px] w-[112px] py-2 border-2 border-solid border-black text-black  flex justify-evenly items-center hover:bg-violet-600 hover:text-white hover:border-violet-600 mt-3 transition-all duration-300">
                <LinkIcon />
                <p className="text-poppins">Link</p>
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectSlider;

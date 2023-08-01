"use client";

import Nav from "@/components/Nav";
import image from "../app/img/img1.png";
import Image from "next/image";
import SkillCards from "@/components/SkillCards";
import { info } from "./info";
import { projects } from "./projects";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import HomeIcon from "@mui/icons-material/Home";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ProjectSlider from "@/components/ProjectSlider";
import { Toaster, toast } from "react-hot-toast";
import MoboNav from "../components/MoboNav";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";

export default function Home() {
  const [load, setLoad] = useState(false);
  const [active, setActive] = useState(false);
  // const [isDesk,setIsDesk] = useState(true);

  const isDesk = useMediaQuery({ query: "(min-width: 768px)" });
  const handleMediaQueryChange = (matches) => {
    if (matches) {
      console.log("DESKTOP");
    } else {
      console.log("MOBILE");
    }
  };
  handleMediaQueryChange(isDesk);

  useEffect(() => {
    handleMediaQueryChange(isDesk);
  }, [isDesk]);

  const slideRef = useRef();

  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoad(true);
    console.log(form.current);

    const res = await emailjs.sendForm(
      "service_fqs86hf",
      "template_3ui3d6j",
      form.current,
      "TsRAWAqs5DFlTdb2q"
    );
    if (res.status === 200) {
      toast.success("Successfully Sent!", {
        iconTheme: {
          primary: "rgba(20, 0, 250, 0.6)",
          secondary: "#FFFAEE",
        },
      });
      setLoad(false);
    }
  };
  return (
    <>
      <div>
        <Toaster />
      </div>
      <Nav id1="1st" id2="2nd" id3="3rd" id4="4th" id5="5th" />
      {/* Mobile Nav */}
      <MoboNav
        id1="1st"
        id2="2nd"
        id3="3rd"
        id4="4th"
        id5="5th"
        active={active}
        setActive={setActive}
      />
      <div className={active ? "activeSideNav" : "sideNav"}>
        <ul className="h-3/4 w-full flex flex-col justify-around items-center">
          <li className="nav_li" onClick={() => setActive(!active)}>
            <Link
              href={`#1st`}
              className={`hover:text-violet-600 cursor-pointer transition-all duration-300`}
            >
              <p>Home</p>
            </Link>
          </li>
          <li onClick={() => setActive(!active)}>
            <Link
              href={`#2nd`}
              className={`hover:text-violet-600 cursor-pointer transition-all duration-300`}
            >
              <p>Skills</p>
            </Link>
          </li>
          <li onClick={() => setActive(!active)}>
            <Link
              href={`#3rd`}
              className={`hover:text-violet-600 cursor-pointer transition-all duration-300`}
            >
              <p>Projects</p>
            </Link>
          </li>
          <li onClick={() => setActive(!active)}>
            <Link
              href={`#4th`}
              className={`hover:text-violet-600 cursor-pointer transition-all duration-300`}
            >
              <p>Contact</p>
            </Link>
          </li>
          <li onClick={() => setActive(!active)}>
            <Link
              href={`#5th`}
              className={`hover:text-violet-600 cursor-pointer transition-all duration-300`}
            >
              <p>About</p>
            </Link>
          </li>
        </ul>
      </div>
      <div className="w-screen">
        {/* home */}
        <div
          className="flex justify-center md:justify-between h-screen items-center w-full bg-secondary p-20"
          id="1st"
        >
          <div className="md:w-1/2 text-[#555555] md:text-6xl text-5xl font-bold">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={{
                hidden: {
                  // scale: 0.8,
                  opacity: 0,
                },
                visible: {
                  // scale: 1,
                  opacity: 1,
                  transition: {
                    // delay:0.2,
                    ease: "linear",
                    duration: 1,
                  },
                },
              }}
            >
              <h2 className="w-full text-center md:text-left md:w-3/4">
                Hello I am Binay Kumar Sahu a{" "}
                <span className="text-violet-600">MERN</span> stack web
                developer
              </h2>
            </motion.div>

            <div className="w-full flex justify-center md:justify-start">
              <div className="md:w-fit w-full flex justify-center">
                <a
                  href="https://www.linkedin.com/in/binay-sahu-557439247/"
                  target="blank"
                >
                  <LinkedInIcon
                    className="contactIcons mx-5 hover:text-violet-600 cursor-pointer"
                    fontSize="large"
                  />
                </a>
                <a href="https://github.com/BinaySaahu" target="blank">
                  <GitHubIcon
                    className="contactIcons mx-5 hover:text-violet-600 cursor-pointer transition-all duration-300"
                    fontSize="large"
                  />
                </a>
                <a
                  href="https://www.instagram.com/i_ambinaysahu/"
                  target="blank"
                >
                  <InstagramIcon
                    className="contactIcons mx-5 hover:text-violet-600 cursor-pointer transition-all duration-300"
                    fontSize="large"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 hidden justify-center md:flex">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={{
                hidden: {
                  // scale: 0.8,
                  opacity: 0,
                },
                visible: {
                  // scale: 1,
                  opacity: 1,
                  transition: {
                    // delay:0.2,
                    ease: "linear",
                    duration: 1,
                  },
                },
              }}
            >
              <Image
                src={image}
                alt=""
                className="h-[400px] w-[400px] mix-blend-multiply"
              ></Image>
            </motion.div>
          </div>
        </div>
        {/* skill */}
        <div
          className="flex bg-white w-full items-center flex-col h-auto justify-center"
          id="2nd"
        >
          <div className="p-7 font-poppins font-extrabold md:text-[46px] text-xl text-violet-600">
            <h2>SKILLS</h2>
          </div>

          <motion.div
            className="min-w-11/12 flex justify-center"
            initial="hidden"
            whileInView="visible"
            variants={
              isDesk
                ? {
                    hidden: {
                      // scale: 0.8,
                      opacity: 0,
                      x: -150,
                    },
                    visible: {
                      // scale: 1,
                      opacity: 1,
                      x: 0,
                      transition: {
                        // delay:0.2,
                        ease: "linear",
                        duration: 0.8,
                      },
                    },
                  }
                : {
                    hidden: {
                      // scale: 0.8,
                      opacity: 0,
                      y: 150,
                    },
                    visible: {
                      // scale: 1,
                      opacity: 1,
                      y: 0,
                      transition: {
                        // delay:0.2,
                        ease: "linear",
                        duration: 0.8,
                      },
                    },
                  }
            }
          >
            <div className="flex flex-col md:flex-row justify-center md:items-stretch items-center w-full px-20">
              {info.map((inf, idx) => (
                <SkillCards key={idx} info={inf} />
              ))}
            </div>
          </motion.div>
        </div>
        {/* project */}
        <div
          className="bg-secondary flex flex-col items-center justify-center h-screen w-full"
          id="3rd"
        >
          <div className="p-7 font-poppins font-extrabold md:text-[46px] text-xl text-violet-600">
            <h2>PROJECTS</h2>
          </div>
          <div className="flex items-center justify-between w-11/12">
            {/* <div
              className="rounded-full md:p-5 p-2 bg-[#D9D9D9] cursor-pointer mr-5 h-fit w-fit"
              onClick={handlePrev}
            >
              <ArrowBackIcon/>
            </div> */}

            <Swiper
              spaceBetween={50}
              slidesPerView={isDesk?3:1}
              navigation={false}
              ref={slideRef}
            >
              {projects.map((project, idx) => (
                <SwiperSlide>
                  <ProjectSlider project={project} />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* <div
              className="rounded-full p-5 bg-[#D9D9D9] cursor-pointer ml-5"
              onClick={handleNext}
            >
              <ArrowForwardIcon />
            </div> */}
          </div>
        </div>
        {/* contact */}
        <div
          className="flex w-screen bg-violet-600 justify-center items-center md:px-28 py-10 h-[100vh] flex-col md:flex-row"
          id="4th"
        >
          <div className="w-full md:w-1/2 flex">
            <motion.div
              className="w-full"
              initial="hidden"
              whileInView="visible"
              variants={{
                hidden: {
                  // scale: 0.8,
                  opacity: 0,
                },
                visible: {
                  // scale: 1,
                  opacity: 1,
                  transition: {
                    // delay:0.2,
                    ease: "linear",
                    duration: 1,
                  },
                },
              }}
            >
              <h1 className="font-extrabold font-poppins md:text-[50px] text-white md:w-2/3 w-full md:text-left text-center text-2xl md:px-0 px-4 md:mb-0 mb-4">
                LET'S CHAT , LET ME KNOW YOUR QUERIES
              </h1>
            </motion.div>
          </div>
          <div className=" w-full md:w-1/2 flex justify-center items-center px-4 md:px-0">
            <motion.div
              className="w-full flex justify-center items-center"
              initial="hidden"
              whileInView="visible"
              variants={{
                hidden: {
                  scale: 0.8,
                  opacity: 0,
                },
                visible: {
                  scale: 1,
                  opacity: 1,
                  transition: {
                    // delay:0.2,
                    ease: "linear",
                    duration: 1,
                  },
                },
              }}
            >
              <div className="bg-contact_bg rounded-[33px] flex justify-center items-center h-fit w-full md:w-2/3 py-5">
                <form
                  className="flex flex-col w-11/12 p-7"
                  ref={form}
                  onSubmit={sendEmail}
                >
                  <input
                    type="text"
                    className="mt-5 bg-white p-3 rounded-[7px]"
                    placeholder="Full name"
                    name="user_name"
                  />
                  <input
                    type="email"
                    className="mt-5 bg-white p-3 rounded-[7px]"
                    placeholder="Email"
                    name="user_email"
                  />
                  <input
                    type="text"
                    className="mt-5 bg-white p-3 rounded-[7px]"
                    placeholder="Subject"
                    name="user_subject"
                  />
                  <textarea
                    name="message"
                    id=""
                    cols="30"
                    rows="7"
                    className="mt-5 bg-white p-2 rounded-[7px]"
                    placeholder="Enter your query"
                  ></textarea>
                  {!load ? (
                    <button className="mt-5 bg-violet-600 text-white font-poppins p-2 rounded-[7px]">
                      Submit
                    </button>
                  ) : (
                    <button
                      type="button"
                      class="flex items-center justify-center font-semibold font-poppins leading-6 text-sm shadow rounded-md text-white bg-violet-600 hover:bg-violet-500 transition ease-in-out duration-150 cursor-not-allowed mt-5 p-2 rounded-[7px]"
                      disabled
                    >
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          stroke-width="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                    </button>
                  )}
                </form>
              </div>
            </motion.div>
          </div>
        </div>
        {/* footer */}
        <div
          className="flex justify-center items-center md:p-20 bg-secondary w-full md:flex-row flex-col-reverse h-auto p-4"
          id="5th"
        >
          <div className="w-full md:w-1/3 flex md:flex-col flex-row md:justify-center justify-around items-start md:pl-10">
            <p className="font-semibold font-poppins text-xs md:text-[13px] my-[7px] flex items-center gap-[2px]">
              {" "}
              <HomeIcon />
              {isDesk && "Bhubaneswar, Odisha,India"}
            </p>
            <p className="font-semibold font-poppins text-xs md:text-[13px] my-[7px] flex items-center gap-[2px]">
              <PhoneIcon />
              {isDesk && "8018290546"}
            </p>
            <p className="font-semibold font-poppins text-xs md:text-[13px] my-[7px] flex items-center gap-[2px]">
              <MailIcon />
              {isDesk && "binaysahu364@gmail.com"}
            </p>
          </div>
          <div className="md:w-2/3 w-full px-3">
            <div>
              <p className="font-semibold font-poppins text-[18px] mb-[7px] text-center md:text-left">
                About me
              </p>
            </div>
            <div>
              <p className="font-semibold font-poppins text-[15px] my-[7px] text-center md:text-left">
                I am a Full stack web developer. Currently I am pursuing my
                BTECH in computer science from Kalinga institute of industrial
                technology (KIIT). I am skilled in React Js and Node Js . I
                excel in building projects like ecommerce website, portfolio
                website, messengers etc.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

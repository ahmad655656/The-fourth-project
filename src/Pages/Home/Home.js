import React from "react";
import { FiUserX } from "react-icons/fi";
import { Link } from "react-router-dom";
import CardService from "../../Components/CardService/CardService";
import { CgScreen, CgWebsite } from "react-icons/cg";
import {
  MdDraw,
  MdStyle,
} from "react-icons/md";
import photo1 from "../../assest/MyPhoto/1-removebg-preview.png";
import Slider, { SliderMark } from "@mui/material/Slider";
import { Box, Container, Grid, Grid2, Button, Typography } from "@mui/material";
import { BiMusic } from "react-icons/bi";
import { FcSportsMode } from "react-icons/fc";
export default function Home() {
  return (
    <div className=" w-full min-h-[350vh] flex flex-col items-center sm:max-md:gap-[20px] gap-[90px] ">
      <div className="flex flex-row sm:max-md:flex-col sm:max-md:gap-[40px] sm:max-md:items-center  items-center relative w-full sm:max-md:h-[150vh] min-h-[72vh]">
        <Box className="w-[40%] pl-[50px] sm:max-md:pl-0 flex flex-col items-start lg:max-xlg:items-start sm:max-md:items-center sm:max-md:w-full text-center gap-[10px] ">
          <h5 className="text-[30px] sm:max-md:text-[15px] lg:max-xlg:text-[20px] sm:max-md:pt-[20px] font-semibold">
            For Create Website Or Editing
          </h5>
          <h2 className="text-[64px] h-[133px] sm:max-md:w-[80%] text-left sm:max-md:text-center leading-[60px] w-[577px] lg:max-xlg:text-[64px] sm:max-md:text-[30px] text-left font-extrabold text-mainTextColor">
          Front-End Devloper React Js
          </h2>
          <p className="text-[16px] sm:max-md:w-[80%] text-left sm:max-md:text-center">Transforming data into digital experiences, designing professional websites with all their details.</p>
          <a
          href ="https://ahmad655656.github.io/The-fourth-project/cv.pdf"
          download
            className="transition-all duration-500 ease-linear p-[10px] rounded-[5px] text-afterVideo bg-bgButton hover:bg-hoverButton"
          >
            Download Cv
          </a>
        </Box>
        <div className="lg:skew-custom skew-custom">
          <img
            src={photo1}
            alt=""
            className="w-[40%] rounded-[40px] sm:max-md:border-b-[2px] sm:max-md:border-solid sm:max-md:ml-[35px] sm:max-md:w-[90%]  sm:max-md:mt-[50px] sm:max-md:z-[-1] mt-[50px] sm:max-md:h-[83%] ml-[400px] z-[3] m-auto h-[650px] "
          />
        </div>
      </div>
      <div className="flex flex-row sm:max-md:flex sm:max-md:flex-wrap lg:max-xlg:flex-wrap lg:max-xlg:gap-[40px]  sm:max-md:gap-[40px] sm:max-md:p-[30px] sm:max-md:items-center sm:max-md:w-full sm:min-h-[200vh] md:min-h-[102vh] lg:h-[175vh] bg-smallSection w-full items-center">
        <div className="pl-[60px] sm:max-md:pl-[20px] sm:max-md:w-[90%] sm:max-md:gap-[20px] lg:max-xlg:items-center lg:max-xlg:w-full w-[30%] gap-[40px] flex-col items-center">
          <h6 className="text-[30px] sm:max-md:text-[20px] sm:max-md:text-center sm:max-md:w-full  lg:max-xlg:text-[25px] text-mainTextColor ">
            Our Services
          </h6>
          <h2 className="text-[40px] sm:max-md:text-[20px] text-mainTextColor sm:max-md:text-center sm:max-md:w-full  lg:max-xlg:text-[35px] font-black ">
            What We do?
          </h2>
          <hr className="w-[100px] h-[3px] sm:max-md:text-center sm:max-md:w-full bg-secondTextColor text-mainTextColor " />
          <Box className="opacity-35 text-[20px] sm:max-md:text-center sm:max-md:w-full text-secondTextColor lg:max-xlg:text-[15px] w-[50%] sm:max-md:text-[15px] sm:max-md:text-[20px] font-medium ">
            If you want to design and develop websites, here is your best choice
            I have one year of experience in designing and developing websites
            using React js/Next js Tailwind css
          </Box>
          <Link to="/about">
            <button className="sm:max-md:text-center sm:max-md:w-full transition-all duration-300 ease-out after:transition-all after:duration-300 after:ease-out relative text-[20px] sm:max-md:text-[20px] p-[5px] mt-[50px] hover:text-hoverText hover:after:w-full after:w-[30%] after:left-0 after:top-0 after:absolute after:mix-blend-color-dodge after:h-full after:bg-mainTextColor border-t-[2px] border-l-[2px] border-solid border-mainTextColor ">
              View All Services
            </button>
          </Link>
        </div>
        <Grid2
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          className={
            "sm:max-md:w-full pl-[40px] pr-[70px] sm:max-md:px-0 sm:max-md:p-[10px] sm:max-md:pr-0 lg:max-xlg:w-full lg:max-xlg:mr-0 w-[70%] sm:max-md:h-[88%]  h-[50%] flex flex-col items-center gap-[50px]"
          }
        >
          <Grid2
            className={
              "flex-row items-center sm:max-md:items-center sm:max-md:w-full sm:max-md:flex-wrap lg:max-xlg:w-full lg:max-xlg:pl-[20px]  flex gap-[30px] w-[90%] "
            }
          >
            <CardService
              title={"Modify the code"}
              content={
                "Dear and dear, I can provide a site modification code written in Rayict, where I am looking for errors and repair them and shorten the code as much as possible by creating the largest amount of ingredients as it organizes the site"
              }
            >
              <FiUserX className="w-[40px] h-[40px] border-[4px] border-solid border-mainTextColor p-[5px] hover:rotate-180 transition-all duration-500 ease-in-out " />
            </CardService>
            <CardService
              title={"Full site design"}
              content={
                "I can create a fully front front site from scratch using the most important front interface design languages ​​such asWith a clean and organized code and responded to all s"
              }
            >
              <CgWebsite className="w-[40px] h-[40px] border-[4px] border-solid border-mainTextColor p-[5px] hover:rotate-180 transition-all duration-500 ease-in-out " />
            </CardService>
          </Grid2>
          <Grid2 className="flex-row items-center sm:max-md:flex-wrap sm:max-md:w-full sm:max-md:items-center lg:max-xlg:w-full lg:max-xlg:pl-[20px] flex gap-[10px] w-[90%] ">
            <CardService
              title={"Modify the site style"}
              content={
                "If your site is formatted using CSS and you want to replace the formatting with tailwind CSS, here is your best and most suitable option. I will modify the site’s style and completely replace it with a beautiful and organized tailwind style."
              }
            >
              <MdStyle className="w-[40px] h-[40px] border-[4px] border-solid border-mainTextColor p-[5px] hover:rotate-180 transition-all duration-500 ease-in-out " />
            </CardService>
            <CardService
              title={"Coordinated design and works on all measurements"}
              content={
                "I can create a coordinated and responsive design with beautiful screen sizes, tablet, laptop, tab, or mobile, and upload the website to GitHub hosting."
              }
            >
              <CgScreen className="w-[40px] h-[40px] border-[4px] border-solid border-mainTextColor p-[5px] hover:rotate-180 transition-all duration-500 ease-in-out " />
            </CardService>
          </Grid2>
        </Grid2>
      </div>
      <div className="w-full min-h-[100vh] bg-smallSection pb-[50px]">
        <h2 className="ml-[40px] sm:max-md:ml-[10px] text-center text-[40px] sm:max-md:text-[30px] lg:max-xlg:text-[35px] font-black text-mainTextColor ">
          My works gallery
        </h2>
        <Box
          className={
            "relative flex flex-row sm:max-lg:flex-wrap flex-wrap sm:max-lg:gap-[100px] sm:max-lg:pr-[5px] pt-[30px] transition-all duration-1000 ease-in-out justify-center gap-[40px] items-center w-full min-h-full"
          }
        >
          <Box className="flex flex-row flex-wrap gap-[60px] px-[70px] sm:max-md:px-[20px] items-center sm:max-lg:w-full w-full min-h-[100vh] ">
              <iframe
                className="rounded-[40px] min-h-[40vh] w-[250px] sm:max-md:w-[350px] sm:max-md:m-auto transition-all duration-1000 ease-in-out hover:border-b-[2px] border-solid border-b-mainTextColor"
                src="https://www.youtube.com/embed/hw49S2kxssI?si=qGqAxTNs5Pz1JJgw"
                allow="accelerometer; autoplay; gyroscope; web-share; clipboard-write; picture-in-picture; encrypted-media"
                allowFullScreen
              ></iframe>
            <iframe
              className="rounded-[40px]  min-h-[40vh] w-[250px] transition-all sm:max-md:w-[350px] sm:max-md:m-auto duration-1000 ease-in-out hover:border-b-[2px] border-solid border-b-mainTextColor"
              src={"https://youtube.com/embed/kZ5NBmCZAss?si=mGUAZQhKOy7OcUtZ"}
              allow="accelerometer; autoplay; gyroscope; web-share; clipboard-write; picture-in-picture; encrypted-media "
              allowFullScreen
            />
            <iframe
              className="rounded-[40px] min-h-[40vh] w-[250px] transition-all sm:max-md:w-[350px] sm:max-md:m-auto  duration-1000 ease-in-out hover:border-b-[2px]  border-solid border-b-mainTextColor"
              src={
                "https://www.youtube.com/embed/UJa8p95Wym0?si=NRuE5wAUqSGyo5th"
              }
              allow="accelerometer; autoplay; gyroscope; web-share; clipboard-write; picture-in-picture; encrypted-media "
              allowFullScreen
            />
            <iframe
              className="rounded-[40px] min-h-[40vh] w-[250px] transition-all sm:max-md:w-[350px] sm:max-md:m-auto  duration-1000 ease-in-out hover:border-b-[5px] border-solid border-b-mainTextColor"
              src={
                "https://www.youtube.com/embed/434qs4gfW1Q?si=CXyyuS2-CZyFCare"
              }
              allow="accelerometer; autoplay; gyroscope; web-share; clipboard-write; picture-in-picture; encrypted-media "
              allowFullScreen
            />
            <iframe
              className="rounded-[40px] min-h-[40vh] w-[250px] transition-all sm:max-md:w-[350px] sm:max-md:m-auto  duration-1000 ease-in-out hover:border-b-[3px] border-solid border-b-mainTextColor"
              src={
                "https://www.youtube.com/embed/qXatEmUiH-M?si=xutYH5nESgUENvTK"
              }
              allow="accelerometer; autoplay; gyroscope; web-share; clipboard-write; picture-in-picture; encrypted-media "
              allowFullScreen
            />
            <iframe
              className="rounded-[40px] min-h-[40vh] w-[250px] transition-all sm:max-md:w-[350px] sm:max-md:m-auto  duration-1000 ease-in-out hover:border-b-[3px] border-solid border-b-mainTextColor"
              src={
                "https://www.youtube.com/embed/zZ5te7UcGDw?si=CZDIsVnZJN_81ahI"
              }
              allow="accelerometer; autoplay; gyroscope; web-share; clipboard-write; picture-in-picture; encrypted-media "
              allowFullScreen
            />
          </Box>
        </Box>
      </div>
      <div className="w-full min-h-[50vh] ">
        <h2 className="ml-[40px] sm:max-md:ml-[20px] text-center text-[40px] lg:max-xlg:text-[35px] sm:max-md:text-[30px] font-black text-mainTextColor">
          Skills
        </h2>
        <div className="flex flex-row items-center w-full bg-theardTextColor sm:max-md:items-center ">
          <Box className="flex  justify-between flex-row sm:max-md:flex sm:max-md:w-[90%] sm:max-md:flex-wrap sm:max-md:items-center sm:max-md:pl-[10px]  items-center w-full h-full sm:max-md:mt-[10px] mt-[100px] px-[70px] ">
            <div
            className='w-[26%] sm:max-md:w-full flex flex-col items-center '
            >
              <div className="w-[100%] ">
                <div className="w-[100%] gap-[20px] flex flex-row items-center">
                <img src="https://www.svgrepo.com/show/303205/html-5-logo.svg" className="w-[60px] h-[60px] " alt="" />
                  <div className="w-[70%]">
                  <label
                    className="text-[20px] sm:max-md:text-[20px] font-black text-mainTextColor"
                    htmlFor="h"
                  >
                    Html5
                  </label>
                  <Slider
                    value={"99"}
                    key={"h"}
                    step={1}
                    className={"w-[50px]"}
                    marks
                    color="primary"
                    min={0}
                    max={100}
                  />
                  </div>
                </div>
              </div>
              <div className="w-[100%] ">
                <div className="w-[100%] gap-[20px] flex flex-row items-center ">
                  <img src="https://www.svgrepo.com/show/303206/javascript-logo.svg" className="w-[50px] h-[50px] " alt="" />
                  <div className="w-[100%]">
                  <label
                    className="text-[20px]  sm:max-md:text-[20px] font-black text-mainTextColor"
                    htmlFor="j"
                  >
                    Js
                  </label>
                  <Slider
                    value={"80"}
                    key={"j"}
                    step={1}
                    className={"w-[100%]"}
                    marks
                    color="primary"
                    min={0}
                    max={100}
                  />
                  </div>
                </div>
              </div>
              <div className="w-[100%] ">
                <div className="w-[100%] gap-[20px]  flex flex-row items-center">         
                    <img src="https://www.svgrepo.com/show/353623/css-3.svg" className="w-[60px] h-[60px] " alt="" />
                 <div className="w-[70%]">
                 <label
                    className="text-[20px]  sm:max-md:text-[20px] font-black text-mainTextColor"
                    htmlFor="c"
                  >
                    Css3
                  </label>
                  <Slider
                    value={"90"}
                    key={"c"}
                    step={1}
                    className={"w-[100%]"}
                    marks
                    color="primary"
                    min={0}
                    max={100}
                  />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="w-[26%] sm:max-md:w-full  flex flex-col items-center "
            >
              <div className="w-[100%] " >
                <div className="w-[100%] gap-[20px]  flex flex-row items-center ">
                  <img src="https://www.svgrepo.com/show/354431/tailwindcss-icon.svg" className="w-[60px] h-[60px] " alt="" />
                  <div className="w-[70%]">
                  <label
                    className="text-[20px] sm:max-md:text-[20px] font-black text-mainTextColor"
                    htmlFor="t"
                  >
                    Tailwind css
                  </label>
                  <Slider
                    value={"50"}
                    key={"t"}
                    step={1}
                    className={"w-[50px]"}
                    marks
                    color="primary"
                    min={0}
                    max={100}
                  />
                  </div>
                </div>
              </div>
              <div className="w-[100%] ">
                <div className="w-[100%] gap-[20px]  flex flex-row items-center">
                  <img src="https://www.svgrepo.com/show/493719/react-javascript-js-framework-facebook.svg" className="w-[60px] h-[60px] " alt="" />
                  <div className="w-[70%]">
                  <label
                    className="text-[20px]  sm:max-md:text-[20px] font-black text-mainTextColor"
                    htmlFor="r"
                  >
                    React js
                  </label>
                  <Slider
                    value={"80"}
                    key={"r"}
                    step={1}
                    className={"w-[50px]"}
                    marks
                    color="primary"
                    min={0}
                    max={100}
                  />
                  </div>
                </div>
              </div>
              <div className="w-[100%] ">
                <div className="w-[100%] gap-[20px] flex flex-row items-center ">
                  <img src="https://cdn.worldvectorlogo.com/logos/next-js.svg" className="rounded-[50%] bg-mainTextColor w-[60px] h-[60px] " alt="" />
                  <div className="w-[70%]">
                  <label
                    className="text-[20px]  sm:max-md:text-[20px] font-black text-mainTextColor"
                    htmlFor="n"
                  >
                    Next js
                  </label>
                  <Slider
                    value={"70"}
                    key={"r"}
                    step={1}
                    className={"w-[50px]"}
                    marks
                    color="primary"
                    min={0}
                    max={100}
                  />
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </div>
      </div>
      <div className="w-full min-h-[30vh] flex flex-col  ">
        <h2 className="ml-[40px] text-[30px] lg:max-xlg:text-[35px] text-center sm:max-md:text-[25px] font-black text-mainTextColor ">
          Hobbies
        </h2>
        <Box className="flex px-[70px] justify-between bg-theardTextColor sm:max-md:flex-wrap sm:max-md:items-center sm:max-md:p-[30px] flex-row items-center h-full sm:max-md:mt-[10px] mt-[50px] p-[10px]  ">
          <div className="flex flex-col items-center">
            <MdDraw className="text-[30px] sm:max-md:text-[25px] text-mainTextColor " />
            <h3 className="text-[25px] sm:max-md:text-[15px] font-black text-secondTextColor ">
              The drawing
            </h3>
          </div>
          <div className="flex flex-col items-center">
            <BiMusic className="text-[30px] sm:max-md:text-[30px] text-mainTextColor " />
            <h3 className="text-[25px] sm:max-md:text-[15px] font-black text-secondTextColor ">
              Listening to music
            </h3>
          </div>
          <div className="flex flex-col items-center">
            <FcSportsMode className="text-[30px] sm:max-md:text-[30px] text-mainTextColor " />
            <h3 className="text-[25px] sm:max-md:text-[15px] font-black text-secondTextColor ">
              Sports
            </h3>
          </div>
        </Box>
      </div>
    </div>
  );
}

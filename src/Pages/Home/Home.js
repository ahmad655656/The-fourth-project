import React from "react";
import { FiUserX } from "react-icons/fi";
import { Link } from "react-router-dom";
import CardService from "../../Components/CardService/CardService";
import { CgScreen, CgWebsite } from "react-icons/cg";
import { MdDraw, MdSports, MdSportsFootball, MdSportsRugby, MdStyle } from "react-icons/md";
import photo1 from "../../assest/MyPhoto/1-removebg-preview.png";
import Slider, { SliderMark } from "@mui/material/Slider";
import { Box, Grid } from "@mui/material";
import { BiMusic } from "react-icons/bi";
import { FcSportsMode } from "react-icons/fc";
export default function Home() {
  return (
    <div className="w-[100vw] h-[400vh] flex flex-col items-center gap-[40px] ">
      <div className="flex flex-row items-center relative w-full h-[72vh]">
        <div className="w-[40%] pl-[50px] flex flex-col items-start text-center gap-[10px] ">
          <h6 className="text-[35px] font-semibold">
            For Create Website Or Editing
          </h6>
          <h2 className="text-[50px] font-extrabold text-mainTextColor">
            Front-End Devloper
          </h2>
          <h4 className="text-[40px]">React Js</h4>
        </div>
        <div className="w-[50%] after:transition-all after:duration-1000  after:absolute after:bg-mainTextColor after:w-[50%] after:h-[50%] after:left-[705px] after:mix-blend-soft-light after:z-[1] after:top-0 before:absolute before:bg-mainTextColor before:w-[20.1%] before:h-full before:left-[1320px] before:mix-blend-multiply before:z-[1] before:top-0 h-full">
          <img
            src={photo1}
            alt=""
            className="w-[40%] animate-animatioPhoto ml-[500px] z-[3] m-auto h-full border-[0.5px] border-dotted border-shadowColor "
          />
        </div>
      </div>
      <div className="flex flex-row h-[100vh] bg-smallSection w-full items-center">
        <div className="pl-[50px] pt-[100px] w-[30%] h-[80%] gap-[30px] flex-col items-center">
          <h6 className="text-[30px] text-mainTextColor ">Our Services</h6>
          <h2 className="text-[50px] font-black ">What We do?</h2>
          <hr className="w-[100px] h-[5px] bg-mainTextColor text-mainTextColor " />
          <p className="opacity-35 text-[30px] font-medium ">
            If you want to design and develop websites, here is your best choice
            I have one year of experience in designing and developing websites
            using React js/Next js Tailwind css
          </p>
          <Link to="/services">
            <button className="transition-all duration-300 ease-out after:transition-all after:duration-300 after:ease-out relative text-[30px] p-[5px] mt-[50px] hover:after:w-full after:w-[30%] after:left-0 after:top-0 after:absolute after:mix-blend-screen after:h-full after:bg-mainTextColor border-t-[2px] border-l-[2px] border-solid border-mainTextColor ">
              View All Services
            </button>
          </Link>
        </div>
        <div className="w-[70%] h-[70%] flex flex-col items-center gap-[50px] mr-[20px]">
          <div className="flex-row items-center flex gap-[30px] w-[90%] ">
            <CardService
              title={"Modify the code"}
              content={
                "Dear and dear, I can provide a site modification code written in Rayict, where I am looking for errors and repair them and shorten the code as much as possible by creating the largest amount of ingredients as it organizes the site"
              }
            >
              <FiUserX className="w-[60px] h-[60px] border-[4px] border-solid border-mainTextColor p-[5px] hover:rotate-180 transition-all duration-500 ease-in-out " />
            </CardService>
            <CardService
              title={"Full site design"}
              content={
                "I can create a fully front front site from scratch using the most important front interface design languages ​​such asWith a clean and organized code and responded to all s"
              }
            >
              <CgWebsite className="w-[60px] h-[60px] border-[4px] border-solid border-mainTextColor p-[5px] hover:rotate-180 transition-all duration-500 ease-in-out " />
            </CardService>
          </div>
          <div className="flex-row items-center flex gap-[10px] w-[90%] ">
            <CardService
              title={"Modify the site style"}
              content={
                "If your site is formatted using CSS and you want to replace the formatting with tailwind CSS, here is your best and most suitable option. I will modify the site’s style and completely replace it with a beautiful and organized tailwind style."
              }
            >
              <MdStyle className="w-[60px] h-[60px] border-[4px] border-solid border-mainTextColor p-[5px] hover:rotate-180 transition-all duration-500 ease-in-out " />
            </CardService>
            <CardService
              title={"Coordinated design and works on all measurements"}
              content={
                "I can create a coordinated and responsive design with beautiful screen sizes, tablet, laptop, tab, or mobile, and upload the website to GitHub hosting."
              }
            >
              <CgScreen className="w-[60px] h-[60px] border-[4px] border-solid border-mainTextColor p-[5px] hover:rotate-180 transition-all duration-500 ease-in-out " />
            </CardService>
          </div>
        </div>
      </div>
      <div className="w-full h-[110vh] bg-smallSection pb-[50px]">
        <h2 className="ml-[40px] text-[40px]  font-black text-mainTextColor ">
          My works gallery
        </h2>
        <div className="relative flex flex-row pl-[50px] pt-[30px] transition-all duration-1000 ease-in-out justify-center gap-[40px] items-center w-full h-full">
          <div className="hover:after:h-0 transition-all after:ease-in-out after:duration-700 after:absolute after:w-[29.5%] after:h-[90%] after:bg-afterVideo after:opacity-65 flex flex-col w-[30%] h-full">
            <iframe
              className="rounded-[40px]  h-[50%] w-full transition-all duration-1000 ease-in-out hover:border-b-[5px] pb-[30px] border-solid border-b-mainTextColor"
              src="https://www.youtube.com/embed/hw49S2kxssI?si=qGqAxTNs5Pz1JJgw"
              allow="accelerometer; autoplay; gyroscope; web-share; clipboard-write; picture-in-picture; encrypted-media"
              allowFullScreen
            ></iframe>
            <iframe
              className="rounded-[40px]  h-[50%] w-full transition-all duration-1000 ease-in-out hover:border-b-[5px] pb-[30px] border-solid border-b-mainTextColor"
              src={"https://youtube.com/embed/kZ5NBmCZAss?si=mGUAZQhKOy7OcUtZ"}
              allow="accelerometer; autoplay; gyroscope; web-share; clipboard-write; picture-in-picture; encrypted-media "
              allowFullScreen
            />
          </div>
          <div className="hover:after:h-0 transition-all after:ease-in-out after:duration-700 after:absolute after:w-[29.5%] after:h-[90%] after:bg-afterVideo after:opacity-65 flex flex-col w-[30%] h-full">
            <iframe
              className="rounded-[40px]  h-[50%] w-full transition-all duration-1000 ease-in-out hover:border-b-[5px] pb-[30px] border-solid border-b-mainTextColor"
              src={
                "https://www.youtube.com/embed/UJa8p95Wym0?si=NRuE5wAUqSGyo5th"
              }
              allow="accelerometer; autoplay; gyroscope; web-share; clipboard-write; picture-in-picture; encrypted-media "
              allowFullScreen
            />
            <iframe
              className="rounded-[40px]  h-[50%] w-full transition-all duration-1000 ease-in-out hover:border-b-[5px] pb-[30px] border-solid border-b-mainTextColor"
              src={
                "https://www.youtube.com/embed/434qs4gfW1Q?si=CXyyuS2-CZyFCare"
              }
              allow="accelerometer; autoplay; gyroscope; web-share; clipboard-write; picture-in-picture; encrypted-media "
              allowFullScreen
            />
          </div>
          <div className="hover:after:h-0 transition-all after:ease-in-out after:duration-700 after:absolute after:w-[29.5%] after:h-[30%] after:translate-y-[-300px] after:bg-afterVideo after:opacity-65 w-[30%] h-[30%] ">
            <iframe
              className="rounded-[40px] h-full w-full transition-all duration-1000 ease-in-out hover:border-b-[5px] pb-[30px] border-solid border-b-mainTextColor"
              src={
                "https://www.youtube.com/embed/qXatEmUiH-M?si=xutYH5nESgUENvTK"
              }
              allow="accelerometer; autoplay; gyroscope; web-share; clipboard-write; picture-in-picture; encrypted-media "
              allowFullScreen
            />
          </div>
        </div>
      </div>
      <div className="w-full h-[50vh] ">
        <h2 className="ml-[40px] text-[40px] font-black text-mainTextColor ">
          Skills
        </h2>
        <div className="flex flex-row items-center">
          <Box className="flex gap-[50px] bg-theardTextColor flex-row items-center w-full h-full mt-[100px] pl-[100px]  ">
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={6}>
                <div className="w-[50%] ">
                  <label
                    className="text-[30px] font-black text-mainTextColor"
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
              </Grid>
              <Grid item xs={6}>
                <div className="w-[50%] ">
                  <label
                    className="text-[30px] font-black text-mainTextColor"
                    htmlFor="j"
                  >
                    Js
                  </label>
                  <Slider
                    value={"80"}
                    key={"j"}
                    step={1}
                    className={"w-[50px]"}
                    marks
                    color="primary"
                    min={0}
                    max={100}
                  />
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className="w-[50%] ">
                  <label
                    className="text-[30px] font-black text-mainTextColor"
                    htmlFor="c"
                  >
                    Css3
                  </label>
                  <Slider
                    value={"90"}
                    key={"c"}
                    step={1}
                    className={"w-[50px]"}
                    marks
                    color="primary"
                    min={0}
                    max={100}
                  />
                </div>
              </Grid>
            </Grid>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={6}>
                <div className="w-[50%] ">
                  <label
                    className="text-[30px] font-black text-mainTextColor"
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
              </Grid>
              <Grid item xs={6}>
                <div className="w-[50%] ">
                  <label
                    className="text-[30px] font-black text-mainTextColor"
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
              </Grid>
              <Grid item xs={6}>
                <div className="w-[50%] ">
                  <label
                    className="text-[30px] font-black text-mainTextColor"
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
              </Grid>
            </Grid>
          </Box>
        </div>
      </div>
      <div className="w-full h-[40vh] flex flex-col  ">
        <h2 className="ml-[40px] text-[40px] font-black text-mainTextColor ">
          Hobbies
        </h2>
        <div className="flex flex-row items-center ">
          <Box className="flex justify-between bg-theardTextColor flex-row items-center w-full h-full mt-[100px] p-[70px]  ">
            <div className="flex flex-col items-center">
              <MdDraw className="text-[40px] text-mainTextColor " />
            <h3 className="text-[30px] font-black text-secondTextColor ">
              The drawing
            </h3>
            </div>
            <div className="flex flex-col items-center">
              <BiMusic className="text-[40px] text-mainTextColor "/>
            <h3 className="text-[30px] font-black text-secondTextColor ">
              Listening to music
            </h3>
            </div>
           <div className="flex flex-col items-center">
            <FcSportsMode className="text-[40px] text-mainTextColor "/>
           <h3 className="text-[30px] font-black text-secondTextColor ">
              Sports
            </h3>
           </div>
          </Box>
        </div>
      </div>
    </div>
  );
}

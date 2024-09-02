import React from "react";
import { FiUserX } from "react-icons/fi";
import { Link } from "react-router-dom";
import CardService from "../../Components/CardService/CardService";
import { CgScreen, CgWebsite } from "react-icons/cg";
import { MdDraw, MdSports, MdSportsFootball, MdSportsRugby, MdStyle } from "react-icons/md";
import photo1 from "../../assest/MyPhoto/1-removebg-preview.png";
import Slider, { SliderMark } from "@mui/material/Slider";
import { Box, Container, Grid, Grid2 } from "@mui/material";
import { BiMusic } from "react-icons/bi";
import { FcSportsMode } from "react-icons/fc";
export default function Home() {
  return (
    <div className="w-full min-h-[350vh] flex flex-col items-center gap-[40px] ">
      <div className="flex flex-row sm:max-md:flex-col sm:max-md:items-center  items-center relative w-full sm:max-md:h-[100vh] min-h-[72vh]">
        <Box className="w-[40%] pl-[50px] sm:max-md:pl-0 flex flex-col items-start lg:max-xlg:items-start sm:max-md:items-center sm:max-md:w-full text-center gap-[10px] ">
          <h6 className="text-[35px] sm:max-md:text-[15px] lg:max-xlg:text-[30px] font-semibold">
            For Create Website Or Editing
          </h6>
          <h2 className="text-[50px] lg:max-xlg:text-[35px] sm:max-md:text-[30px] font-extrabold text-mainTextColor">
            Front-End Devloper
          </h2>
          <h4 className="text-[40px] lg:max-xlg:text-[30px] sm:max-md:text-[25px]">React Js</h4>
        </Box>
        <Container className="w-[50%] sm:max-lg:after:h-0 sm:max-lg:before:h-0 sm:max-lg:before:w-0 sm:max-lg:after:w-0 after:transition-all after:duration-1000  after:absolute after:bg-mainTextColor after:w-[50%] after:h-[50%] after:left-[785px] max-xlg:after:left-[628px] after:mix-blend-soft-light after:z-[1] after:top-0 before:absolute before:bg-mainTextColor max-xlg:before:w-[27%] before:w-[22.9%] before:h-full before:left-[1340px] max-xlg:before:left-[1000px] before:mix-blend-multiply before:z-[1] before:top-0 h-full">
          <img
            src={photo1}
            alt=""
            className="w-[40%] sm:max-md:ml-0 sm:max-md:w-full ml-[500px] z-[3] m-auto h-full border-[0.5px] border-dotted border-shadowColor "
          />
        </Container>
      </div>
      <div className="flex flex-row sm:max-md:flex sm:max-md:flex-wrap lg:max-xlg:flex-wrap lg:max-xlg:gap-[40px]  sm:max-md:gap-[40px] sm:max-md:p-[30px] sm:max-md:items-center sm:max-md:w-full min-h-[100vh] bg-smallSection w-full items-center">
        <div className="pl-[50px] pt-[100px] sm:max-md:w-full lg:max-xlg:items-center lg:max-xlg:w-full w-[30%] h-[80%] gap-[30px] flex-col items-center">
          <h6 className="text-[30px] sm:max-md:text-[20px] text-mainTextColor ">Our Services</h6>
          <h2 className="text-[50px] sm:max-md:text-[30px] font-black ">What We do?</h2>
          <hr className="w-[100px] h-[5px] bg-mainTextColor text-mainTextColor " />
          <Box className="opacity-35 text-[30px] sm:max-md:text-[20px] font-medium ">
            If you want to design and develop websites, here is your best choice
            I have one year of experience in designing and developing websites
            using React js/Next js Tailwind css
          </Box>
          <Link to="/services">
            <button className="transition-all duration-300 ease-out after:transition-all after:duration-300 after:ease-out relative text-[30px] sm:max-md:text-[20px] p-[5px] mt-[50px] hover:after:w-full after:w-[30%] after:left-0 after:top-0 after:absolute after:mix-blend-screen after:h-full after:bg-mainTextColor border-t-[2px] border-l-[2px] border-solid border-mainTextColor ">
              View All Services
            </button>
          </Link>
        </div>
        <Grid2 container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} className={"sm:max-md:w-full sm:max-md:p-[10px] lg:max-xlg:w-full lg:max-xlg:mr-0 w-[70%] h-[70%] flex flex-col items-center gap-[50px] mr-[20px]"}>
          <Grid2 className={"flex-row items-center sm:max-md:items-center sm:max-md:w-full sm:max-md:flex-wrap lg:max-xlg:w-full lg:max-xlg:pl-[20px]  flex gap-[30px] w-[90%] "}>
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
          </Grid2>
          <Grid2 className="flex-row items-center sm:max-md:flex-wrap sm:max-md:w-full sm:max-md:items-center lg:max-xlg:w-full lg:max-xlg:pl-[20px] flex gap-[10px] w-[90%] ">
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
          </Grid2>
        </Grid2>
      </div>
      <div className="w-full min-h-[130vh] bg-smallSection pb-[50px]">
        <h2 className="ml-[40px] text-[40px] sm:max-md:text-[30px]  font-black text-mainTextColor ">
          My works gallery
        </h2>
        <Box container className={"relative flex flex-row sm:max-lg:flex-wrap  sm:max-lg:pl-[40px] sm:max-lg:gap-[100px] sm:max-lg:pr-[40px] pl-[50px] pt-[30px] transition-all duration-1000 ease-in-out justify-center gap-[40px] items-center w-full min-h-full"}>
          <Box className="sm:max-lg:after:h-0 hover:after:h-0 transition-all after:ease-in-out after:duration-700 after:absolute after:w-[29.5%] after:h-[95%] after:rounded-[50px] after:bg-afterVideo after:opacity-65 flex flex-col sm:max-lg:w-full w-[30%] min-h-[100vh] ">
            <iframe
              className="rounded-[40px] min-h-[50vh] w-full transition-all duration-1000 ease-in-out hover:border-b-[5px] pb-[30px] border-solid border-b-mainTextColor"
              src="https://www.youtube.com/embed/hw49S2kxssI?si=qGqAxTNs5Pz1JJgw"
              allow="accelerometer; autoplay; gyroscope; web-share; clipboard-write; picture-in-picture; encrypted-media"
              allowFullScreen
            ></iframe>
            <iframe
              className="rounded-[40px]  min-h-[50vh] w-full transition-all duration-1000 ease-in-out hover:border-b-[5px] pb-[30px] border-solid border-b-mainTextColor"
              src={"https://youtube.com/embed/kZ5NBmCZAss?si=mGUAZQhKOy7OcUtZ"}
              allow="accelerometer; autoplay; gyroscope; web-share; clipboard-write; picture-in-picture; encrypted-media "
              allowFullScreen
            />
          </Box>
          <Box className="sm:max-lg:after:h-0 hover:after:h-0 transition-all after:ease-in-out after:duration-700 after:absolute after:w-[29.5%] after:h-[95%] after:rounded-[50px] after:bg-afterVideo after:opacity-65 flex flex-col  sm:max-lg:w-full w-[30%] min-h-[90%]">
            <iframe
              className="rounded-[40px] min-h-[50vh] w-full transition-all duration-1000 ease-in-out hover:border-b-[5px] pb-[30px] border-solid border-b-mainTextColor"
              src={
                "https://www.youtube.com/embed/UJa8p95Wym0?si=NRuE5wAUqSGyo5th"
              }
              allow="accelerometer; autoplay; gyroscope; web-share; clipboard-write; picture-in-picture; encrypted-media "
              allowFullScreen
            />
            <iframe
              className="rounded-[40px] min-h-[50vh] w-full transition-all duration-1000 ease-in-out hover:border-b-[5px] pb-[30px] border-solid border-b-mainTextColor"
              src={
                "https://www.youtube.com/embed/434qs4gfW1Q?si=CXyyuS2-CZyFCare"
              }
              allow="accelerometer; autoplay; gyroscope; web-share; clipboard-write; picture-in-picture; encrypted-media "
              allowFullScreen
            />
          </Box>
          <Box className=" sm:max-lg:after:h-0 hover:after:h-0 transition-all after:ease-in-out after:duration-700 after:absolute after:w-[29.5%] after:h-[47%] after:rounded-[50px] after:translate-y-[-480px] after:bg-afterVideo after:opacity-65 sm:max-lg:w-full w-[30%] min-h-[30%] ">
            <iframe
              className="rounded-[40px] min-h-[50vh] w-full transition-all duration-1000 ease-in-out hover:border-b-[5px] pb-[30px] border-solid border-b-mainTextColor"
              src={
                "https://www.youtube.com/embed/qXatEmUiH-M?si=xutYH5nESgUENvTK"
              }
              allow="accelerometer; autoplay; gyroscope; web-share; clipboard-write; picture-in-picture; encrypted-media "
              allowFullScreen
            />
          </Box>
        </Box>
      </div>
      <div className="w-full min-h-[50vh] ">
        <h2 className="ml-[40px] text-[40px] sm:max-md:text-[30px] font-black text-mainTextColor">
          Skills
        </h2>
        <div className="flex flex-row items-center sm:max-md:items-start ">
          <Box className="flex gap-[50px] bg-theardTextColor flex-row  sm:max-md:flex-wrap sm:max-md:items-start sm:max-md:pl-[10px]  items-center w-full h-full mt-[100px] pl-[100px]  ">
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={10}>
                <div className="w-[50%] ">
                  <label
                    className="text-[30px]  sm:max-md:text-[20px] font-black text-mainTextColor"
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
              <Grid item xs={10}>
                <div className="w-[50%] ">
                  <label
                    className="text-[30px]  sm:max-md:text-[20px] font-black text-mainTextColor"
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
              <Grid item xs={10}>
                <div className="w-[50%] ">
                  <label
                    className="text-[30px]  sm:max-md:text-[20px] font-black text-mainTextColor"
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
              <Grid item xs={10}>
                <div className="w-[50%] ">
                  <label
                    className="text-[30px] sm:max-md:text-[20px] font-black text-mainTextColor"
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
              <Grid item xs={10}>
                <div className="w-[50%] ">
                  <label
                    className="text-[30px]  sm:max-md:text-[20px] font-black text-mainTextColor"
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
              <Grid item xs={10}>
                <div className="w-[50%] ">
                  <label
                    className="text-[30px]  sm:max-md:text-[20px] font-black text-mainTextColor"
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
      <div className="w-full min-h-[40vh] flex flex-col  ">
        <h2 className="ml-[40px] text-[40px] sm:max-md:text-[30px] font-black text-mainTextColor ">
          Hobbies
        </h2>
          <Box className="flex justify-between bg-theardTextColor sm:max-md:flex-wrap sm:max-md:items-start sm:max-md:p-[10px] flex-row items-center w-full h-full mt-[50px] p-[70px]  ">
            <div className="flex flex-col items-center">
              <MdDraw className="text-[40px] sm:max-md:text-[30px] text-mainTextColor " />
            <h3 className="text-[30px] sm:max-md:text-[15px] font-black text-secondTextColor ">
              The drawing
            </h3>
            </div>
            <div className="flex flex-col items-center">
              <BiMusic className="text-[40px] sm:max-md:text-[30px] text-mainTextColor "/>
            <h3 className="text-[30px] sm:max-md:text-[15px] font-black text-secondTextColor ">
              Listening to music
            </h3>
            </div>
           <div className="flex flex-col items-center">
            <FcSportsMode className="text-[40px] sm:max-md:text-[30px] text-mainTextColor "/>
           <h3 className="text-[30px] sm:max-md:text-[15px] font-black text-secondTextColor ">
              Sports
            </h3>
           </div>
          </Box>
        </div>
      </div>
  );
}

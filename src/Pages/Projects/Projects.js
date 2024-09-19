import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <div className="flex flex-col w-[100vw] items-center">
      <Box
        container
        className="flex flex-col items-center w-[100vw] text-center pt-[100px] h-[50vh]  "
      >
        <Typography variant="h2" color="white">
          Projects
        </Typography>
      </Box>
      <Box
        className={
          " flex flex-row w-[100vw] px-[50px] sm:max-lg:flex-wrap flex-wrap no-scrollbar  sm:max-lg:pl-[40px] sm:max-lg:gap-[100px] sm:max-lg:pr-[40px] pt-[30px] transition-all duration-500 z-[1] ease-in-out justify-center gap-[80px] sm:max-lg:w-[99vw] sm:max-md:m-auto items-start min-h-[100vh]"
        }
      >
        <Box className="flex flex-col sm:max-md:w-[90vw] items-start gap-[20px] mb-[50px]">
          <iframe
            className="rounded-[40px] sm:max-md:w-[90vw] min-h-[40vh] w-[350px] transition-all duration-1000 ease-in-out hover:border-b-[3px] border-solid border-b-mainTextColor"
            src="https://www.youtube.com/embed/hw49S2kxssI?si=qGqAxTNs5Pz1JJgw"
            allow="accelerometer; autoplay; gyroscope; web-share; clipboard-write; picture-in-picture; encrypted-media"
            allowFullScreen
          ></iframe>
          <Link to="">
            <button
              disabled
              className="bg-bgButton hover:bg-hoverButton text-shadowColor rounded-[10px] p-[10px] transition-all duration-700 ease-in-out "
            >
              Download code
            </button>
          </Link>
        </Box>
        <Box className="flex flex-col sm:max-md:w-[90vw] items-start gap-[20px] mb-[50px]">
          <iframe
            className="rounded-[40px] sm:max-md:w-[90vw] min-h-[40vh] w-[350px] transition-all duration-1000 ease-in-out hover:border-b-[3px] border-solid border-b-mainTextColor"
            src={"https://youtube.com/embed/kZ5NBmCZAss?si=mGUAZQhKOy7OcUtZ"}
            allow="accelerometer; autoplay; gyroscope; web-share; clipboard-write; picture-in-picture; encrypted-media "
            allowFullScreen
          />
          <Link to="https://github.com/ahmad655656/secondProject.git">
            <button className="bg-bgButton hover:bg-hoverButton text-shadowColor rounded-[10px] p-[10px] transition-all duration-700 ease-in-out ">
              Download code
            </button>
          </Link>
        </Box>
        <Box className="flex flex-col sm:max-md:w-[90vw] items-start gap-[20px] mb-[50px]">
          <iframe
            className="rounded-[40px] sm:max-md:w-[90vw] min-h-[40vh] w-[350px] transition-all duration-1000 ease-in-out hover:border-b-[3px] border-solid border-b-mainTextColor"
            src={
              "https://www.youtube.com/embed/UJa8p95Wym0?si=NRuE5wAUqSGyo5th"
            }
            allow="accelerometer; autoplay; gyroscope; web-share; clipboard-write; picture-in-picture; encrypted-media "
            allowFullScreen
          />
          <button
            disabled
            className="bg-bgButton hover:bg-hoverButton text-shadowColor rounded-[10px] p-[10px] transition-all duration-700 ease-in-out "
          >
            Download code
          </button>
        </Box>
        <Box className="flex flex-col sm:max-md:w-[90vw] items-start gap-[20px] mb-[50px]">
          <iframe
            className="rounded-[40px] sm:max-md:w-[90vw] min-h-[40vh] w-[350px] transition-all duration-1000 ease-in-out hover:border-b-[3px] border-solid border-b-mainTextColor"
            src={
              "https://www.youtube.com/embed/434qs4gfW1Q?si=CXyyuS2-CZyFCare"
            }
            allow="accelerometer; autoplay; gyroscope; web-share; clipboard-write; picture-in-picture; encrypted-media "
            allowFullScreen
          />
          <button
            disabled
            className="bg-bgButton hover:bg-hoverButton text-shadowColor rounded-[10px] p-[10px] transition-all duration-700 ease-in-out "
          >
            Download code
          </button>
        </Box>
        <Box className="flex flex-col sm:max-md:w-[90vw] items-start gap-[20px] mb-[50px]">
          <iframe
            className="rounded-[40px] sm:max-md:w-[90vw] min-h-[40vh] w-[350px] transition-all duration-1000 ease-in-out hover:border-b-[3px] border-solid border-b-mainTextColor"
            src={
              "https://www.youtube.com/embed/qXatEmUiH-M?si=xutYH5nESgUENvTK"
            }
            allow="accelerometer; autoplay; gyroscope; web-share; clipboard-write; picture-in-picture; encrypted-media "
            allowFullScreen
          />
          <Link to="https://github.com/ahmad655656/secondProject.git">
            <button className="bg-bgButton hover:bg-hoverButton text-shadowColor rounded-[10px] p-[10px] transition-all duration-700 ease-in-out ">
              Download code
            </button>
          </Link>
        </Box>
        <Box className="flex flex-col sm:max-md:w-[90vw] items-start gap-[20px] mb-[50px]">
          <iframe
            className="rounded-[40px] min-h-[40vh] sm:max-md:w-[90vw] w-[350px] transition-all duration-1000 ease-in-out hover:border-b-[3px] border-solid border-b-mainTextColor"
            src={
              "https://www.youtube.com/embed/zZ5te7UcGDw?si=CZDIsVnZJN_81ahI"
            }
            allow="accelerometer; autoplay; gyroscope; web-share; clipboard-write; picture-in-picture; encrypted-media "
            allowFullScreen
          />
          <Link to="https://github.com/ahmad655656/firstProject">
            <button className="bg-bgButton hover:bg-hoverButton text-shadowColor rounded-[10px] p-[10px] transition-all duration-700 ease-in-out ">
              Download code
            </button>
          </Link>
        </Box>
        <Box className="flex flex-col w-[25vw] sm:max-md:w-[90vw] items-start gap-[20px] mb-[50px]">
          <iframe
            className="rounded-[40px] sm:max-md:w-[90vw] min-h-[40vh] w-[350px] transition-all duration-1000 ease-in-out hover:border-b-[3px] border-solid border-b-mainTextColor"
            src={"https://www.youtube.com/embed/EQ33ZcI2TrI?si=68z5Dxb7p22haPdW"}
            allow="accelerometer; autoplay; gyroscope; web-share; clipboard-write; picture-in-picture; encrypted-media "
            allowFullScreen
          />
          <Link to="https://github.com/ahmad655656/Fifth-project.git">
            <button className="bg-bgButton hover:bg-hoverButton text-shadowColor rounded-[10px] p-[10px] transition-all duration-700 ease-in-out ">
              Download code
            </button>
          </Link>
        </Box>
      </Box>
    </div>
  );
}

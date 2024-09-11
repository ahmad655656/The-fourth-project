import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <div className="w-full flex flex-col items-center">
      <Box container className='flex flex-col items-center text-center pt-[100px] w-full h-[50vh]  '>
      <Typography variant="h2" color="white">
          Projects 
        </Typography>
        </Box>
      <Box
      container
      className={
        "relative flex flex-row sm:max-lg:flex-wrap  sm:max-lg:pl-[40px] sm:max-lg:gap-[100px] sm:max-lg:pr-[40px] pl-[80px] pt-[30px] transition-all duration-500 z-[1] ease-in-out justify-center gap-[80px] sm:max-lg:w-[80%] sm:max-md:m-auto items-center w-full min-h-[100vh] p-[100px] "
      }
    >
      <Box className=" flex flex-col  min-h-[100vh] ">
        <Box className="flex flex-col items-start gap-[20px] mb-[50px]">
          <iframe
            className="rounded-[40px] min-h-[40vh] w-[350px] transition-all duration-1000 ease-in-out hover:border-b-[3px] border-solid border-b-mainTextColor"
            src="https://www.youtube.com/embed/hw49S2kxssI?si=qGqAxTNs5Pz1JJgw"
            allow="accelerometer; autoplay; gyroscope; web-share; clipboard-write; picture-in-picture; encrypted-media"
            allowFullScreen
          ></iframe>
          <Link to="">
            <button disabled className="bg-bgButton hover:bg-hoverButton text-shadowColor rounded-[10px] p-[10px] transition-all duration-700 ease-in-out ">
              Download code
            </button>
          </Link>
        </Box>
        <Box className="flex flex-col items-start gap-[20px] mb-[50px]">
          <iframe
            className="rounded-[40px] min-h-[40vh] w-[350px] transition-all duration-1000 ease-in-out hover:border-b-[3px] border-solid border-b-mainTextColor"
            src={"https://youtube.com/embed/kZ5NBmCZAss?si=mGUAZQhKOy7OcUtZ"}
            allow="accelerometer; autoplay; gyroscope; web-share; clipboard-write; picture-in-picture; encrypted-media "
            allowFullScreen
          />
          <Link to='https://github.com/ahmad655656/secondProject.git'>
          <button className="bg-bgButton hover:bg-hoverButton text-shadowColor rounded-[10px] p-[10px] transition-all duration-700 ease-in-out ">
            Download code
          </button>
          </Link>
        </Box>
      </Box>
      <Box className="flex flex-col  min-h-[90%]">
        <Box className="flex flex-col items-start gap-[20px] mb-[50px]">
          <iframe
            className="rounded-[40px] min-h-[40vh] w-[350px] transition-all duration-1000 ease-in-out hover:border-b-[3px] border-solid border-b-mainTextColor"
            src={
              "https://www.youtube.com/embed/UJa8p95Wym0?si=NRuE5wAUqSGyo5th"
            }
            allow="accelerometer; autoplay; gyroscope; web-share; clipboard-write; picture-in-picture; encrypted-media "
            allowFullScreen
          />
          <button disabled className="bg-bgButton hover:bg-hoverButton text-shadowColor rounded-[10px] p-[10px] transition-all duration-700 ease-in-out ">
            Download code
          </button>
        </Box>
        <Box className="flex flex-col items-start gap-[20px] mb-[50px]">
          <iframe
            className="rounded-[40px] min-h-[40vh] w-[350px] sm:max-md:w-full transition-all duration-1000 ease-in-out hover:border-b-[3px] border-solid border-b-mainTextColor"
            src={
              "https://www.youtube.com/embed/434qs4gfW1Q?si=CXyyuS2-CZyFCare"
            }
            allow="accelerometer; autoplay; gyroscope; web-share; clipboard-write; picture-in-picture; encrypted-media "
            allowFullScreen
          />
          <button disabled className="bg-bgButton hover:bg-hoverButton text-shadowColor rounded-[10px] p-[10px] transition-all duration-700 ease-in-out ">
            Download code
          </button>
        </Box>
      </Box>
      <Box className="flex flex-col min-h-[30%] ">
        <Box className="flex flex-col items-start gap-[20px] mb-[50px]">
          <iframe
            className="rounded-[40px] min-h-[40vh] w-[350px] transition-all duration-1000 ease-in-out hover:border-b-[3px] border-solid border-b-mainTextColor"
            src={
              "https://www.youtube.com/embed/qXatEmUiH-M?si=xutYH5nESgUENvTK"
            }
            allow="accelerometer; autoplay; gyroscope; web-share; clipboard-write; picture-in-picture; encrypted-media "
            allowFullScreen
          />
          <Link to='https://github.com/ahmad655656/secondProject.git'>
          <button className="bg-bgButton hover:bg-hoverButton text-shadowColor rounded-[10px] p-[10px] transition-all duration-700 ease-in-out ">
            Download code
          </button>
          </Link>
        </Box>
        <Box className="flex flex-col items-start gap-[20px] mb-[50px]">
          <iframe
            className="rounded-[40px] min-h-[40vh] w-[350px] transition-all duration-1000 ease-in-out hover:border-b-[3px] border-solid border-b-mainTextColor"
            src={"https://www.youtube.com/embed/zZ5te7UcGDw?si=CZDIsVnZJN_81ahI"}
            allow="accelerometer; autoplay; gyroscope; web-share; clipboard-write; picture-in-picture; encrypted-media "
            allowFullScreen
          />
          <Link to="https://github.com/ahmad655656/firstProject">
            <button className="bg-bgButton hover:bg-hoverButton text-shadowColor rounded-[10px] p-[10px] transition-all duration-700 ease-in-out ">
              Download code
            </button>
          </Link>
        </Box>
      </Box>
    </Box>
    </div>
  );
}

import { Box, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <Box
      container
      className={
        "relative flex flex-row sm:max-lg:flex-wrap  sm:max-lg:pl-[40px] sm:max-lg:gap-[100px] sm:max-lg:pr-[40px] pl-[50px] pt-[30px] transition-all duration-500 z-[1] ease-in-out justify-center gap-[40px] items-center w-full min-h-[100vh] p-[100px] "
      }
    >
      <Box className=" flex flex-col sm:max-lg:w-full w-[30%] min-h-[100vh] ">
        <Box className="flex flex-col items-start gap-[20px] mb-[50px]">
          <iframe
            className="rounded-[40px] min-h-[50vh] w-full transition-all duration-1000 ease-in-out hover:border-b-[5px] pb-[30px] border-solid border-b-mainTextColor"
            src="https://www.youtube.com/embed/hw49S2kxssI?si=qGqAxTNs5Pz1JJgw"
            allow="accelerometer; autoplay; gyroscope; web-share; clipboard-write; picture-in-picture; encrypted-media"
            allowFullScreen
          ></iframe>
          <Link to="">
            <Button variant="outlined" color="error">
              Download code
            </Button>
          </Link>
        </Box>
        <Box className="flex flex-col items-start gap-[20px] mb-[50px]">
          <iframe
            className="rounded-[40px]  min-h-[50vh] w-full transition-all duration-1000 ease-in-out hover:border-b-[5px] pb-[30px] border-solid border-b-mainTextColor"
            src={"https://youtube.com/embed/kZ5NBmCZAss?si=mGUAZQhKOy7OcUtZ"}
            allow="accelerometer; autoplay; gyroscope; web-share; clipboard-write; picture-in-picture; encrypted-media "
            allowFullScreen
          />
          <Link to='https://github.com/ahmad655656/secondProject.git'>
          <Button variant="outlined" color="success">
            Download code
          </Button>
          </Link>
        </Box>
      </Box>
      <Box className="flex flex-col  sm:max-lg:w-full w-[30%] min-h-[90%]">
        <Box className="flex flex-col items-start gap-[20px] mb-[50px]">
          <iframe
            className="rounded-[40px] min-h-[50vh] w-full transition-all duration-1000 ease-in-out hover:border-b-[5px] pb-[30px] border-solid border-b-mainTextColor"
            src={
              "https://www.youtube.com/embed/UJa8p95Wym0?si=NRuE5wAUqSGyo5th"
            }
            allow="accelerometer; autoplay; gyroscope; web-share; clipboard-write; picture-in-picture; encrypted-media "
            allowFullScreen
          />
          <Button variant="outlined" color="error">
            Download code
          </Button>
        </Box>
        <Box className="flex flex-col items-start gap-[20px] mb-[50px]">
          <iframe
            className="rounded-[40px] min-h-[50vh] w-full transition-all duration-1000 ease-in-out hover:border-b-[5px] pb-[30px] border-solid border-b-mainTextColor"
            src={
              "https://www.youtube.com/embed/434qs4gfW1Q?si=CXyyuS2-CZyFCare"
            }
            allow="accelerometer; autoplay; gyroscope; web-share; clipboard-write; picture-in-picture; encrypted-media "
            allowFullScreen
          />
          <Button variant="outlined" color="error">
            Download code
          </Button>
        </Box>
      </Box>
      <Box className="sm:max-lg:w-full w-[30%] min-h-[30%] ">
        <Box className="flex flex-col items-start gap-[20px] mb-[50px]">
          <iframe
            className="rounded-[40px] min-h-[50vh] w-full transition-all duration-1000 ease-in-out hover:border-b-[5px] pb-[30px] border-solid border-b-mainTextColor"
            src={
              "https://www.youtube.com/embed/qXatEmUiH-M?si=xutYH5nESgUENvTK"
            }
            allow="accelerometer; autoplay; gyroscope; web-share; clipboard-write; picture-in-picture; encrypted-media "
            allowFullScreen
          />
          <Link to='https://github.com/ahmad655656/secondProject.git'>
          <Button variant="outlined" color="success">
            Download code
          </Button>
          </Link>
        </Box>
        <Box className="flex flex-col items-start gap-[20px] mb-[50px]">
          <iframe
            className="rounded-[40px] min-h-[50vh] w-full transition-all duration-1000 ease-in-out hover:border-b-[5px] pb-[30px] border-solid border-b-mainTextColor"
            src={"https://www.youtube.com/embed/zZ5te7UcGDw?si=CZDIsVnZJN_81ahI"}
            allow="accelerometer; autoplay; gyroscope; web-share; clipboard-write; picture-in-picture; encrypted-media "
            allowFullScreen
          />
          <Link to="https://github.com/ahmad655656/firstProject">
            <Button variant="outlined" color="success">
              Download code
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

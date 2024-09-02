import { Box } from '@mui/material'
import React from 'react'

export default function Portfolio() {
  return (
       <Box container className={"relative flex flex-row sm:max-lg:flex-wrap  sm:max-lg:pl-[40px] sm:max-lg:gap-[100px] sm:max-lg:pr-[40px] pl-[50px] pt-[30px] transition-all duration-500 z-[1] ease-in-out justify-center gap-[40px] items-center w-full min-h-[100vh] p-[100px] "}>
          <Box className=" flex flex-col sm:max-lg:w-full w-[30%] min-h-[100vh] ">
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
          <Box className="flex flex-col  sm:max-lg:w-full w-[30%] min-h-[90%]">
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
          <Box className="sm:max-lg:w-full w-[30%] min-h-[30%] ">
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
  )
}

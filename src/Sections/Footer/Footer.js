import { Box, Button, ButtonBase, ButtonGroup, Fab } from "@mui/material";
import React from "react";
import { FaFacebook, FaTelegram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="w-full h-[70vh] flex flex-col bg-smallSection ">
      <div className="w-[90%] h-[200px] border-b-[3px] border-solid border-b-shadowColor flex flex-row items-center justify-between mx-auto ">
        <div className="flex flex-row items-center gap-[10px] mr-[200px]">
          <img
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqfacCQhC3h6m9skEvWk75mx4YV2_GxYJNfw&s"
            }
            alt=""
            className="rounded-[50%] w-[60px] h-[60px] sm:max-md:w-[40px] sm:max-md:h-[40px] lg:max-xlg:w-[50px] lg:max-xlg:h-[50px] "
          />
          <div className="flex flex-col items-center pt-[10px]">
            <h2 className="sm:max-md:text-[12px] lg:max-xlg:text-[17px] font-black text-[25px] text-white">
              HAERDARA
              <span className="sm:max-md:text-[12px] lg:max-xlg:text-[15px] text-[20px] font-black text-[#ffa43b]">
                SALLOUM
              </span>
            </h2>
            <h6 className="sm:max-md:text-[8px] lg:max-xlg:text-[13px] text-white text-[20px] ">
              Front End Devloper
            </h6>
          </div>
        </div>
        <div className="flex flex-row gap-[20px]">
          <FaFacebook className="text-[15px] rounded-[50%] transition-all duration-500 ease-in-out cursor-pointer hover:text-[#111] hover:bg-mainTextColor border-[2px] border-solid border-BottomNavBar p-[10px] w-[60px] h-[60px] text-mainTextColor" />
          <FaWhatsapp className="text-[15px] rounded-[50%] transition-all duration-500 ease-in-out cursor-pointer hover:text-[#111] hover:bg-mainTextColor border-[2px] border-solid border-BottomNavBar p-[10px] w-[60px] h-[60px] text-mainTextColor" />
          <FaYoutube className="text-[15px] rounded-[50%] transition-all duration-500 ease-in-out cursor-pointer hover:text-[#111] hover:bg-mainTextColor border-[2px] border-solid border-BottomNavBar p-[10px] w-[60px] h-[60px] text-mainTextColor" />
          <FaTelegram className="text-[15px] rounded-[50%] transition-all duration-500 ease-in-out cursor-pointer hover:text-[#111] hover:bg-mainTextColor border-[2px] border-solid border-BottomNavBar p-[10px] w-[60px] h-[60px] text-mainTextColor" />
        </div>
      </div>
      <Box className={"flex flex-row w-[90%] m-auto "}>
        <div className="w-[50%] flex flex-col gap-[40px] items-start">
          <h2 className="text-mainTextColor text-[30px] font-black ">
            About us
          </h2>
          <h5 className="opacity-30 text-[20px] font-black text-secondTextColor ">
            I am a student in the College of Information Engineering in the
            fifth year, majoring in software engineering and information
            systems.
          </h5>
          <Link to="/about">
          <Button variant="outlined">
            Read more
          </Button>
          </Link>
        </div>
        <div className="w-[50%] flex flex-col gap-[40px] items-start">
          <h2 className="text-mainTextColor text-[30px] font-black ">
            Newsletter
          </h2>
          <h5 className="opacity-30 text-[20px] font-black text-secondTextColor ">
            My main task is to design a complete website that is responsive to
            all devices It is certain that there will be new developments, God
            willing
          </h5>
          {/* <div className="flex flex-row items-center w-full">
            <input className="w-[80%] h-full outline-none border-none bg-theardTextColor text-[25px] " type="text" placeholder="Email" />
            <Fab color="primary" aria-label="add">
              <FaTelegram className="text-[40px]" />
            </Fab>
          </div> */}
        </div>
        <div></div>
      </Box>
    </div>
  );
}

import { Box, Grid2, Typography } from '@mui/material'
import React from 'react'
import CardService from '../../Components/CardService/CardService'
import { FiUserX } from 'react-icons/fi'
import { CgScreen, CgWebsite } from 'react-icons/cg'
import { MdStyle } from 'react-icons/md'

export default function About() {
  return (
    <div className='flex flex-col items-center w-full h-full'>
      <Box container className='flex flex-col items-center text-center pt-[100px] w-full h-[50vh]  '>
        <Typography variant="h3" color="white">
          About us
        </Typography>
      </Box>
      <Box container className='flex flex-col items-center sm:max-md:flex-col sm:max-md:w-full sm:max-md:items-center  gap-[50px] w-full min-h-[170vh]'>
        <Box container className='w-[70%] sm:max-xlg:w-full h-full '>
          <img src='https://media.istockphoto.com/id/517305732/photo/react-cubics.webp?s=1024x1024&w=is&k=20&c=jRKZhVky6-6tTZtnKzqoG9w4QgPkSTC-pamZdwJnq6s=' alt="" className='w-full h-full transition-all duration-700 ease-in hover:opacity-100 opacity-35' />
        </Box>
        <Box container className='flex flex-col items-start text-center sm:max-xlg:items-center gap-[50px] h-full w-[70%] '>
          <Typography variant="h4" color="#ffa43b">
          WHo we are?
          </Typography>
          <Typography variant="h5" color="white">
         I am a student in the College of Information Engineering in the fifth year, majoring in software engineering and information systems. I won first place in the Tartous Governorate level in the vocational secondary school in computer technology.
         </Typography>
         <Box container className='flex flex-col items-start gap-[50px] w-full min-h-[100vh]'>
        <Typography variant="h4" color="#ffa43b">My Services</Typography>
      <Grid2 container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} className={"sm:max-md:w-full sm:max-md:p-[10px] sm:max-md:pb-[20px] lg:max-xlg:w-full lg:max-xlg:mr-0 w-full h-full flex flex-col items-center gap-[90px]"}>
          <Grid2 className={"flex-row items-center sm:max-md:items-center sm:max-md:w-full sm:max-md:flex-wrap lg:max-xlg:w-full lg:max-xlg:pl-[20px]  flex gap-[40px] w-full "}>
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
          <Grid2 className="flex-row items-center sm:max-md:flex-wrap sm:max-md:w-full sm:max-md:items-center lg:max-xlg:w-full lg:max-xlg:pl-[20px] flex gap-[40px] w-full ">
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
      </Box>
        </Box>
      </Box>
      
    </div>
  )
}

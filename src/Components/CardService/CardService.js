import { Box } from '@mui/material'
import React from 'react'

export default function CardService(props) {
  return (
    <Box className={'flex flex-col items-start sm:max-md:items-center sm:max-md:m-auto sm:max-md:w-full gap-[20px] w-[50%]'}>
        {props.children}
    <h3 className=' text-[30px] font-semibold text-mainTextColor'>{props.title}</h3>
    <p className='opacity-35 text-[25px] lg:max-xlg:text-[23px] sm:max-md:text-[15px]  '>
        {props.content}
    </p>
  </Box>
  )
}

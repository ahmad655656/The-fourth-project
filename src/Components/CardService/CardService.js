import { Box } from '@mui/material'
import React from 'react'

export default function CardService(props) {
  return (
    <Box className={'flex border-[0.5px] py-[10px] min-h-[250px] border-solid border-shadowColor flex-col items-center sm:max-md:items-center rounded-[30px] sm:max-md:m-auto sm:max-md:w-full gap-[20px] w-[50%]'}>
        {props.children}
    <h3 className=' text-[20px] font-semibold text-center leading-6 text-mainTextColor'>{props.title}</h3>
    <p className='opacity-35 text-[15px] lg:max-xlg:text-[15px] w-[70%] sm:max-md:w-[90%] text-center sm:max-md:text-[15px]  '>
        {props.content}
    </p>
  </Box>
  )
}

import React from 'react'

export default function CardService(props) {
  return (
    <div className='flex flex-col items-start gap-[20px] w-[50%]'>
        {props.children}
    <h3 className=' text-[30px] font-semibold text-mainTextColor'>{props.title}</h3>
    <p className='opacity-35 text-[25px]'>
        {props.content}
    </p>
  </div>
  )
}

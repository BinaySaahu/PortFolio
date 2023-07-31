"use client"

import React, { useEffect } from 'react'
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import CheckIcon from '@mui/icons-material/Check';

function SkillCards({info}) {
    let contents = info.contents
    useEffect(()=>{
        console.log(info);
    },[])
  return (
    <div className='flex flex-col items-center bg-secondary m-10 p-10 relative rounded-[10px] md:w-1/4 w-full shadow-boxShadow'>
        <div className='rounded-full bg-violet-600 w-fit absolute top-[-35px] p-5 text-white'>
            {info.img}
        </div>
        <div className='w-full flex justify-center'><h3 className='text-[12px] font-extrabold font-poppins mt-3'>{info.title}</h3></div>
        <div className='flex flex-col text-[11px] font-bold font-poppins items-start w-full'>
            {
                contents.map((content,idx)=>(
                    <p className='mt-3' key={idx}> <CheckIcon className='text-primary font-bold'/>{content}</p>
                ))
            }
        </div>
    </div>
  )
}

export default SkillCards

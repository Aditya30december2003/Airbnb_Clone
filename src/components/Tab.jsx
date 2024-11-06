import React from 'react'
import { CiSearch } from "react-icons/ci";
const Tab = () => {
  return (
    <>
     <ul className='mt-5 lg:mt-0 p-2 flex items-center justify-between gap-1 shadow-[0_3px_10px_rgb(0,0,0,0.2)] w-full lg:w-[63%] mx-auto rounded-[12rem]'>
        <li className='px-5 cursor-pointer md:hover:bg-gray-200 rounded-[12rem] h-full mx-1'>
            <div className='text-[0.8rem] px-1 hidden lg:block'>Where</div>
            <div className='text-black/70 text-[0.9rem] p-1 hidden lg:block'>Search destination</div>
            <input type="text" placeholder='Search destination' className='block lg:hidden outline-none p-2 w-full border-0' />
        </li>
        <div className='hidden lg:block bg-black/10 h-[2rem] w-[0.1rem]'></div>
        <li className='hidden lg:block px-10 cursor-pointer hover:bg-gray-200 rounded-[12rem] h-full mx-1'>
        <div className='text-[0.8rem] px-1'>Check in</div>
        <div className='text-black/70 p-1 text-[0.9rem]'>Add Dates</div>
        </li>
        <div className='hidden lg:blockbg-black/10 h-[2rem] w-[0.1rem]'></div>
        <li className='hidden lg:block px-5 cursor-pointer hover:bg-gray-200 rounded-[12rem] h-full mx-1'>
        <div className='text-[0.8rem] px-1'>Check out</div>
        <div className='text-black/70 p-1 text-[0.9rem]'>Add Dates</div>
        </li>
        <div className='hidden lg:block bg-black/10 h-[2rem] w-[0.1rem]'></div>
        <li className='hidden lg:block px-5 cursor-pointer hover:bg-gray-200 rounded-[12rem] h-full mx-1'>
        <div className='text-[0.8rem] px-1'>Who</div>
        <div className='text-black/70 p-1 text-[0.9rem]'>Add guests</div>
        </li>
        <div><CiSearch size={50} className='cursor-pointer bg-pink-600 text-white p-3 rounded-[100%] font-bold'/></div>
     </ul>
    </>
  )
}

export default Tab

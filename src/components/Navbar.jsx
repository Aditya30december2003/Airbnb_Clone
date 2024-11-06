import React, { useState , useEffect} from 'react'
import { CiGlobe } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiAccountCircleFill } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
const Navbar = () => {
  const [nav , setNav]= useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
          setScrollPosition(window.scrollY>0);
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

  return (
    <>
      <div className='hidden lg:grid grid-cols-3 items-center justify-between px-4 py-2'>
        <div><img className='w-[8rem] cursor-pointer' src="https://cdn.icon-icons.com/icons2/2699/PNG/512/airbnb_logo_icon_170606.png" alt="" /></div>
        {!scrollPosition?<div className='duration-300'><ul className='flex items-center gap-10 text-[1.1rem] mx-auto '>
        <li className='cursor-pointer font-bold text-[1rem]'>Stays</li>
        <li className='cursor-pointer text-[1rem] hover:bg-gray-100 p-2 rounded-[12rem] duration-300'>Experiences</li>
        <li className='cursor-pointer text-[1rem] hover:bg-gray-100 p-2 rounded-[12rem] duration-300'>Online Experiences</li>
        </ul></div>:
        <>
        <ul className='duration-300 p-2 flex items-center justify-between gap-1 shadow-[0_3px_10px_rgb(0,0,0,0.2)] w-[115%] mr-[5rem]  rounded-[12rem]'>
        <li className='px-5 cursor-pointer hover:bg-gray-200 rounded-[12rem] h-full mx-1'>
            <div>Anywhere</div>
        </li>
        <div className='bg-black/10 h-[2rem] w-[0.1rem]'></div>
        <li className='px-10 cursor-pointer hover:bg-gray-200 rounded-[12rem] h-full mx-1'>
        <div className='w-full'>Any week</div>
        </li>
        <div className='bg-black/10 h-[2rem] w-[0.1rem]'></div>
        <li className='px-5 cursor-pointer hover:bg-gray-200 rounded-[12rem] h-full mx-1'>
        <div>Add guests</div>
        </li>
        <div className='bg-black/10 h-[2rem] w-[0.1rem]'></div>
        <div><CiSearch size={30} className='cursor-pointer bg-pink-600 text-white p-1 rounded-[100%] font-bold'/></div>
     </ul></>}
        <ul className='flex items-center   gap-4 w-[75%] ml-[7rem]'>
        <li className='text-[0.9rem] hover:bg-gray-100 cursor-pointer p-2 rounded-[12rem]'>Airbnb your home</li>
        <li className='cursor-pointer hover:bg-gray-200 font-bold p-3 rounded-[100%] text-gray-200'><CiGlobe size={18} color='gray' /></li>
        <li onClick={()=>{setNav(!nav)}} className='cursor-pointer hover:shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] rounded-[12rem] items-center border-2 p-1 duration-300'>
            <div className='flex gap-3'>
            <RxHamburgerMenu size={30} className='p-2 cursor-pointer'/>
            <RiAccountCircleFill size={34} className='cursor-pointer'/>
            </div>
        </li>
        </ul>
        <div>
          <ul className={nav?'text-black/40 absolute ml-[75%] rounded-[1rem] shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-3 flex flex-col gap-4 z-10 bg-white duration-300':'hidden'}>
            <li className='cursor-pointer text-[0.9rem] w-[14rem]'>Sign up</li>
            <li className='cursor-pointer text-[0.9rem] w-[14rem]'>Login</li>
            <hr />
            <li className='cursor-pointer text-[0.9rem] w-[14rem] p-1'>Airbnb your home</li>
            <li className='cursor-pointer text-[0.9rem] w-[14rem]'>Help Center</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar

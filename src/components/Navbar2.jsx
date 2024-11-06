import React , {useState} from 'react'
import { BsSliders , BsToggleOff , BsToggleOn } from "react-icons/bs";
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import {icon} from '../Data/type'
const Navbar2 = () => {
    const [toggle , setToggle] = useState(false);
    const [types , setTypes] = useState(icon);
    const slideLeft = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 500;
      };
      const slideRight = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 500;
      };
  return (
    <div className='flex items-center mt-1 gap-3'>
      <div className='lg:w-[70%] w-full'>
        <div className='px-10 py-1 ml-5 relative group'>
        <MdChevronLeft
          onClick={slideLeft}
          className='scrollbar-hide mt-[0.7rem] bg-white border-2 border-black left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
          size={30}
        />
        <div id='slider' className="flex items-center gap-12 group  w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative">
        {types.map((item)=>(
            <div className=' cursor-pointer flex flex-col items-center'>
                    <>
                    <img className='w-[2rem]' src={item.img} alt="" />
                    <p className='text-[0.75rem] text-center'>{item.name}</p>
                    </>
            </div>
            ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          className='bg-white border-2 mt-[-2.5rem] border-black right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
          size={30}
        />
        </div>
      </div>

      <div className='hidden w-[7%] border-[0.09rem] border-gray-200 p-3 rounded-[0.5rem]  hover:border-black hover:bg-gray-200 cursor-pointer md:flex items-center text-center justify-center gap-2'>
        <BsSliders size={17}/>
        <p className='text-[0.8rem]'>Filters</p>
      </div>
      <div onClick={()=>{setToggle(!toggle)}} className='hidden w-[18%] border-[0.09rem] border-gray-200 p-1 rounded-[0.5rem]  hover:border-black hover:bg-gray-200 cursor-pointer  md:flex items-center justify-center gap-3'>
        <p className='text-[0.8rem]'>Display total before taxes</p>
        <button>
        {!toggle ?<BsToggleOff size={35} className='cursor-pointer duration-300'/> :<BsToggleOn size={35} className='cursor-pointer duration-300'/>}
        </button>
      </div>
    </div>
  )
}

export default Navbar2

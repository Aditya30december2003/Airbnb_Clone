import React , {useState , useEffect} from 'react'
import {hotel} from '../Data/hotel'
import { FaMap } from "react-icons/fa";
import Hotel from './Hotel';
const Hero = () => {
  const [hotels , setHotels]= useState(hotel)
  const [scrollPosition, setScrollPosition] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
          setScrollPosition(window.scrollY>1300);
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
  return (
    <>
    <div className='mt-[10rem] md:mt-[12rem] lg:mt-[15rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 px-7 py-2'>
    {hotels.map((item,index)=>(
     <Hotel key={index} item={item} />
    ))} 
    </div>
    {!scrollPosition? <div className='bg-black/90 fixed bottom-10 mx-[30%] md:mx-[42%] lg:mx-[45%] z-10 text-white font-bold flex items-center px-3 py-4 justify-between w-[32%] md:w-[15%] lg:w-[9%] rounded-[12rem] cursor-pointer hover:scale-105 duration-300'>
    <button className='text-[0.9rem]'><span>Show</span>Map</button>
    <FaMap size={20}/>
    </div> : ''}
   
</>
    
  )
}

export default Hero

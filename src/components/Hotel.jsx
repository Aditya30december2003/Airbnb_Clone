import React , {useState} from 'react'
import { IoIosStarOutline } from "react-icons/io";
import { FaRegHeart , FaHeart } from "react-icons/fa";
const Hotel = ({item}) => {
const [heart , setHeart] = useState(false);
  return (
    <div>
    <div>
      
    <div className='relative cursor-pointer mx-auto w-full'>
            <div className='absolute  top-0 left-0  flex items-center justify-between w-full  p-3'>
             <button  onClick={()=>{setHeart(!heart)}}>{!heart?<FaRegHeart color='red' size={20}/>:<FaHeart color='red' size={20}/>}</button>
            </div>
            <img  className='rounded-[1.5rem] h-[17rem] w-full  object-cover' src={item?.img} alt="" />
      </div> 

        <div className='flex justify-between'>
            <div className="info">
                <p className='text-[1rem]'>{item?.name}</p>
                <p></p>
                <p>{item?.cost}</p>
            </div>
            <div className='rate flex h-[1rem] items-center mt-2 mr-2'>
            <IoIosStarOutline className='cursor-pointer'/>
            <p>4.94</p>
            </div>
        </div>

    </div> 
    
    </div>
  )
}

export default Hotel

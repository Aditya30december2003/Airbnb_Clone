import React from 'react'

const footer = () => {
  return (
    <div className='bg-gray-300 p-10 mt-20'>
      <h1 className='text-[1.4rem]'>Inspiration for future getaways</h1>
      <ul className='flex flex-col lg:flex-row items-center gap-4 mt-2'>
        <li className='cursor-pointer text-[0.9rem]'>Popular</li>
        <li className='cursor-pointer text-[0.9rem]'>Arts & culture</li>
        <li className='cursor-pointer text-[0.9rem]'>Outdoors</li> 
        <li className='cursor-pointer text-[0.9rem]'>Mountains</li>
        <li className='cursor-pointer text-[0.9rem]'>Beach</li>
        <li className='cursor-pointer text-[0.9rem]'>Unique stays</li>
        <li className='cursor-pointer text-[0.9rem]'>Categories</li>
        <li className='cursor-pointer text-[0.9rem]'>Things to do</li>
      </ul>
      <hr className='mt-2 bg-black h-[0.1rem] text-black'/>
      <div className='flex flex-col lg:flex-row items-center gap-10 text-center p-5'>
        <ul className='flex flex-col gap-2 items-center '>
          <li>Canmore</li>
          <li>Mijas</li>
          <li>Tucson</li>
        </ul>
        <ul className='flex flex-col gap-2 items-center '>
          <li>Devonport</li>
          <li>Benalmádena</li>
          <li>Marbella</li>
        </ul>
        <ul className='flex flex-col gap-2 items-center '>
          <li>Mijas</li>
          <li>Scottsdale</li>
          <li>Mallacoota</li>
        </ul>
        <ul className='flex flex-col gap-2 items-center '>
          <li>Mountain View</li>
          <li>Ibiza</li>
          <li>Paso Robels</li>
        </ul>
        <ul className='flex flex-col gap-2 items-center '>
          <li>Santa Barbara</li>
          <li>Brighton</li>
          <li>Padstow</li>
        </ul>
      </div>
    </div>
  )
}

export default footer




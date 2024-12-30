import React from 'react'
import Image from 'next/image'

export default function LeftProfile() {
  return (
    <div className='flex flex-col justify-center gap-5 pl-10 bg-black w-[600px]'>
        <h4 className='text-white'>My Portfolio</h4>
        <Image
        src='/profile.jpg'
        alt='yeah'
        className='w-56 h-56 rounded-xl'
        width={500}
        height={500}
        
        />
        <h5 className='text-gray-400'>@0x_kael</h5>
        <h4 className='text-white font-bold text-6xl'>Kyle Salaysay</h4>
    </div>
  )
}

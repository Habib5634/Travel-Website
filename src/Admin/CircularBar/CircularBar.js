import React from 'react'
import CircularProgressBar from './CircularProgressBar';

const CircularBar = () => {
    const progress = 70; // Set the progress to 70%
  return (
    <div className="flex items-center justify-center bg-[#290D3B] px-2 pt-2 h-56 flex-col w-full" >
        <h1 className='text-xl font-bold text-white pb-2'>Monthly Increased Amount</h1>
    <CircularProgressBar className="mb-2" progress={progress} />
    <h1 className='font-bold text-white text-sm pb-6'>Calculated With Respect To Per 100 Bookings</h1>
  </div>
  )
}

export default CircularBar
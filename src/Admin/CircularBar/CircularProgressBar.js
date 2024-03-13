import React from 'react'
 
const CircularProgressBar = ({ progress }) => {
  return (
    <div className="circular-progress-bar h-24 w-24 relative">
  <div className="bar-background absolute top-0 left-0 w-full h-full rounded-full border border-gradient-to-r from-indigo-500 to-pink-500 "  style={{borderWidth: '12px' }}></div>
  <div
    className="bar absolute top-0 left-0 w-full h-full rounded-full border-4 border-transparent border-t-blue-500 border-solid"
    style={{borderWidth: '12px', transform: `rotate(${progress * 3.6}deg)` }}
  ></div>
  <div className="progress-text absolute inset-0 flex items-center justify-center text-xl font-bold text-blue-500">
    {progress}%
  </div>
</div>


  )
}

export default CircularProgressBar
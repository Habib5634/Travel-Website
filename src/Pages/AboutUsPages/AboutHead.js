import React from 'react'
import aboutbg from '../../Assets/aboutbg.png'
import '../../fnt.css'
const AboutHead = () => {
  return (
    <>
    <div className="relative h-[80vh]">
        {/* Background Image */}
        <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${aboutbg})` }}
        ></div>

        {/* Content */}
        <div className="flex flex-col items-center justify-center h-full  relative z-10">
            <h1 className="text-8xl text-white font-bold  mb-4">About</h1>
            <h1 className="text-6xl text-white fnt mb-4">us</h1>
            <button className="bg-gradient-to-r from-[#4E1E6C] via-[#cd14d0] to-[#E38C25] transition-colors duration-700 hover:bg-gradient-to-r hover:from-[#E38C25] hover:via-[#cd14d0] hover:to-[#4E1E6C] rounded-full text-2xl text-white fnt py-2 px-4">Explore Now...</button>
        </div>
        </div>
       
</>
  )
}

export default AboutHead
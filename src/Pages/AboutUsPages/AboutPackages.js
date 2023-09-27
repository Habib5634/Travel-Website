import React from 'react'
import aboutpkg1 from "../../Assets/Aboutpkg1.png";
import aboutpkg2 from "../../Assets/Aboutpkg2.png";

import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
const AboutPackages = () => {
  return (
    <>
      <div className="relative h-[60vh] mt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${aboutpkg1})` }}
        ></div>

        <div className="flex items-center justify-center w-full h-full relative z-10 " >
          <div className="w-3/4 h-3/4 bg-white flex flex-col justify-between p-8 py-20 bg-cover bg-center" style={{ backgroundImage: `url(${aboutpkg2})` }}>
            <div className=''><h1 className="text-4xl md:text-6xl font-semibold text-white mb-4 ">Thailand Packages</h1>
            <h1 className="text-4xl md:text-6xl font-semibold text-black mb-4 ">From $999</h1>
            </div>
            
            <button className="bg-gradient-to-r from-[#4E1E6C] via-[#8D51D9] to-[#E38C25] transition-colors duration-700 hover:bg-gradient-to-r hover:from-[#E38C25] hover:via-[#cd14d0] hover:to-[#4E1E6C] fnt rounded-full w-fit text-white font-bold py-2 px-4 text-xl md:text-2xl">
              Explore More...
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutPackages

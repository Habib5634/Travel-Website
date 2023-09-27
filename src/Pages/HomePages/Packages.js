import React from "react";
import packagebg from "../../Assets/pckgbg.png";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const Packages = () => {
  return (
    <>
      <div className="relative h-fit py-10 mt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${packagebg})` }}
        ></div>

        <div className="flex items-center justify-center w-full h-full relative z-10">
          <div className="w-3/4 bg-white p-8 text-center">
            <h1 className="text-2xl sm:text-3xl md:text-5xl  font-semibold text-black mb-4  font-serif">MALDIVES DELUX PACKAGES</h1>
            <div className="flex justify-center text-[#E38C25] mb-4">
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill /> <BsStar />
            </div>
            <p className="text-center mb-8 fnt">
              Don't miss the opportunity to experience the magic of the Maldives
              with our carefully crafted package. Whether you're celebrating a
              special occasion or simply seeking a tranquil getaway, our Maldives
              package promises to create memories that will last a lifetime.
              Contact us today to book your journey to paradise!
            </p>
            <button className="bg-gradient-to-r from-[#4E1E6C] via-[#8D51D9] to-[#E38C25] transition-colors duration-700 hover:bg-gradient-to-r hover:from-[#E38C25] hover:via-[#cd14d0] hover:to-[#4E1E6C] fnt rounded-full w-5fit text-white font-bold py-2 px-4 text-xl">
              See More...
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Packages;

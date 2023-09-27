import React from 'react'
import client1 from '../../Assets/client1.png'
import client2 from '../../Assets/client2.png'
import client3 from '../../Assets/client3.png'
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const OurClient = () => {
    const cardData = [
        {
          bgImage: client1,
          name: "Best Holidays Ever",
          desc: "Picture-perfect moments, heart warming memories, and pure bliss – these are the words that define my best holiday ever. From the very start to the very end, every moment of this extraordinary journey has been nothing short of magical.",
         
        },
        {
            bgImage: client2,
            name: "Best Holidays Ever",
            desc: "Picture-perfect moments, heart warming memories, and pure bliss – these are the words that define my best holiday ever. From the very start to the very end, every moment of this extraordinary journey has been nothing short of magical.",
           
          },
          {
            bgImage: client3,
            name: "Best Holidays Ever",
            desc: "Picture-perfect moments, heart warming memories, and pure bliss – these are the words that define my best holiday ever. From the very start to the very end, every moment of this extraordinary journey has been nothing short of magical.",
           
          },
        // Add more card data objects as needed
      ];


   
  return (
    <>
    <h1 className="text-6xl font-semibold text-black my-10 fnt text-center">What Our Client Say About Us</h1>
<div className="flex flex-wrap justify-center mt-20 mb-10  p-10">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="w-full md:w-5/12 lg:w-1/4 self-center bg-cover bg-center mr-8   relative"
            style={{
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "600px", // Set the desired height here
              backgroundImage: `url(${card.bgImage})`,
              marginBottom: "2rem",
            }}
          >
            <div className="absolute inset-0 flex flex-col justify-end items-center  bg-black bg-opacity-50">
              
              <div className="flex flex-col bg-[#9D67E2] bg-opacity-40 p-4 justify-center">
                <h2 className="text-3xl fnt font-semibold mb-2">{card.name}</h2>
                <h2 className="text-xl  mb-2 mt-4 text-white fnt">{card.desc}</h2>
               
              </div>

              
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default OurClient
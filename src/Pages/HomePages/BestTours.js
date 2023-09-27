import React from 'react'
import bst1 from '../../Assets/bst1.png'
import bst2 from '../../Assets/bst2.png'
import bst3 from '../../Assets/bst3.png'
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
const BestTours = () => {
    const cardData = [
        {
          bgImage: bst1,
          location: "Greece",
          date: "From 1st Oct to 1st Nov",
          price: "From $1420",
          rating: [true, true, true, true, false], // Assuming you want to display 4.5 stars
        },
        {
            bgImage: bst2,
            location: "Scotland",
            date: "From 1st Oct to 1st Nov",
            price: "From $1420",
            rating: [true, true, true, true, false], // Assuming you want to display 4.5 stars
          },
          {
            bgImage: bst3,
            location: "Thailand",
            date: "From 1st Oct to 1st Nov",
            price: "From $1420",
            rating: [true, true, true, true, false], // Assuming you want to display 4.5 stars
          },
        // Add more card data objects as needed
      ];


    const cardStyle = {
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "600px", // Set the desired height here
    };
    return (
        <>
            <div className="flex flex-col justify-center items-center w-full my-12 ">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center fnt mb-4">We Have The Best Tours</h1>
                <p className="mx-4 md:w-3/4 lg:w-1/2 text-xl text-center fnt text-[#E3A45A]">
                    Our team of experienced travel enthusiasts meticulously designs each tour,
                    ensuring that every moment is filled with excitement and wonder. We've
                    scoured the globe to curate a selection of destinations that offer
                    breathtaking landscapes, rich cultural experiences, and thrilling
                    adventures.
                </p>
            </div>


            <div className="flex flex-wrap justify-center w-full p-2 mt-20 mb-10   ">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="w-full sm:w-5/12 lg:w-3/12 bg-cover mx-2 lg:mx-6 px-2 bg-center relative mb-2"
            style={{
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "600px", // Set the desired height here
              backgroundImage: `url(${card.bgImage})`,
              
            }}
          >
            <div className="absolute inset-0 flex flex-col justify-between items-center text-white bg-black bg-opacity-50">
              <div className="mt-8 text-center w-3/4 ">
                <h1 className="text-xl font-bold w-full mb-2 p-2 rounded-full bg-[#E38C25] hover:bg-[#cd14d0] transition-colors duration-700">
                  {card.date}
                </h1>
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="text-6xl fnt font-semibold mb-2">{card.location}</h2>
                <h2 className="text-2xl font-bold mb-2 mt-4 fnt">{card.price}</h2>
                <div className="flex text-[#E38C25]">
                  {card.rating.map((filled, index) =>
                    filled ? <BsStarFill key={index} /> : <BsStarHalf key={index} />
                  )}
                </div>
              </div>

              <div className="mb-10">
                <button className="bg-gradient-to-r from-[#4E1E6C] via-[#8D51D9] to-[#E38C25] transition-colors duration-700 hover:bg-gradient-to-r hover:from-[#E38C25] hover:via-[#cd14d0] hover:to-[#4E1E6C] fnt rounded-full w-52 text-white font-bold py-2 px-4 text-xl">
                  See More...
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>


        </>
    )
}

export default BestTours

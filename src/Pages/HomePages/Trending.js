import React from 'react'
import trnd1 from '../../Assets/trnd1.png'
import trnd2 from '../../Assets/trnd2.png'
import trnd3 from '../../Assets/trnd3.png'
import trnd4 from '../../Assets/trnd4.png'
import trnd5 from '../../Assets/trnd5.png'
import trnd6 from '../../Assets/trnd6.png'
import { BsStarFill, BsStarHalf } from "react-icons/bs";

const Trending = () => {
    const cardData = [
        {
          imgSrc: trnd1,
          imgAlt: "Image 1",
       
          title: "GRAND HOTEL",
          subTitle: "$180",
          rating: [true, true, true, true, false], // Assuming you want to display 4.5 stars
         city:"SPAIN",
        },
        {
          imgSrc: trnd2,
          imgAlt: "Image 2",
        
          title: "MARS HOTEL",
          subTitle: "$180",
          rating: [true, true, true, true, true], // Assuming you want to display 5 stars
         city:"SPAIN",
        },
        {
            imgSrc: trnd3,
            imgAlt: "Image 2",
            
            title: "QUEEN HOTEL",
            subTitle: "$180",
            rating: [true, true, true, true, true], // Assuming you want to display 5 stars
           city:"SPAIN",
          },
          {
            imgSrc: trnd4,
            imgAlt: "Image 2",
          
            title: "TURKEY HILLS",
            subTitle: "$180",
            rating: [true, true, true, true, false], // Assuming you want to display 5 stars
           city:"SPAIN",
          },
          {
            imgSrc: trnd4,
            imgAlt: "Image 2",
            
            title: "QUEEN HOTEL",
            subTitle: "$180",
            rating: [true, true, true, false, false], // Assuming you want to display 5 stars
           city:"SPAIN",
          },
          {
            imgSrc: trnd4,
            imgAlt: "Image 2",
         
            title: "$90",
            subTitle: "$180",
            rating: [true, true, true, true, true], // Assuming you want to display 5 stars
           city:"SPAIN",
          },
      ];
  return (
    <>
    <h1 className="text-6xl font-semibold text-black my-10 fnt text-center">Trending Now </h1>
   <div className="flex flex-wrap justify-center mt-10  w-full px-3 md:px-8">
  {cardData.map((card, index) => (
    <div key={index} className="flex flex-row  w-full md:w-1/2">
     <div className=''>
      <img
        src={card.imgSrc}
        alt={card.imgAlt}
        className="w-48 h-48 object-cover mb-6 mr-0"
      />
      </div>
      <div className='text-center w-1/2'>
        <h2 className="text-2xl font-bold mb-1">{card.title}</h2>
        <h3 className="text-xl font-semibold mb-2 fnt"><span className=' text-[#E38C25]'>From</span>{card.subTitle}</h3>
        <div className="flex justify-center mb-2 text-[#E38C25]">
          {card.rating.map((filled, index) =>
            filled ? (
              <BsStarFill key={index} />
            ) : (
              <BsStarHalf key={index} />
            )
          )}
        </div>
        <p className="mb-4 text-[#E64FD7] text-2xl">{card.city}</p>
      </div>
    </div>
  ))}
</div>


      
    </>
  )
}

export default Trending

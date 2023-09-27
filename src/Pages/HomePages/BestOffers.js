import React from 'react'
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import off1 from '../../Assets/off1.png'
import off2 from '../../Assets/off2.png'
import off3 from '../../Assets/off3.png'
import off4 from '../../Assets/off4.png'

const BestOffers = () => {
    const cardData = [
        {
          imgSrc: off1,
          imgAlt: "Image 1",
          topText: "GRAND CASTLE",
          title: "$60",
          subTitle: "Per Night",
          rating: [true, true, true, true, false], // Assuming you want to display 4.5 stars
          description: "Prepare to be transported to a bygone era of opulence, chivalry, and architectural splendor with our Grand Castle Tour. This extraordinary journey takes you on a captivating exploration of some of the world's most magnificent and historically significant castles, offering a glimpse into the past while indulging in luxury and grandeur.",
        },
        {
          imgSrc: off2,
          imgAlt: "Image 2",
          topText: "TURKEY HILLS",
          title: "$70",
          subTitle: "Per Night",
          rating: [true, true, true, true, true], // Assuming you want to display 5 stars
          description: "Prepare to be transported to a bygone era of opulence, chivalry, and architectural splendor with our Grand Castle Tour. This extraordinary journey takes you on a captivating exploration of some of the world's most magnificent and historically significant castles, offering a glimpse into the past while indulging in luxury and grandeur.",
        },
        {
            imgSrc: off3,
            imgAlt: "Image 2",
            topText: "TURKEY HILLS",
            title: "$80",
            subTitle: "Per Night",
            rating: [true, true, true, true, true], // Assuming you want to display 5 stars
            description: "Prepare to be transported to a bygone era of opulence, chivalry, and architectural splendor with our Grand Castle Tour. This extraordinary journey takes you on a captivating exploration of some of the world's most magnificent and historically significant castles, offering a glimpse into the past while indulging in luxury and grandeur.",
          },
          {
            imgSrc: off4,
            imgAlt: "Image 2",
            topText: "TRAVEL LIGHT",
            title: "$90",
            subTitle: "Per Night",
            rating: [true, true, true, true, true], // Assuming you want to display 5 stars
            description: "Prepare to be transported to a bygone era of opulence, chivalry, and architectural splendor with our Grand Castle Tour. This extraordinary journey takes you on a captivating exploration of some of the world's most magnificent and historically significant castles, offering a glimpse into the past while indulging in luxury and grandeur.",
          },
      ];
  return (
    <>
      <h1 className="text-6xl font-semibold text-black my-10 fnt text-center">The Best Offers With Rooms</h1>
    <div className="flex flex-wrap justify-center  my-20 w-full ">
  {cardData.map((card, index) => (
    <div key={index} className="text-center relative flex justify-center items-center flex-wrap w-full lg:w-1/2">
      <h1 className="text-2xl font-bold mb-2 absolute  bottom-72 sm:bottom-20 left-2 bg-[#E38C25]  text-white">
        {card.topText}
      </h1>
      <img
        src={card.imgSrc}
        alt={card.imgAlt}
        className="w-full h-72 md:h-76 sm:w-1/2 object-center mb-4 p-2 "
      />
      <div className="text-black px-2 text-left w-full sm:w-1/2">
        <div className='flex '>
        <h2 className="text-4xl fnt font-bold mb-1">{card.title}</h2>
        <h3 className="text-2xl font-semibold mb-2 text-[#E38C25]">{card.subTitle}</h3>
        </div>
        <div className="flex justify-center mb-2 text-[#E38C25]">
          {card.rating.map((filled, index) =>
            filled ? (
              <BsStarFill key={index} />
            ) : (
              <BsStarHalf key={index} />
            )
          )}
        </div>
        <p className="mb-4 fnt text-[#4E1E6C]">{card.description}</p>
      </div>
    </div>
  ))}
</div>
</>

  )
}

export default BestOffers

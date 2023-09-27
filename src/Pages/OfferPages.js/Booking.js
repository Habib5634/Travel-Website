import React, { useState } from 'react'
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import off1 from '../../Assets/Book1.png'
import off2 from '../../Assets/book2.png'
import off3 from '../../Assets/book3.png'
import off4 from '../../Assets/book4.png'
import {BsFillSignpostFill,BsBicycle} from 'react-icons/bs'
import {GiFishing,GiGlobe} from 'react-icons/gi'


const Booking = () => {
    // Define state variables for the selected values of the dropdowns
    const [selectedOption1, setSelectedOption1] = useState('');
    const [selectedOption2, setSelectedOption2] = useState('');

    // Handler function to update selected value for the first dropdown
    const handleDropdownChange1 = (event) => {
        setSelectedOption1(event.target.value);
    }

    // Handler function to update selected value for the second dropdown
    const handleDropdownChange2 = (event) => {
        setSelectedOption2(event.target.value);
    }






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
            topText: "MESSETURM",
            title: "$70",
            subTitle: "Per Night",
            rating: [true, true, true, true, true], // Assuming you want to display 5 stars
            description: "Prepare to be transported to a bygone era of opulence, chivalry, and architectural splendor with our Grand Castle Tour. This extraordinary journey takes you on a captivating exploration of some of the world's most magnificent and historically significant castles, offering a glimpse into the past while indulging in luxury and grandeur.",
        },
        {
            imgSrc: off3,
            imgAlt: "Image 2",
            topText: "BURJ KHALIFA",
            title: "$80",
            subTitle: "Per Night",
            rating: [true, true, true, true, true], // Assuming you want to display 5 stars
            description: "Prepare to be transported to a bygone era of opulence, chivalry, and architectural splendor with our Grand Castle Tour. This extraordinary journey takes you on a captivating exploration of some of the world's most magnificent and historically significant castles, offering a glimpse into the past while indulging in luxury and grandeur.",
        },
        {
            imgSrc: off4,
            imgAlt: "Image 2",
            topText: "GRAND WALL OF CHINA",
            title: "$90",
            subTitle: "Per Night",
            rating: [true, true, true, true, true], // Assuming you want to display 5 stars
            description: "Prepare to be transported to a bygone era of opulence, chivalry, and architectural splendor with our Grand Castle Tour. This extraordinary journey takes you on a captivating exploration of some of the world's most magnificent and historically significant castles, offering a glimpse into the past while indulging in luxury and grandeur.",
        },
    ];
    return (
        <>
            <div className='w-full flex flex-wrap justify-center items-center my-12 px-4'>
                <div className=' w-11/12 md:w-1/2 flex justify-center items-center  '>

                    <select
                        className='py-3 px-10 mb-4 text-2xl font-bold border border-[#E38C25]'
                        id="dropdown1"
                        value={selectedOption1}
                        onChange={handleDropdownChange1}
                        style={{ borderWidth: '3px' }}
                    >
                        <option value="">Price</option>
                        <option value="option1" className='text-xl'>Option 1</option>
                        <option value="option2" className='text-xl'>Option 2</option>
                        <option value="option3" className='text-xl'>Option 3</option>
                    </select>




                </div>
                <div className='w-11/12 md:w-1/2 flex justify-center items-center space-x-20'>



                    <select
                        className='py-3 px-10 md:px-20 text-2xl font-bold border border-[#E38C25]'
                        id="dropdown1"
                        value={selectedOption2}
                        onChange={handleDropdownChange2}
                        style={{ borderWidth: '3px' }}
                    >
                        <option value="">Location</option>
                        <option value="option1" className='text-xl'>Option 1</option>
                        <option value="option2" className='text-xl'>Option 2</option>
                        <option value="option3" className='text-xl'>Option 3</option>
                    </select>
                </div>
            </div>




            <div className="flex flex-wrap justify-center  my-20 w-full h-fit px-8">
                {cardData.map((card, index) => (
                    <div key={index} className="text-center relative flex flex-wrap justify-center w-full">
                        <div className='w-full  md:w-1/2 p-4'>

                        <h1 className="text-xl font-bold mb-2 absolute ml-4 top-52 md:bottom-10 left-0 h-fit bg-[#E38C25]  text-white">
                            {card.topText}
                        </h1>
                        <img
                            src={card.imgSrc}
                            alt={card.imgAlt}
                            className="  object-cover mb-4 h-full  "
                        />
                        </div>

                        <div className="text-black px-2 text-left w-full md:w-1/2">
                            <div className='flex flex-wrap w-full justify-center'>
                                <div className='w-full md:w-1/2'>
                                    <div className='flex  w-full'>
                                        <h2 className="text-4xl fnt font-bold mb-1 ">{card.title}</h2>
                                        <h3 className="text-2xl font-semibold mb-2 text-[#E38C25]">{card.subTitle}</h3>
                                    </div>
                                    <div className="flex justify-start mb-2 text-[#E38C25]">
                                        {card.rating.map((filled, index) =>
                                            filled ? (
                                                <BsStarFill key={index} />
                                            ) : (
                                                <BsStarHalf key={index} />
                                            )
                                        )}
                                    </div>
                                </div>
                                <div className='w-full md:w-1/2 flex md:justify-end items-center'>
                                    <h1 className='flex flex-col'>
                                        <span className='text-sm md:text-3xl  md:leading-loose md:font-bold'>Very Good</span>
                                        <span className='text-xl mt-2 text-gray-600'>100 Review</span>
                                    </h1>
                                    <h1 className='p-3 text-3xl font-bold text-white rounded-xl bg-[#E38C25]'>8.1</h1>
                                </div>
                            </div>
                            <div>
                                
                                <p className="mb-4 fnt text-[#4E1E6C]">{card.description}</p>
                                <div className='flex text-4xl text-gray-600 space-x-3'>
                                   
                                <BsBicycle/>
                                    <BsFillSignpostFill/>
                                    <GiFishing/>
                                    <GiGlobe/>
                                    

                                </div>
                                <button className='bg-[#4E1E6C] hover:bg-[#ab3d7c] hover:text-[#4E1E6C] transition-colors duration-700 w-fit p-2 px-8 fnt mb-4 text-white text-xl rounded-full py-2 mt-6' >Book...</button>
                                
                                </div>

                        </div>
                    </div>
                ))}
            </div>

        </>
    )
}

export default Booking

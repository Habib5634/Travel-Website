import React, { useState } from 'react'
import homebg from '../../Assets/homebg.png'
import '../../fnt.css'

const OfferHome = () => {
  const [checkboxValues, setCheckboxValues] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false,
    checkbox5: false
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckboxValues({
      ...checkboxValues,
      [name]: checked
    });
  };
  return (
    <>

      <div className="relative h-[80vh]"> 
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${homebg})` }}
        ></div>

        {/* Content */}
        <div className="flex flex-col items-center justify-center h-full  relative z-10">
          <h1 className="text-6xl md:text-7xl lg:text-9xl text-white font-bold mb-28">OFFERS</h1>

          <button className="bg-gradient-to-r from-[#4E1E6C] via-[#cd14d0] to-[#E38C25] rounded-full transition-colors duration-700 hover:bg-gradient-to-r hover:from-[#E38C25] hover:via-[#cd14d0] hover:to-[#4E1E6C] text-2xl text-white fnt py-2 px-4">Explore Now...</button>
        </div>

        {/* Div at Bottom */}
        <div className="flex justify-between absolute bottom-0 left-0 text-sm sm:text-lg md:text-xl lg:text-2xl font-bold right-0 mx-2 sm:mx-8 lg:mx-20 z-10">
          <div className="w-1/3 h-20 sm:h-24 md:h-28 lg:h-32 bg-white transition-colors duration-700 hover:bg-[#E38C25] hover:text-white flex justify-between rounded-tl-full">
            <div className="flex justify-center items-center w-10/12">
              <h3>Hotels</h3>
            </div>
            <div className="w-2/12 h-full bg-[#8D51D9]"></div>
          </div>
          <div className="w-1/3 bg-white transition-colors duration-700 hover:bg-[#E38C25] hover:text-white p-4 flex justify-center items-center">
            <h3>Cities</h3>
          </div>
          <div className="w-1/3 bg-white transition-colors duration-700 hover:bg-[#E38C25] hover:text-white flex justify-between rounded-tr-full">
            <div className="w-2/12 h-full bg-[#8D51D9]"></div>
            <div className="flex justify-center items-center w-10/12">
              <h3>Destinations</h3>
            </div>
          </div>

        </div>
      </div>

      <div className='flex flex-wrap justify-center items-center bg-gradient-to-r from-[#E38C25] via-[#cd14d0] to-[#4E1E6C] w-full h-fit py-10'>

        <div className='flex flex-col w-1/2 md:w-1/3 lg:w-1/5 px-5'>
          <label htmlFor="checkIn" className='mb-3 text-white font-bold'>DESTINATION</label>
          <input type="text" id="checkIn" name="checkIn" className='p-1 font-bold mb-4' />
        </div>
        <div className='flex flex-col w-1/2 md:w-1/3 lg:w-1/5 px-5'>
          <label htmlFor="checkIn" className='mb-3 text-white font-bold'>CHECK IN</label>
          <input type="date" id="checkIn" name="checkIn" className='p-1 font-bold mb-4' />
        </div>
        <div className='flex flex-col w-1/2 md:w-1/3 lg:w-1/5 px-5'>
          <label htmlFor="checkOut" className='mb-3 text-white font-bold'>CHECK OUT</label>
          <input type="date" id="checkOut" name="checkOut" className='p-1 font-bold mb-4' />
        </div>
        <div className='flex flex-col w-1/2 md:w-1/3 lg:w-1/5 px-5'>
          <label htmlFor="adults" className='mb-3 text-white font-bold'>ADULTS</label>
          <input type="number" id="adults" name="adults" min="1" className='p-1 font-bold mb-4' />
        </div>
        <div className='flex flex-col w-1/2 md:w-1/3 lg:w-1/5 px-5'>
          <label htmlFor="children" className='mb-3 text-white font-bold'>CHILDREN</label>
          <input type="number" id="children" name="children" min="0" className='p-1 font-bold mb-4' />
        </div>




        <div className='flex flex-col w-1/2 md:w-1/3 lg:w-1/5 px-5 mt-5' >
          <label className="flex items-center">
            <input
              className='p-1 border-black'
              type="checkbox"
              name="checkbox1"
              checked={checkboxValues.checkbox1}
              onChange={handleCheckboxChange}
              style={{ transform: 'scale(1.5)' }}
            />
            <span className="ml-2 text-lg lg:text-2xl text-white">Car Parking</span>
          </label>
        </div>
        <div className='flex flex-col w-1/2 md:w-1/3 lg:w-1/5 px-5 mt-5'>
          <label className="flex items-center">
            <input
              className='p-1 border-black'
              type="checkbox"
              name="checkbox1"
              checked={checkboxValues.checkbox1}
              onChange={handleCheckboxChange}
              style={{ transform: 'scale(1.5)' }}
            />
            <span className="ml-2 text-lg lg:text-2xl text-white">Wireless Internet</span>
          </label>
        </div>

        <div className='flex flex-col w-1/2 md:w-1/3 lg:w-1/5 px-5 mt-5'>
          <label className="flex items-center">
            <input
              className='p-1 border-black'
              type="checkbox"
              name="checkbox1"
              checked={checkboxValues.checkbox1}
              onChange={handleCheckboxChange}
              style={{ transform: 'scale(1.5)' }}
            />
            <span className="ml-2 text-lg  lg:text-2xl text-white">Reservations</span>
          </label>
        </div>
        <div className='flex flex-col w-1/2 md:w-1/3 lg:w-1/5 px-5 mt-5'>
          <label className="flex items-center">
            <input
              className='p-1 border-black'
              type="checkbox"
              name="checkbox1"
              checked={checkboxValues.checkbox1}
              onChange={handleCheckboxChange}
              style={{ transform: 'scale(1.5)' }}
            />
            <span className="ml-2 text-lg lg:text-2xl text-white">Private Parking</span>
          </label>
        </div>
        <div className='flex flex-col w-1/2 md:w-1/3 lg:w-1/5 px-5 mt-5'>
          <label className="flex items-center">
            <input
              className='p-1 border-black'
              type="checkbox"
              name="checkbox1"
              checked={checkboxValues.checkbox1}
              onChange={handleCheckboxChange}
              style={{ transform: 'scale(1.5)' }}
            />
            <span className="ml-2 text-lg lg:text-2xl text-white">Pools</span>
          </label>
        </div>

        <div className='flex flex-col fnt w-1/2 md:w-1/3 lg:w-1/5 px-5'>
          <button className='bg-[#E38C25] hover:bg-[#cd14d0] transition-colors duration-700  text-white text-xl rounded-full py-2 mt-6' >Search..</button>
        </div>



      </div>





    </>


  )
}

export default OfferHome

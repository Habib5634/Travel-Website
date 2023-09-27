import React, { useState } from 'react'
import get1 from '../../Assets/Get1.png'
const AboutNewsLetter = () => {
    const [formData, setFormData] = useState({
        
        email: '',
        
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Add code here to handle form submission
        console.log(formData);
      };
    
  return (
    <>
    <h1 className="text-4xl md:text-6xl font-semibold text-black my-10 fnt text-center">Get In Touch</h1>
  <div className='flex flex-wrap justify-center mb-10'>
      <div className='w-full md:w-5/12 flex justify-center md:justify-end'>
          <img src={get1} alt='get' className=' mb-4' />
      </div>
      <div className='w-full md:w-5/12 px-4 md:pt-6 md:pr-6 md:pb-8 md:-ml-10'>
     
    <form className=" p-8 h-full  shadow-lg bg-gradient-to-r from-[#E38C25] via-[#cd14d0] to-[#4E1E6C]">
      
      
      
        <label className="block text-white text-2xl font-bold mb-16 ">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="border-b-2 border-white bg-transparent w-full py-2 mb-16"
          required
        />
    
    
     
      
        
      
      <div className="text-center flex flex-wrap items-center px-1 justify-between w-full ">
        <div  className='px-2 w-1/2'>
        <button
          type="submit"
          onClick={handleSubmit}
          className="bg-white hover:bg-[#E38C25] hover:text-white transition-colors duration-700 text-black font-bold text-sm sm:text-lg py-2 w-full  px-1 rounded-full "
        >
          Subscribe...
        </button>
        </div>
        <div className='px-2 w-1/2'>
        <button

          
          className="bg-white hover:bg-[#4E1E6C] hover:text-white transition-colors duration-700 text-black font-bold text-sm sm:text-lg py-2 w-full   px-1 rounded-full"
        >
          Submit...
        </button>
        </div>
      </div>
    </form>
  </div>
          
      
  </div>
  </>
  )
}

export default AboutNewsLetter

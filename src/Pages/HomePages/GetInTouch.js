import React, { useState } from 'react'
import get1 from '../../Assets/Get1.png'
const GetInTouch = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
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
       
      <form className=" p-8  shadow-lg bg-gradient-to-r from-[#E38C25] via-[#cd14d0] to-[#4E1E6C]">
        
        <div className="mb-4 flex w-full ">
            <div className='w-1/2 pr-2'>
          <label className="block text-white text-lg font-bold ">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border-b-2 border-white bg-transparent w-full py-2"
            required
          />
          </div>
          <div className='w-1/2 pl-2'>
          <label className="block text-white text-lg font-bold ">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border-b-2 border-white bg-transparent w-full py-2"
            required
          />
          </div>
        </div>
        
            
      
      
          <label className="block text-white text-lg font-bold ">Subject</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="border-b-2 border-white bg-transparent w-full py-2 mb-2"
            required
          />
       
        
          <label className="block text-white text-lg font-bold ">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="border-b-2 border-white bg-transparent w-full py-2 mb-2"
            required
          />
        
        <div className="text-center">
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-white hover:bg-[#4E1E6C] hover:text-white fnt text-black font-bold text-lg py-2 px-4 rounded-full"
          >
            Send Message...
          </button>
        </div>
      </form>
    </div>
            
        
    </div>
    </>
  )
}

export default GetInTouch
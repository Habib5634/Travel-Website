import React, { useState } from 'react'
import register from '../../Assets/register.png'
import {BsFacebook,BsTwitter} from 'react-icons/bs'



const Rejister = () => {

    const [formData, setFormData] = useState({
        name: '',
        password: '',
        checkbox1:""
        
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
    <div className='flex w-full h-[100vh] justify-center relative p-12 bg-gradient-to-r from-[#4E1E6C] via-[#cd14d0] to-[#E38C25]'>
        <div className='md:w-1/2 hidden md:flex '>
            <img src={register} alt='register' className='h-[90vh]' />
        </div>
        <div className='md:w-1/2 '>
        <form className=" py-12 md:px-20 px-4   shadow-lg bg-white flex flex-col justify-center h-[90vh]">
            <h1 className='text-center text-4xl font-bold mb-2'>WHERE NEXT?</h1>
            <h2 className='text-center text-2xl mb-5 font-bold'>You Travel</h2>         
         <h3 className='text-xl fnt text-black font-semibold my-7 text-center'>Please Register Your Account</h3>
             
           
           <input
             type="text"
             name="name"
             value={formData.name}
             onChange={handleChange}
             style={{borderWidth: '3px'}}
             placeholder='Username'
             className="border-[#4E1E6C] border w-full mb-4 py-2 self-center"
             required
           />
          
          
           
           <input
             type="password"
             name="password"
             value={formData.password}
             onChange={handleChange}
             style={{borderWidth: '3px'}}
             placeholder='Password'
             className="border-[#4E1E6C] border w-full py-2 self-center"
             required
           />
           <label className="flex items-center justify-between w-full self-center mt-4">
    <input
      className='p-1 mt-1 mr-1 border-[#4E1E6C]'
      type="checkbox"
      name="checkbox1"
      checked={formData.checkbox1}
      onChange={handleChange}
      style={{ transform: 'scale(1.5)',borderWidth:"3px" }}
    />
    <span className=" font-bold md:text-xl text-[#4E1E6C]">Remember me?</span>
    <span className="ml-14 font-bold md:text-xl text-[#4E1E6C] self-left">Forgot Password?</span>
  </label>  
          
     
         
         
           <button
             type="submit"
             onClick={handleSubmit}
             className="bg-gradient-to-r from-[#4E1E6C] via-[#cd14d0] to-[#E38C25] fnt w-full  text-white font-semibold text-xl py-2 px-4 mt-10 "
           >
             Sign Up...
           </button>
       

         <div className='flex justify-center items-center w-full mt-4'>
            <hr className='border border-[#4E1E6C] from-[#4E1E6C] via-[#cd14d0] to-[#E38C25] w-5/12' style={{borderWidth: '2px'}}/>
            <p className='fnt text-xl text-center w-2/12'>Or</p>
            <hr className='border border-[#E38C25] w-5/12' style={{borderWidth: '2px'}}/>
         </div>





<button
  type="submit"
  onClick={handleSubmit}
  className="bg-gradient-to-r from-[#4E1E6C] via-[#cd14d0] to-[#E38C25] fnt w-full text-white font-semibold  md:text-xl py-2 px-4 mt-10 flex items-center justify-center"
>
  <BsFacebook className='mr-2' />
  Continue With Facebook...
</button>

<button
  type="submit"
  onClick={handleSubmit}
  className="bg-gradient-to-r from-[#4E1E6C] via-[#cd14d0] to-[#E38C25] fnt w-full text-white font-semibold md:text-xl py-2 px-4 mt-4 flex items-center justify-center"
>
  <BsTwitter className='mr-2' />
  Continue With Facebook...
</button>
       </form>
        </div>
    </div>
    
    </>
  )
}

export default Rejister
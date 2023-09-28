import React, { useState } from 'react'
import register from '../../Assets/register.png'
import { BsFacebook, BsTwitter } from 'react-icons/bs'
import {  handleRegister } from '../../services/authService'
import { Link } from 'react-router-dom'


const Rejister = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [country, setCountry] = useState('')
  const [name, setName] = useState('')

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value
  //   });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add code here to handle form submission
    console.log();
    handleRegister(e, name, email, password, country)
  };
  return (
    <>
      <div className='flex w-full h-fit justify-center relative p-0 md:p-12 bg-gradient-to-r from-[#4E1E6C] via-[#cd14d0] to-[#E38C25]'>
        <div className='md:w-1/2 hidden md:flex '>
          <img src={register} alt='register' className='h-[90vh]' />
        </div>
        <div className='md:w-1/2 '>
          <form className=" py-12 md:px-20 px-4   shadow-lg bg-white flex flex-col justify-center h-fit">
            <h1 className='text-center text-4xl font-bold mb-2'>WHERE NEXT?</h1>
            <h2 className='text-center text-2xl mb-5 font-bold'>You Travel</h2>
            <h3 className='text-xl fnt text-black font-semibold my-7 text-center'>Please Register Your Account</h3>


            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ borderWidth: '3px' }}
              placeholder='Username'
              className="border-[#4E1E6C] pl-2 border w-full mb-4 py-2 self-center"
              required
            />
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ borderWidth: '3px' }}
              placeholder='Write Your Email'
              className="border-[#4E1E6C] pl-2 border w-full mb-4 py-2 self-center"
              required
            />



            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ borderWidth: '3px' }}
              placeholder='Password'
              className="border-[#4E1E6C] pl-2 border mb-4 w-full py-2 self-center"
              required
            />

            <input
              type="country"
              name="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              style={{ borderWidth: '3px' }}
              placeholder='Country'
              className="border-[#4E1E6C] pl-2 border w-full mb-4 py-2 self-center"
              required
            />








            <div className="flex items-center justify-between  space-x-3">
              <div className='flex'>
              <input
                id="acceptTos"
                type="checkbox"
                className="h-5 w-5 rounded border-2 border-text bg-transparent text-primary focus:ring-primary focus:ring-offset-0 checked:focus:ring-text disabled:opacity-30"
              />
              <label
                htmlFor="acceptTos"
                className="block text-sm font-semibold text-heading"
              >
                Remember me?
              </label>
              </div>
              <div>
                <Link to='/login'>Already Registered...</Link>
              </div>

            </div>




            <button
              type="submit"
              onClick={handleSubmit}
              className="bg-gradient-to-r from-[#4E1E6C] via-[#cd14d0] to-[#E38C25] fnt w-full  text-white font-semibold text-xl py-2 px-4 mt-10 "
            >
              Sign Up...
            </button>


            <div className='flex justify-center items-center w-full mt-4'>
              <hr className='border border-[#4E1E6C] from-[#4E1E6C] via-[#cd14d0] to-[#E38C25] w-5/12' style={{ borderWidth: '2px' }} />
              <p className='fnt text-xl text-center w-2/12'>Or</p>
              <hr className='border border-[#E38C25] w-5/12' style={{ borderWidth: '2px' }} />
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
import React, { useState } from "react";

import { AiOutlineHome, AiOutlineInfoCircle } from 'react-icons/ai';
import { BsGift, BsNewspaper, BsPerson } from 'react-icons/bs';

import { FiMenu, FiX } from "react-icons/fi";
import logo from "../../Assets/logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const handleToggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  return (
  <>
  <div className="bg-[#4E1E6C]  flex text-white justify-between items-center p-4">
  <p className=" text-lg">+912-234-35454</p>
  <div className="flex">
    <Link to='/login'><button className="mr-2">Login</button></Link>
   <Link to='/register'> <button>Sign Up</button></Link>
  </div>
</div>

    <div className="bg-[#8D51D9] content-center text-indigo-50 h-32 px-5 md:px-4 flex items-center justify-between">
      <header className="flex items-center w-full max-w-6xl mx-auto">
        <div className="flex items-center w-3/4 md:w-2/6">
        <img
            src={logo}
            alt="pngfuel"
            className="mr-3"
          />
          <div className="flex flex-col justify-center text-white">
          <span className="font-serif text-2xl font-bold ">
            WHERE NEXT?
          </span>
          <span className="font-serif text-xl  ">
            You Travel
          </span>

          </div>
          
        </div>

        <ul className="hidden md:flex list-none md:w-4/6 justify-center space-x-5 font-semibold text-lg text-white">
        <Link to='/'>  <li className="p-2 w-fit menu-item cursor-pointer hover:text-white">
          Home
          </li></Link>
          <Link to='/aboutus'>
          <li className="p-2 w-fit  menu-item cursor-pointer hover:text-white">
         About Us
          </li>
          </Link>
          <Link to='/offer'>
          <li className="p-2 w-fit  menu-item cursor-pointer hover:text-white">
           Offer
          </li>
          </Link>
          <Link to='/blog'>
          <li className="p-2  menu-item cursor-pointer hover:text-white">
          News
          </li>
          </Link>
          <Link to='/contact'>
          <li className="p-2  menu-item cursor-pointer hover:text-white">
           Contact
          </li>
          </Link>
          
        </ul>

        

        <div className="flex items-center justify-end w-1/4 md:hidden ml-auto">
          <button className="text-2xl " onClick={handleToggleSidebar}>
            {showSidebar ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </header>

      {/* Sidebar */}
      {showSidebar && (
        <div className="bg-[#4E1E6C] w-64 h-full fixed  z-50 right-0 top-0 shadow-lg transform ${showSidebar ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}">
          <div className=" h-full w-80 p-4 pt-20">
            <ul className="list-none space-y-2 font-semibold text-lg text-white z-50">
             <Link to='/'> <li className="p-2 flex menu-item cursor-pointer hover:text-white">
              <AiOutlineHome className="mt-1 mr-1" /> Home
              </li></Link>
             <Link to='/aboutus'> <li className="p-2 flex menu-item cursor-pointer hover:text-white">
              <AiOutlineInfoCircle className="mt-1 mr-1" /> About Us
              </li>
              </Link>
              <Link to='/offer'>
              <li className="p-2 flex menu-item cursor-pointer hover:text-white">
              <BsGift className="mt-1 mr-1" />  Offer
              </li>
              </Link>
              <Link to='/blog'>
              <li className="p-2 flex menu-item cursor-pointer hover:text-white">
              <BsNewspaper className="mt-1 mr-1" />News
              </li>
              </Link>
              <Link to='/contact'>
              <li className="p-2 flex menu-item cursor-pointer hover:text-white">
              <BsPerson className="mt-1 mr-1" />  Contact
              </li>
              </Link>
            </ul>
            <button
              className="absolute top-4 right-4 text-2xl"
              onClick={handleToggleSidebar}
            >
              <FiX />
            </button>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default Navbar;
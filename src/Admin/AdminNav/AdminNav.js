import React, { useEffect, useRef, useState } from 'react';
import { IoMdNotificationsOutline, IoMoonOutline, IoSearch } from 'react-icons/io';
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { IconContext } from 'react-icons';
import { BsMoon,BsFillChatLeftDotsFill } from 'react-icons/bs'
import { BiBell, BiSearch } from 'react-icons/bi'


const AdminNav = () => {
  
    const profileRef = useRef()
  
    const links = [
        { title: <BsFillChatLeftDotsFill className='mt-2'/>, path: "javascript:void(0)" },
        { title: <BiBell className='mt-2'/>, path: "javascript:void(0)" },
        
    ]

   

    return (
        <nav className=' py-2'>
            <div className=' flex justify-between px-20 pt-4'>
                <div className=''><label
                    htmlFor="search"
                    className="sr-only block text-sm font-semibold text-heading"
                >
                    Search
                </label>
                    <div className="relative flex">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex flex-shrink-0 items-center pl-4 focus-within:z-20">
                            <BiSearch className="h-5 w-5 text-text" />
                        </div>
                        <input
                            id="search"
                            name="search"
                            placeholder="Search"
                            className="block w-full rounded-xl border-2 border-layer-3 bg-muted-1 px-4 py-2.5 pl-11 pr-14 font-semibold text-heading placeholder:text-text/50 focus:border-primary focus:outline-none focus:ring-0 sm:text-sm"
                        />
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex flex-shrink-0 items-center pr-4 focus-within:z-20">
                            <kbd className="rounded-md bg-muted-3 px-2 py-1 font-sans text-sm text-text">
                                ⌘ K
                            </kbd>
                        </div>
                    </div>
                </div>



                <div className='flex decoration-transparent '>

                <ul className='flex space-x-6 mx-4 pt-2 pb-3 text-2xl font-bold' style={{ listStyleType: 'none' }}>
  {links.map((item, idx) => (
    <li key={idx}>
      <a href={item.path} className="block text-gray-700 hover:text-gray-900">
        {item.title}
      </a>
    </li>
  ))}
  
            
            <select className=" w-fit  bg-white border-transparent ">
                <option>Dollar</option>
                <option>Software engineer</option>
                <option>IT manager</option>
                <option>UI / UX designer</option>
            </select>
        
</ul>
                    <div className=" border-t lg:border-none">
                        <div className="">
                            <button ref={profileRef} className="hidden w-10 h-10 outline-none rounded-full ring-offset-2 ring-gray-200 lg:focus:ring-2 lg:block"
                                
                            >
                                <img
                                    src="https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg"
                                    className="w-full h-full rounded-full"
                                />
                            </button>
                        </div>
                       
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default AdminNav
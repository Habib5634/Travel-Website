import React, { useState, useEffect } from 'react';
import { RiMenuLine, RiCloseLine } from 'react-icons/ri';

import Dashboard from '../Dashboard';

import AdminNav from '../AdminNav/AdminNav';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(window.innerWidth > 768);
  const [selectedPage, setSelectedPage] = useState('Home');

  useEffect(() => {
    const handleResize = () => {
      setIsOpen(window.innerWidth > 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (page) => {
    setSelectedPage(page);
    if (window.innerWidth <= 768) {
      setIsOpen(false);
    }
  };

  let content;

  if (selectedPage === 'Home') {
    content = (
      <Dashboard/>
    );
  } else if (selectedPage === 'About') {
    content = (
      <div>
        <h1>About Page Content</h1>
        <p>Content for About page goes here.</p>
      </div>
    );
  } else if (selectedPage === 'Contact') {
    content = (
      <div>
        <h1>Contact Page Content</h1>
        <p>Content for Contact page goes here.</p>
      </div>
    );
  }

  return (
    <div className={`h-screen flex overflow-hidden `}>
      {isOpen && (
        <div className={`w-1/4 bg-white border-r border-gray-200 bg-gradient-to-b from-[#4E1E6C] via-[#cd14d0] to-[#E38C25]`}>
          <div className="p-3">
            <button onClick={toggleSidebar} className="md:hidd text-gray-600">
              <RiCloseLine size={30} />
            </button>
            <div className="flex items-center justify-center h-12">
              <span className="text-xl font-semibold text-gray-800">Logo</span>
            </div>
            <ul className="mt-6">
              <li className="mb-2">
                <button
                  onClick={() => handleLinkClick('Home')}
                  className={`flex items-center ${selectedPage === 'Home' ? 'text-blue-500' : 'text-gray-600'}`}
                >
                  <span className="ml-2">Home</span>
                </button>
              </li>
              <li className="mb-2">
                <button
                  onClick={() => handleLinkClick('About')}
                  className={`flex items-center ${selectedPage === 'About' ? 'text-blue-500' : 'text-gray-600'}`}
                >
                  <span className="ml-2">About</span>
                </button>
              </li>
              <li className="mb-2">
                <button
                  onClick={() => handleLinkClick('Contact')}
                  className={`flex items-center ${selectedPage === 'Contact' ? 'text-blue-500' : 'text-gray-600'}`}
                >
                  <span className="ml-2">Contact</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
      <div className="flex-1 overflow-x-hidden overflow-y-auto p-">
        <AdminNav/>
        {content}
      </div>
      {!isOpen && (
        <button onClick={toggleSidebar} className="md:h fixed top-4 left-4 mt-2   bg-transparent p-2 rounded-full">
          <RiMenuLine size={30} />
        </button>
      )}
    </div>
  );
};

export default Sidebar;

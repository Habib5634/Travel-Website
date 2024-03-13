import React from 'react';
import { FaUsers, FaRegCalendarAlt } from 'react-icons/fa';
import {BsCoin} from 'react-icons/bs'
import {HiUsers} from 'react-icons/hi'
const States = () => {
  const stats = [
    {
      data: "2.8B",
      desc: "Total Earning",
      backgroundColor: "#290D3B",
      icon: <BsCoin />,
    },
    {
      data: "1.5M+",
      desc: "Happy Users",
      backgroundColor: "#290D3B",
      icon: <HiUsers />,
    },
    {
      data: "10K+",
      desc: "Employees",
      backgroundColor: "#290D3B",
      icon: <FaUsers />,
    },
    {
      data: "12K+",
      desc: "New Booking",
      backgroundColor: "#290D3B",
      icon: <FaRegCalendarAlt/>,
    },
  ];

  return (
    <>
      <section className="py-4">
        <div className=" max-w-screen-xl mx-auto  ">
          <div className="mt-12">
            <ul className="flex-wrap gap-x-2 gap-y-10 items-center justify-center space-y-8 sm:space-y-0 flex xl:justify-center">
              {stats.map((item, idx) => (
                <li
                  key={idx}
                 style={{
                     backgroundColor: item.backgroundColor,
                    width: "18rem", // Set fixed width
                    height: "10rem", // Set fixed height
                  }}
                  className="border p-4 flex items-center justify-between"
                >
                  <div className="flex-1">
                    <h4 className="text-4xl text-white font-semibold">
                      {item.data}
                    </h4>
                    <p className="mt-3 text-white    font-medium">{item.desc}</p>
                  </div>
                  <div className="text-6xl text-white">{item.icon}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default States;

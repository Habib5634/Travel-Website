import React from 'react';
import { FaUsers, FaRegCalendarAlt } from 'react-icons/fa';
import {BsCoin} from 'react-icons/bs'
import {HiUsers} from 'react-icons/hi'
const States = () => {
  const stats = [
    {
      data: "2.8B",
      desc: "Total Earning",
      backgroundColor: "#E64FD7",
      icon: <BsCoin />,
    },
    {
      data: "1.5M+",
      desc: "Happy Users",
      backgroundColor: "#4CAF50",
      icon: <HiUsers />,
    },
    {
      data: "10K+",
      desc: "Employees",
      backgroundColor: "#FF5722",
      icon: <FaUsers />,
    },
    {
      data: "12K+",
      desc: "New Booking",
      backgroundColor: "#9C27B0",
      icon: <FaRegCalendarAlt/>,
    },
  ];

  return (
    <>
      <section className="py-4">
        <div className=" max-w-screen-xl mx-auto px-2 md:px-4">
          <div className="mt-12">
            <ul className="flex-wrap gap-x-12 gap-y-10 items-center justify-center space-y-8 sm:space-y-0 sm:flex xl:justify-center">
              {stats.map((item, idx) => (
                <li
                  key={idx}
                  style={{
                    backgroundColor: item.backgroundColor,
                    width: "15rem", // Set fixed width
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

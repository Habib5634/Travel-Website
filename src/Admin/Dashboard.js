import React from 'react';
import States from './States/States';
import LatestBooking from './LatestBooking/LatestBooking';
import LineChart from './LineChart/LineChart';

const Dashboard = () => {
 

  return (
    <>
      <States/>
      <div className='w-full flex'>
        <div className='w-5/12 px-8 bg-[#9747FF]'><LatestBooking/></div>
    <div className='w-7/12'><LineChart/></div>
      </div>
    </>
  );
};

export default Dashboard;

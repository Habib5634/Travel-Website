import React from 'react';
import States from './States/States';
import LatestBooking from './LatestBooking/LatestBooking';
import LineChart from './LineChart/LineChart';
import CircularBar from './CircularBar/CircularBar';

const Dashboard = () => {
 

  return (
    <>
      <States/>
      <div className='w-full flex justify-center space-x-4'>
        <div className='w-5/12 px-8  bg-[#290D3B]'><LatestBooking/></div>
    <div className='w-3/12 ' ><LineChart/></div>
    <div className='w-3/12 '><CircularBar/></div>
      </div>
    </>
  );
};

export default Dashboard;

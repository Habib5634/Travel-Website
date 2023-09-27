import React from 'react'
import {GiUmbrella,GiCargoShip,Gi3DGlasses} from 'react-icons/gi'
import {BsStopwatch} from 'react-icons/bs'




const YearsStatistics = () => {
  return (
    <>
          <h1 className="text-4xl md:text-6xl font-semibold text-black my-10 fnt text-center">Year Statistics</h1>
    <div className='w-full flex flex-wrap justify-center  p-2'>
    <div className='w-3/4 px-'>
        <div className='w-full flex justify-between '>
            <h1 className='text-4xl font-bold text-[#E38C25]'>2022</h1>
            <h1 className='text-4xl font-bold text-[#E38C25]'>2023</h1>

        </div>

{/* clients */}
        <div className='w-full mt-10 flex'>
            <div className='flex w-3/12'>
                <GiUmbrella className='text-5xl text-[#E38C25] mt-2 md:mr-2'/>
                <p className='flex flex-col  '><span className='text-xl sm:text-2xl md:text-4xl font-bold'>1643</span>
                    <span className=' font-bold text-[#cd14d0] text-sm'>Clients</span>
                    
                    </p>
            </div>
            <div className='w-6/12 flex'>
                <h1 className='absolute  w-4/12 text-center text-sm md:text-2xl text-gray-600 font-bold md:-ml-10 md:-mt-4'>+115%</h1>
                <hr className='border border-gray-800 mt-5 font-bold w-1/2' />
                <hr className='border border-red-900 mt-5 font-bold w-1/2' style={{borderWidth: '2px'}}/>
            </div>
            <div className='w-3/12 flex justify-end'>
            
                <p className='flex flex-col ml-2 '><span className='text-xl sm:text-2xl md:text-4xl font-bold'>3527</span>
                    <span className=' font-bold text-[#cd14d0] text-sm'>Clients</span>
                    
                    </p>
                    <GiUmbrella className='text-5xl text-[#E38C25] mt-2 md:ml-2'/>
            </div>
        </div>
{/* clients */}
        {/* Returning Clients */}
        <div className='w-full mt-10 flex'>
            <div className='flex w-3/12'>
                <GiCargoShip className='text-5xl text-[#E38C25] mt-2 md:mr-2'/>
                <p className='flex flex-col  '><span className='text-xl sm:text-2xl md:text-4xl font-bold'>796</span>
                    <span className=' font-bold text-[#cd14d0] text-sm'>Returning Clients</span>
                    
                    </p>
            </div>
            <div className='w-6/12 flex'>
                <h1 className='absolute  w-4/12 text-center text-sm md:text-2xl text-gray-600 font-bold md:-ml-10 md:-mt-4'>+81%</h1>
                <hr className='border border-gray-800 mt-5 font-bold w-2/12' />
                <hr className='border text-[#141546] border-[#141546] mt-5 font-bold w-4/12' style={{borderWidth: '2px'}}/>
                <hr className='border  border-gray-800 mt-5 font-bold w-6/12' />
            </div>
            <div className='w-3/12 flex justify-end'>
            
                <p className='flex flex-col ml-2 '><span className='text-xl sm:text-2xl md:text-4xl font-bold'>145</span>
                    <span className='-ml-10 font-bold text-[#cd14d0] text-sm'>Returning Clients</span>
                    
                    </p>
                    <GiCargoShip className='text-5xl text-[#E38C25] mt-2 md:ml-2'/>
            </div>
        </div>
        {/* returnign clients */}

        {/* Reach */}
        <div className='w-full mt-10 flex'>
            <div className='flex w-3/12'>
                <Gi3DGlasses className='text-5xl text-[#E38C25] mt-2 md:mr-2'/>
                <p className='flex flex-col  '><span className='text-xl sm:text-2xl md:text-4xl font-bold'>11546</span>
                    <span className=' font-bold text-[#cd14d0]'>Reach</span>
                    
                    </p>
            </div>
            <div className='w-6/12 flex'>
                <h1 className='absolute  w-4/12 text-center text-sm md:text-2xl text-gray-600 font-bold md:ml-14 md:-mt-4'>+19%</h1>
                <hr className='border border-gray-800 mt-5 font-bold w-7/12' />
                <hr className='border border-[#E38C25] mt-5 font-bold w-2/12' style={{borderWidth: '2px'}}/>
                <hr className='border border-gray-800 mt-5 font-bold w-3/12' />
            </div>
            <div className='w-3/12 flex justify-end'>
            
                <p className='flex flex-col ml-2 '><span className='text-xl sm:text-2xl md:text-4xl font-bold'>9388</span>
                    <span className=' font-bold text-[#cd14d0] '>Reach</span>
                    
                    </p>
                    <Gi3DGlasses className='text-5xl text-[#E38C25] mt-2 md:ml-2'/>
            </div>
        </div>
        {/* Reach */}

        {/* Items */}
        <div className='w-full mt-10 flex'>
            <div className='flex w-3/12'>
                <BsStopwatch className='text-5xl text-[#E38C25] mt-2 md:mr-2'/>
                <p className='flex flex-col  '><span className='text-xl sm:text-2xl md:text-4xl font-bold'>3927</span>
                    <span className=' font-bold text-[#cd14d0]'>Items</span>
                    
                    </p>
            </div>
            <div className='w-6/12 flex'>
                <h1 className='absolute  w-4/12 text-center text-sm md:text-2xl text-gray-600 font-bold md:-ml-10 md:-mt-4'>+350%</h1>
                <hr className='border border-gray-800 mt-5 font-bold w-1/2' />
                <hr className='border border-[#cd14d0] mt-5 font-bold w-1/2' style={{borderWidth: '2px'}}/>
            </div>
            <div className='w-3/12 flex justify-end'>
            
                <p className='flex flex-col ml-2 '><span className='text-xl sm:text-2xl md:text-4xl font-bold'>17439</span>
                    <span className=' font-bold text-[#cd14d0] '>Items</span>
                    
                    </p>
                    <BsStopwatch className='text-5xl text-[#E38C25] mt-2 md:ml-2'/>
            </div>
        </div>
        {/* Items */}

    </div>
    </div>
      
    </>
  )
}

export default YearsStatistics

import React, { useState } from 'react'
import {BsFillSignpostFill} from 'react-icons/bs'
import {GiFishing,GiGlobe} from 'react-icons/gi'
import {BiLogoJava} from 'react-icons/bi'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
const AboutProjects = () => {
const [counterOn , setCounterOn] =useState(false)
  return (
    <>
    <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=> setCounterOn(false)}>

    <div className='w-full flex flex-wrap justify-center md:space-x-10 my-10'>
<div className='w-5/6 sm:w-3/6 md:w-1/6  space-y-6 flex flex-col items-center'>
    <BsFillSignpostFill className='text-[#8D51D9] text-7xl'/>
    <h1 className='text-7xl font-bold'>{counterOn && <CountUp start={100} end={215} duration={4} delay={0}/>}</h1>
    <p className='text-3xl text-gray-600 font-semibold'>CLients</p>
</div>
<div className='w-5/6 sm:w-3/6 md:w-1/6 space-y-6 flex flex-col items-center'>
    <GiFishing className='text-[#d246d7] text-7xl'/>
    <h1 className='text-7xl font-bold'>{counterOn && <CountUp start={500} end={1179} duration={4} delay={0}/>}</h1>
    <p className='text-3xl text-gray-600 font-semibold'>CLients</p>
</div>
<div className='w-5/6 sm:w-3/6 md:w-1/6 space-y-6 flex flex-col items-center'>
<GiGlobe className='text-[#E38C25] text-7xl'/>
<h1 className='text-7xl font-bold'>{counterOn && <CountUp start={0} end={40} duration={2} delay={0}/>}</h1>
    <p className='text-3xl text-gray-600 font-semibold'>CLients</p>
</div>
<div className='w-5/6 sm:w-3/6 md:w-1/6 space-y-6 flex flex-col items-center'>

  <BiLogoJava  className='text-[#2e5894] text-7xl'/>
  <h1 className='text-7xl font-bold'>{counterOn && <CountUp start={50} end={130} duration={4} delay={0}/>}</h1>
    <p className='text-3xl text-gray-600 font-semibold'>CLients</p>
</div>



    </div>
    </ScrollTrigger>
      
    </>
  )
}

export default AboutProjects

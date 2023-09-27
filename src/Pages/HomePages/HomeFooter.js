import React from 'react'
import fo1 from '../../Assets/fo1.png'
import fo2 from '../../Assets/fo2.png'
import fo3 from '../../Assets/fo3.png'
import {PiMapPinLineDuotone} from 'react-icons/pi'
import {BsTelephoneFill} from 'react-icons/bs'
import {FaEnvelopeOpenText} from 'react-icons/fa'


const HomeFooter = () => {
  return (
    <>
    <div className='flex flex-wrap justify-center pt-10 mx-auto h-fit pb-10 bg-[#8D51D9] ' >

    <div className='w-full sm:w-1/4 flex flex-col justify-center items-center sm:items-start sm:justify-start mb-10 top-10 '>
        <h1 className='text-5xl font-bold text-white'>WHERE NEXT</h1>
        <h1 className='text-3xl text-white'>You Travel</h1>
    </div>
    <div className='w-full sm:w-1/4  flex flex-col space-y-8 mb-10 items-center'>
    <h1 className='fnt text-4xl text-white'>Blog Post</h1>
    <div className='flex'>
        <img  src={fo1} alt='fo1' className='mr-4' />
        <div>
        <p className='text-white'>Travel with us this year</p>
        <p className='text-white'>3rd oct,2023</p>
        </div>
    </div>
    <div className='flex'>
        <img  src={fo2} alt='fo1' className='mr-4' />
        <div>
        <p className='text-white'>Travel with us this year</p>
        <p className='text-white'>3rd oct,2023</p>
        </div>
    </div>
    <div className='flex text-left'>
        <img  src={fo3} alt='fo1' className='mr-4' />
        <div>
        <p className='text-white'>Travel with us this year</p>
        <p className='text-white'>3rd oct,2023</p>
        </div>
    </div>
    </div>
    <div className='w-full sm:w-1/4  flex flex-col  pl-10  items-center md:items-start  space-y-8'>
    <h1 className='fnt text-4xl text-white text-left'>Contact Info</h1>
    <p className='flex text-lg'><PiMapPinLineDuotone className='text-2xl text-white mr-4'/>Bilal Town, abbottabad KPK   </p>
    <p className='flex text-lg text-start'><BsTelephoneFill className='text-2xl text-white mr-4'/>+45 345 3324 56789</p>
    <p className='flex text-lg'><FaEnvelopeOpenText className='text-2xl text-white mr-4'/>Wherenext@gmail.com</p>
    </div>
    </div>
    
    </>
  )
}

export default HomeFooter
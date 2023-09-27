import React from 'react'
import catbg from '../../Assets/catbg.png'
const BlogCategories = () => {
  return (
    <>
    <div className='w-full flex flex-wrap justify-center '>
        <div className='w-full md:w-4/6 p-4 md:p-10'>
            <img src={catbg} alt='categories' className='relative'/>
            <p className='absolute -mt-20 font-bold text-3xl bg-[#4E1E6C] text-white py-2 px-10'>MEXICO</p>
        </div>
        <div className=' w-11/12 md:w-2/6 p-4 md:p-10 space-y-4'>
            <h1 className='text-5xl text-black font-bold'>CATEGORIES</h1>
            <h2 className='text-3xl font-bold text-gray-600 cursor-pointer'>Travel</h2>
            <h2 className='text-3xl font-bold text-gray-600 cursor-pointer'>Exotic Destination</h2>
            <h2 className='text-3xl font-bold text-gray-600 cursor-pointer'>City Breaks</h2>
            <h2 className='text-3xl font-bold text-gray-600 cursor-pointer'>Travel Tips</h2>
            <h2 className='text-3xl font-bold text-gray-600 cursor-pointer'>Life Style & Travel</h2>
            <h2 className='text-3xl font-bold text-gray-600 cursor-pointer'>Uncategorized</h2>

        </div>
        
      
    </div>
  
            <h1 className='text-start mx-10 text-2xl cursor-pointer text-gray-600 md:-mt-8'>Uncategorized | 280 Comments</h1>
            <div className='m-3 md:mx-10'>
            <h1 className='text-3xl font-bold text-[#E38C25] fnt  text-center md:text-start'>Try These New Dream Destinations</h1>
        <p className='text-2xl font-serif text-gray-600 text-center md:text-start'>Nestled between the sparkling waters of the Caribbean Sea and the vast expanses of the Pacific Ocean, Mexico is a land of astonishing diversity, where ancient traditions meet modern life, and natural wonders abound. A Mexico tour promises an unforgettable journey through a country that boasts a rich cultural tapestry, breathtaking landscapes, and a history that stretches back thousands of years <span className='text-[#E38C25] cursor-pointer'>Learn More...</span></p>
</div>

    </>
  )
}

export default BlogCategories

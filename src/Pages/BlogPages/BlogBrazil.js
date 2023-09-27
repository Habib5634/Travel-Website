import React from 'react'
import brazil from '../../Assets/brazil.png'
import brazil1 from '../../Assets/brazil1.png'
import brazil2 from '../../Assets/brazil2.png'
import brazil3 from '../../Assets/brazil3.png'
const BlogBrazil = () => {
  return (
    <>
    <div className='w-full flex h-full flex-wrap justify-center '>  
        <div className='w-full h-full md:w-4/6 p-4 md:p-10'>
            <img src={brazil} alt='categories' className='relative h-fit w-full'/>
            <p className='absolute -mt-20 font-bold text-3xl bg-[#4E1E6C] text-white py-2 px-10'>BRAZIL</p>
        </div>
        <div className='w-11/12 md:w-2/6 h-full  md:p-0 space-y-0'>
            <h1 className='text-5xl text-black font-bold'>Latest Posts</h1>
            <div className='flex w-full'>
                <div className='w-1/3 p-1'><img src={brazil1} alt='brazil1' className='h-28 w-28  mr-2'/></div>
                <div className='w-2/3'>
                    <h1 className='text-xl font-bold'>A Simple Blog Post</h1>
                    <p className='text-gray-600'>By Ali / Aug 18, 2023</p>
                </div>
            </div>
            <div className='flex w-full'>
                <div className='w-1/3 p-1'><img src={brazil2} alt='brazil1' className='h-28 w-28  mr-2'/></div>
                <div className='w-2/3 '>
                    <h1 className='text-xl font-bold break-all'>Dream Destinations For You</h1>
                    <p className='text-gray-600'>By Ali / Aug 18, 2023</p>
                </div>
            </div>
            <div className='flex w-full'>
                <div className='w-1/3 p-1'><img src={brazil3} alt='brazil1' className='h-28 w-28  mr-2'/></div>
                <div className='w-2/3'>
                    <h1 className='text-xl font-bold'>How To Pick Your Vacations</h1>
                    <p className='text-gray-600'>By Ali / Aug 18, 2023</p>
                </div>
            </div>

        </div>
        
      
    </div>
  
            <h1 className='text-start mx-2 md:mx-10 text-2xl cursor-pointer text-gray-600 md:-mt-8'>Uncategorized | 280 Comments</h1>
            <div className='mx-2 md:mx-10'>
            <h1 className='text-3xl font-bold text-[#E38C25] fnt text-center md:text-start'>Try These New Dream Destinations</h1>
        <p className='text-2xl font-serif text-gray-600 text-center md:text-start' >Brazil is a country of captivating contrasts, where natural wonders meet cultural riches, and adventure awaits at every turn. Whether you're exploring the depths of the Amazon, dancing to samba rhythms, or savoring Brazilian cuisine, a Brazil tour promises a diverse and enriching travel experience So, pack your bags, put on your dancing shoes, and let Brazil's captivating beauty and culture sweep you off your feet. Viva o Brasil! <span className='text-[#E38C25] cursor-pointer'>Learn More...</span></p>
</div>

    </>
  )
}

export default BlogBrazil

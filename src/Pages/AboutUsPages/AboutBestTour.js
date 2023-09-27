import React from 'react'
import best1 from '../../Assets/besttour1.png'
const AboutBestTour = () => {
  return (
    <>
    <div className='w-full flex flex-wrap'>
    <div className='w-full md:w-1/2 order-2 md:order-1'>
        <img src={best1} alt='best1' />
    </div>
    <div className='w-full md:w-1/2 flex flex-col justify-center order-1 md:order-2 px-2'>
        <h1 className='text-3xl md:text-5xl fnt mt-10 md:mt-6 text-center'>We Have The Best Tours</h1>
        <p className='fnt text-sm lg:text-xl lg:leading-10 px-3 md:pr-10 mt-6 md:mt-6 text-center'>"Where Next You Travel" is an exploration of the endless possibilities that await the curious and adventurous traveler. This phrase encourages individuals to embrace their wanderlust and seek new horizons, reminding us that the world is full of incredible destinations and experiences waiting to be discovered. It serves as a call to action, inviting people to step out of their comfort zones and embark on journeys of self-discovery, cultural immersion, and natural wonder. Whether it's a distant foreign land, a hidden gem in your own backyard, or an uncharted path, "Where Next You Travel" inspires a sense of wanderlust and reminds us that the world is an open book, and every page is an invitation to explore, learn, and grow.</p>
        <button className="bg-gradient-to-r from-[#4E1E6C] via-[#cd14d0] to-[#E38C25] transition-colors duration-700 hover:bg-gradient-to-r hover:from-[#E38C25] hover:via-[#cd14d0] hover:to-[#4E1E6C] w-fit self-center rounded-full my-10 text-2xl text-white fnt py-2 px-4">Explore Now...</button>
    </div>
</div>

    
    
    </>
  )
}

export default AboutBestTour
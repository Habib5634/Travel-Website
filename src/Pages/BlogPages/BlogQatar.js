import React from 'react'
import q1 from '../../Assets/q1.png'
import q2 from '../../Assets/q2.png'
import q3 from '../../Assets/q3.png'
import q4 from '../../Assets/q4.png'
import q5 from '../../Assets/q5.png'
import q6 from '../../Assets/q6.png'
import q7 from '../../Assets/q7.png'
import q8 from '../../Assets/q8.png'
import q9 from '../../Assets/q9.png'
import q10 from '../../Assets/q10.png'



const BlogQatar = () => {
  return (
    <>
    <div className='w-full flex flex-wrap justify-center '>
        <div className='w-full md:w-4/6 p-4 md:p-10'>
            <img src={q10} alt='categories' className='relative'/>
            <p className='absolute -mt-20 font-bold text-3xl bg-[#4E1E6C] text-white py-2 px-10'>QATAR</p>
        </div>
        <div className='w-11/12 md:w-2/6 p-4 md:p-10 space-y-10'>
            <h1 className='text-3xl md:text-5xl text-black font-bold'>Instagram Posts</h1>
            <div className='flex flex-wrap'>
            <img src={q1} alt='categories' className=' w-1/3 p-1'/>
            <img src={q2} alt='categories' className=' w-1/3 p-1'/>
            <img src={q3} alt='categories' className=' w-1/3 p-1'/>
            <img src={q4} alt='categories' className=' w-1/3 p-1'/>
            <img src={q5} alt='categories' className=' w-1/3 p-1'/>
            <img src={q6} alt='categories' className=' w-1/3 p-1'/>
            <img src={q7} alt='categories' className=' w-1/3 p-1'/>
            <img src={q8} alt='categories' className=' w-1/3 p-1'/>
            <img src={q9} alt='categories' className=' w-1/3 p-1'/>

            </div>

        </div>
        
      
    </div>
  
            <h1 className='text-start mx-10 text-2xl cursor-pointer text-gray-600 md:-mt-8'>Uncategorized | 280 Comments</h1>
            <div className='m-3 md:mx-10'>
            <h1 className='text-3xl font-bold text-[#E38C25] fnt text-center md:text-start'>Try These New Dream Destinations</h1>
        <p className='text-2xl font-serif text-gray-600 text-center md:text-start'>Qatar is a land of discovery, where ancient traditions harmonize with futuristic aspirations. Whether you're wandering through vibrant souqs, exploring cutting-edge architecture, or immersing yourself in desert landscapes, a Qatar tour promises a diverse and enriching travel experience. So, pack your bags, embrace the allure of this Arabian gem, and let Qatar's cultural richness and modern marvels captivate your senses. Marhaba to Qatar! <span className='text-[#E38C25] cursor-pointer'>Learn More...</span></p>
</div>

<div className='flex space-x-3 m-10 '>
  <p className='p-2 text-3xl font-bold bg-white border border-[#E38C25] rounded-xl' style={{ borderWidth: '4px' }}>01.</p>
  <p className='p-2 text-3xl font-bold bg-white border border-[#E38C25] rounded-xl' style={{ borderWidth: '4px' }}>02.</p>
  <p className='p-2 text-3xl font-bold bg-white border border-[#E38C25] rounded-xl' style={{ borderWidth: '4px' }}>03.</p>

</div>

    </>
  )
}

export default BlogQatar
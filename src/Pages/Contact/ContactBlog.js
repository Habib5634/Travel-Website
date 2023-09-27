import React from 'react'
import blogpic from '../../Assets/blgpic.png'
const ContactBlog = () => {
  return (
    <>
    
    <div className='w-full flex flex-wrap justify-center items-center px-10'>
<div className='w-full md:w-1/2  h-[100vh]'>
    <img src={blogpic} alt='blog' className='h-[100vh]' />
</div>
<div className='w-full md:w-1/2 flex flex-col '>
    <h1 className='text-center text-5xl text-[#4E1E6C] font-bold'>WHERE NEXT?</h1>
    <h2 className='text-center text-5xl text-[#4E1E6C] mb-8'>You Travel</h2>
    <p className='fnt mb-6 text-[#E38C25] text-xl text-center md:text-start'>The beauty of "Where Next You Travel" is that it has no boundaries, no limitations. It can lead you to bustling cities or remote villages, to serene mountains or bustling beaches, to the depths of history or 
the cutting edge of modernity. It's an open invitation to explore, to dream,and to create your own narrative.</p>
<p className='fnt leading-loose text-[#E38C25] text-xl text-center md:text-start'>As you contemplate the next chapter of your travel story, remember that "Where Next You Travel" is not just a question; it's an affirmation of your adventurous spirit, a declaration of your love for the world, and a reminder that the journey is as important as 
the destination. So, let your heart be your compass, your curiosity be your guide, and your dreams be your wings. Where next you travel, may it be a journey of a lifetime.</p>
</div>


    </div>
    
    </>
  )
}

export default ContactBlog
import React from 'react';

const blogData = [
    {
        content:"Ultimately, Where Next You Travel is not just about the destinations; it's about the people you meet and the memories you create along the way. Travel fosters connections with fellow adventurers, locals who open their hearts and homes, and even chance encounters that leave a lasting impact."
    },
  {
    title: 'The Art of Exploration',
    content: 'Travel is, at its core, a journey of exploration. It\'s about stepping into the unknown and embracing the thrill of discovery. Each new destination presents a canvas upon which you can paint your own adventures, leaving your unique mark on the world. Whether it\'s wandering the cobblestone streets of a historic European city, hiking through a dense rainforest, or savoring street food in a bustling Asian market, travel is an invitation to explore the myriad wonders of our planet.'
  },
  {
    title: 'Cultural Enrichment',
    content: 'One of the most remarkable aspects of travel is the opportunity to immerse yourself in different cultures. Every corner of the globe is a tapestry of traditions, languages, cuisines, and lifestyles waiting to be explored. Engaging with locals, attending cultural festivals, and trying authentic dishes are not just experiences; they are gateways to understanding and appreciating the diversity of humanity.'
  },
  {
    title: 'Nature\'s Majesty',
    content: 'Nature enthusiasts find solace in travel, as it grants access to some of the most breathtaking natural wonders on Earth. From the rugged beauty of Patagonia to the serene landscapes of the Maldives, the world is a playground for outdoor enthusiasts. Whether you\'re chasing waterfalls, summiting peaks, or snorkeling in crystal-clear waters, travel allows you to connect with the natural world in profound ways.'
  },
  {
    title: 'Memories and Connections',
    content: 'Ultimately, "Where Next You Travel" is not just about the destinations; it\'s about the people you meet and the memories you create along the way. Travel fosters connections with fellow adventurers, locals who open their hearts and homes, and even chance encounters that leave a lasting impact.'
  }
];

const Blog = () => {
  return (
    <div className='m-3 md:m-10'>
      {blogData.map((item, index) => (
        <div key={index}>
          <h1 className='text-4xl font-bold text-[#E38C25] mb-4 text-center md:text-start fnt'>{item.title}</h1>
          <p className='text-2xl mb-4 text-center md:text-start fnt'>{item.content}</p>
        </div>
      ))}
    </div>
  )
}

export default Blog;

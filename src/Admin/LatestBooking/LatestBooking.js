import React, { useState } from 'react'
import hotel1 from '../AdminAssets/hotel1.png'
import hotel2 from '../AdminAssets/hotel2.png'
import hotel3 from '../AdminAssets/hotel3.png'
import hotel4 from '../AdminAssets/hotel4.png'
import hotel5 from '../AdminAssets/hotel5.png'
import hotel6 from '../AdminAssets/hotel6.png'
import hotel7 from '../AdminAssets/hotel7.png'
const LatestBooking = () => {

    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');

    const handleFromDateChange = (e) => {
        setFromDate(e.target.value);
    };

    const handleToDateChange = (e) => {
        setToDate(e.target.value);
    };

    const hotelsData = [
        {
          name: 'Grand Hotel',
          date: '12-sep-2023',
          author: 'John Doe',
          timeAgo: ' |12 days ago',
          imageSrc: hotel1, // Assuming hotel1 is your image source
        },
        {
          name: 'Luxury Resort',
          date: '15-sep-2023',
          author: 'Jane Doe',
          timeAgo: '10 days ago',
          imageSrc: hotel2, // Assuming hotel2 is your image source
        },
        {
            name: 'Luxury Resort',
            date: '15-sep-2023',
            author: 'Jane Doe',
            timeAgo: '10 days ago',
            imageSrc: hotel3, // Assuming hotel2 is your image source
          },
          {
            name: 'Luxury Resort',
            date: '15-sep-2023',
            author: 'Jane Doe',
            timeAgo: '10 days ago',
            imageSrc: hotel4, // Assuming hotel2 is your image source
          },
          {
            name: 'Luxury Resort',
            date: '15-sep-2023',
            author: 'Jane Doe',
            timeAgo: '10 days ago',
            imageSrc: hotel5, // Assuming hotel2 is your image source
          },
          {
            name: 'Luxury Resort',
            date: '15-sep-2023',
            author: 'Jane Doe',
            timeAgo: '10 days ago',
            imageSrc: hotel6, // Assuming hotel2 is your image source
          },
          {
            name: 'Luxury Resort ',
            date: '15-sep-2023',
            author: 'Jane Doe ',
            timeAgo: '10 days ago',
            imageSrc: hotel7, // Assuming hotel2 is your image source
          },
      ];
    return (
        <>
            <h1 className='text-4xl text-center text-white pt-6'>Latest Booking</h1>
            <div>
                <div className='flex space-x-1 justify-center py-4'>
                    <div className="flex flex-col ">
                        <label htmlFor="fromDate" className='text-white'>From:</label>
                        <input
                            type="date"
                            id="fromDate"

                            value={fromDate}
                            onChange={handleFromDateChange}
                        />
                    </div>

                    <div className="flex flex-col ">
                        <label htmlFor="toDate" className='text-white'>To:</label>
                        <input
                            type="date"
                            id="toDate"
                            value={toDate}

                            onChange={handleToDateChange}
                        />
                    </div>
                </div>
                <div>
      {hotelsData.map((hotel, index) => (
        <div className="flex space-x-2 space-y-3" key={index}>
          <div>
            <img src={hotel.imageSrc} alt={`hotel-${index + 1}`} />
          </div>
          <div className="flex flex-col">
            <h1 className="text-white text-2xl">{hotel.name}</h1>
            <p className="text-xl text-red-500">{hotel.date}</p>
            <div className="flex justify-between">
              <p className="text-white">{hotel.author} </p>
              <p className="text-blue-950"> |  {hotel.timeAgo}</p>
            </div>
          </div>
        </div>
      ))}
    </div>

            </div>
        </>
    )
}

export default LatestBooking
import React from 'react'
import {Line } from 'react-chartjs-2'
import {Chart as ChartJS,
LineElement,
CategoryScale,
LinearScale,
PointElement} from 'chart.js'


ChartJS.register(
    LineElement,
CategoryScale,
LinearScale,
PointElement
)
const LineChart = () => {
    const data={
        labels:["May 12","May 13","May 14","May 15","May 16","May 17","May 18"],
        datasets:[{
            data:[8,7.8,6,8,7,5,6],
            backgroundColor:'white',
            borderColor:"white",
            pointBorderColor:"transparent",
            pointBorderWidth:4,
            // tension:1
        }]
    }
    const options={
      // plugin:{
      //   legend:false
      // },
      // scales:{
      //   x:{
      //     grid:{
      //       display:false
      //     }
      //   },
      //   y:{
      //     min:2,
      //     max:10,
      //     ticks:{
      //       stepsize:2,
      //       callback:(value)=>value+'k'
      //     },
      //     grid:{
      //       borderDash:[10]
      //     }
      //   }
      // }
    }
  return (
    <div className='bg-[#290D3B] h-56 w-full p-2'>
      <h1 className='text-white text-xl text-center font-bold pb-2'>Earning Starts On all Booking</h1>
    <Line data={data} option={options}>LineChart</Line>

    </div>
  )
}

export default LineChart
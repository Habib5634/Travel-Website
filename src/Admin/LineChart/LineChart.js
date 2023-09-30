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
            backgroundColor:'transparent',
            borderColor:"red",
            pointBorderColor:"transparent",
            pointBorderWidth:4
        }]
    }
    const options={}
  return (
    <div className='bg-transparent'>
    <Line data={data} option={options}>LineChart</Line>

    </div>
  )
}

export default LineChart
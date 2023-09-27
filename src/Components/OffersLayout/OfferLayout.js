import React from 'react'
import Navbar from '../../Pages/HomePages/Navbar'
import OfferHome from '../../Pages/OfferPages.js/OfferHome'
import Booking from '../../Pages/OfferPages.js/Booking'
import GetInTouch from '../../Pages/HomePages/GetInTouch'
import HomeFooter from '../../Pages/HomePages/HomeFooter'

const OfferLayout = () => {
  return (
    <>
    <Navbar/>
    <OfferHome/>
    <Booking/>
    <GetInTouch/>
    <HomeFooter/>
      
    </>
  )
}

export default OfferLayout

import React from 'react'
import Navbar from '../../Pages/HomePages/Navbar'
import Home from '../../Pages/HomePages/Home'
import BestTours from '../../Pages/HomePages/BestTours'
import Packages from '../../Pages/HomePages/Packages'
import BestOffers from '../../Pages/HomePages/BestOffers'
import Trending from '../../Pages/HomePages/Trending'
import OurClient from '../../Pages/HomePages/OurClient'
import GetInTouch from '../../Pages/HomePages/GetInTouch'
import HomeFooter from '../../Pages/HomePages/HomeFooter'

const HomeLayout = () => {
  return (
    <>
    <Navbar/>
    <Home/>
    <BestTours/>
    <Packages/>
    <BestOffers/>
    <OurClient/>
    <Trending/>
    <GetInTouch/>
    <HomeFooter/>

      
    </>
  )
}

export default HomeLayout

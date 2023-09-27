import React from 'react'
import Navbar from '../../Pages/HomePages/Navbar'
import AboutHead from '../../Pages/AboutUsPages/AboutHead'
import AboutBestTour from '../../Pages/AboutUsPages/AboutBestTour'
import YearsStatistics from '../../Pages/AboutUsPages/YearsStatistics'
import AboutPackages from '../../Pages/AboutUsPages/AboutPackages'
import AboutProjects from '../../Pages/AboutUsPages/AboutProjects'
import AboutNewsLetter from '../../Pages/AboutUsPages/AboutNewsLetter'
import HomeFooter from '../../Pages/HomePages/HomeFooter'

const AboutLayout = () => {
  return (
    <>
    <Navbar/>
    <AboutHead/>
    <AboutBestTour/>
    <YearsStatistics/>
    <AboutPackages/>
    <AboutProjects/>
    <AboutNewsLetter/>
    <HomeFooter/>

    </>
  )
}

export default AboutLayout
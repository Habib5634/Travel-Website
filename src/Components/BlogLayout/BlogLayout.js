import React from 'react'
import BlogHead from '../../Pages/BlogPages/BlogHead'
import Navbar from '../../Pages/HomePages/Navbar';
import Blog from '../../Pages/BlogPages/Blog';
import BlogCategories from '../../Pages/BlogPages/BlogCategories';
import BlogBrazil from '../../Pages/BlogPages/BlogBrazil';
import BlogQatar from '../../Pages/BlogPages/BlogQatar';
import GetInTouch from '../../Pages/HomePages/GetInTouch';
import HomeFooter from '../../Pages/HomePages/HomeFooter'

const BlogLayout = () => {
  return (
    <>
    <Navbar/>
    <BlogHead/>
    <Blog/>
    <BlogCategories/>
    <BlogBrazil/>
    <BlogQatar/>
    <GetInTouch/>
    <HomeFooter/>
      
    </>
  )
}

export default BlogLayout;

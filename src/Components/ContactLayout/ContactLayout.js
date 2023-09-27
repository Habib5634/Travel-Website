import React from 'react'
import Navbar from '../../Pages/HomePages/Navbar'
import ContactHead from '../../Pages/Contact/ContactHead'
import ContactForm from '../../Pages/Contact/ContactForm'
import ContactBlog from '../../Pages/Contact/ContactBlog'
import ContactMap from '../../Pages/Contact/ContactMap'
import HomeFooter from '../../Pages/HomePages/HomeFooter'

const ContactLayout = () => {
  return (
    <>
    <Navbar/>
    <ContactHead/>
    <ContactForm/>
    <ContactBlog/>
    <ContactMap/>
<HomeFooter/>
    </>
  )
}

export default ContactLayout
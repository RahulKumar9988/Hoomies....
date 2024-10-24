import React from 'react'
import Navbar from './navbar/Navbar'
import HeroSection from './heroSection/HeroSection'
import AboutUs from './body/AboutUs'
import ContactUs from './body/ContactUs'
import Footer from './footer/Footer'

function Dashboard() {
  return (
    <div>
        <Navbar/>
        <HeroSection/>  
        <AboutUs/>
        <ContactUs/>
        <Footer/>
    </div>
  )
}

export default Dashboard
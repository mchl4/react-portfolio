import React from 'react'
import AboutBanner from './banner/AboutBanner'
import Header from './header/Header'
import Footer from './footer/Footer'
import Hire from './hire-me/Hire'
import Cta from './cta/Cta'
import Resume from './resume/Resume'


const About = () => {
  return (
    <>
    <Header/>
    <AboutBanner/>
    <Hire/>
    <Resume/>
    <div className='bg-white'>
    <Cta/>
    </div>
   
    <Footer/>
   
    </>
   
  )
}

export default About
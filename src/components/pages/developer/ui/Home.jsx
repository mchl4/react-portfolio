import React from 'react'
import Header from './header/Header'
import Banner from './banner/Banner'
import Footer from './footer/Footer'
import Services from './services/Services'
import MultipleItems from './projects/MultipleItems'
import Cta from './cta/Cta'


const Home = () => {
  return (
    <>
    <Header/>
    <Banner/>
    <Services/>

    <div className='bg-white py-20'>
    <div className='container'>
      
    <MultipleItems/>
    </div>
   
    </div>

    <Cta/>

    <div className='bg-black'>
        <Footer />
      </div>
    
  
    </>
  )
}

export default Home
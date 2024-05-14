import React from 'react'

import { BsFillTelephoneFill } from 'react-icons/bs'
import { FaEnvelope } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import Header from './header/Header'
import Footer from './footer/Footer'

const Contacts = () => {
  return (
    <>
    <Header/> 
    <section className='w-full h-[690px] pt-[80px] shadow-lg'>
    <div className="container">
    <h2 className='text-[4rem] text-white my-10'> Let's work together</h2>
        <div className='flex justify-between items-center' >
          


        <div className='mt-10'>
          <h4 className='mb-10'>I'm available at</h4>
          <div className='flex flex-col gap-5'>
          <ul className='flex gap-3'>
            <li><BsFillTelephoneFill className='text-2xl' /></li>
            <li><p>09216606579</p></li>
          </ul>

          <ul className='flex gap-3'>
            <li><FaEnvelope className='text-2xl'/></li>
            <li><p>michaelaarbilo25@gmail.com</p></li>
          </ul>

          <ul className='flex gap-3'>
            <li><FaLocationDot className='text-2xl'/></li>
            <li><p>Nagcarlan, Laguna Philippines</p></li>
          </ul>
          </div>

        </div>

        <div className='mt-10'>
        <form action="">
          <div className='flex flex-col m-3'>
          <input type="text" placeholder='YOUR NAME' className='p-2 w-[600px] rounded-lg bg-stone-200' />
          </div>

          <div className='flex flex-col m-3'>
          <input type="text" placeholder='EMAIL ADDRESS' className='p-2 w-[600px] rounded-lg bg-stone-200' />
          </div>

          <div className='flex flex-col m-3'>
          <textarea name="" id="" placeholder='WRITE A MESSAGE' className='p-2 w-[600px] h-[100px] rounded-lg bg-stone-200'></textarea>
          </div>
        </form>



        </div>

    </div>
    

    </div>
    </section>

    <div className='shadow-lg'>
        <Footer />
      </div>
    </>
  )
}

export default Contacts
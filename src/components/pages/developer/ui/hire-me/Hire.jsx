import React from 'react'
import { IoLogoBehance } from 'react-icons/io5'

const Hire = () => {
  return (
    <section className='bg-white'>
        <div className="container">
          <div className='flex gap-5 items-center justify-between py-10'>
            <div className='w-[600px]'>
              <h2 className='text-4xl text-black'>Why you hire me for your project?</h2>
              <p className='text-justify'>Hire me for your next project because I bring a combination of passion, expertise in UI/UX, graphic design, and video editing. My commitment to crafting compelling digital experiences, attention to detail, and creative versatility ensures that your project receives a unique and impactful touch. Let's collaborate to bring your vision to life.</p>
              <ul className='flex gap-2 items-center '>
              <li><button className='social_btn'><IoLogoBehance className='text-3xl' /></button></li>
              <li><button className='btn btn-dark'>Portfolio</button></li>  
              </ul>
            </div>
            <img src="../../../../public/hire_me.png" alt="" className='w-[600px]'/>
          </div>
        </div>
      </section>
  )
}

export default Hire
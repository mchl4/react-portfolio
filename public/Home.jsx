import React from 'react'
import Header from '../../partials/Header'
import { projects, services } from './data'
import { baseImgUrl } from '../../helpers/functions-general'
import Cta from '../../partials/Cta'
import Footer from '../../partials/Footer'
import SliderBasic from './SliderBasic'
import MultipleItems from './MultipleItems'
import {  HiOutlineDocumentDownload } from 'react-icons/hi'

const Home = () => {
  return (
    <>
    <div>
        <Header />
    </div>

    <section>
        <div className="container">
        <div className='flex justify-between h-[870px] items-center justify-items-center border-b-2 border-white'>
            <div className='text-primary'>
                <h3 className='mb-0 font-thicker text-4xl'>HELLO,</h3>
                <h2 className='text-6xl mb-0'>I'M MICHAELA ARBILO</h2>
                <p className='text-black text-sm'>A WEB DESIGNER AND GRAPHIC DESIGNER</p>
                <ul className='flex gap-2 mt-4'>
                    <li><button className='btn btn-light'>Let's Talk</button></li>
                    <li><button className='btn btn-dark'>Download CV </button></li>              
                </ul>
            </div>

            <div className=''>
                <div className='bg-primary/50 w-[480px] h-[400px] p-4 rounded-lg relative'>
                    <div className='bg-primary/80 w-full h-full rounded-lg'></div>
                    <img src="../../../../public/home/banner1.png" alt="" className='absolute -top-[168px] '/>
                </div>   
            </div>
            </div>
        </div>
    </section>

    <section className='py-20'>
        <div className="container">
            <h2 className='text-center text-3xl mb-20'>MY SERVICES</h2>
            <div className="cards">
                <div className='flex justify-between items-center'>
                {services.map((item, key)=>
                    <div className='w-[400px] h-[450px] bg-primary/50 p-4 rounded-3xl cursor-pointer hover:scale-[1.1] transition-all' key={key}>
                        <div className='flex flex-col gap-3 px-4 justify-center items-center text-center w-full h-full bg-primary rounded-3xl'>
                        <img src={`${baseImgUrl}/home/${item.img}`} alt="" className='w-[60px]' />
                        <h3>{item.title}</h3>
                        <p className='text-xs text-balance'>{item.description}</p>
                        </div>
                    </div>
                )}
                </div>
            </div>
        </div>
    </section>

    <section className='bg-primary py-20'>
        <div className="container">
        <h2 className='text-center text-3xl mb-20'>RECENT PROJECTS</h2>
            <div className="cards">
            <div className='flex justify-between items-center'>
             {/* {projects.map((item, key)=>
                    <div className='w-[400px] h-[350px] bg-primary rounded-3xl shadow-xl' key={key}>
                        <div className='flex flex-col gap-3 justify-center items-center text-center w-full h-full'>
                        <img src="https://via.placeholder.com/400x350" alt="" className='overflow-hidden rounded-t-3xl'/>
                        <h3 className='py-4 px-3 text-balance '>{item.title}</h3>
                        </div>
                    </div>
                )}  */}

               
                <MultipleItems/>
                </div>
            </div>
        </div>

    </section>

    <Cta/>

    <div className='bg-black'>
        <Footer />
      </div>

    </>
  )
}

export default Home
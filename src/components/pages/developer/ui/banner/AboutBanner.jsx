import React from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { IoLogoBehance } from 'react-icons/io5'
import { MdOutlineEmail } from 'react-icons/md'

const AboutBanner = () => {
  return (
    
    <div className="container ">
       <div className='grid grid-cols-[2fr_1fr] w-full py-20 items-center border-b-2 border-white '>
         <div className='max-w-auto max-h-auto'>
           <div className='w-[500px] h-[500px] rounded-full bg-white/50 relative'></div>
           <img src="../../../../public/about_me.png" alt="" className='w-[500px] h-[500px] absolute top-[194px] left-[330px]'/>
         </div>

         <div>
           <h2 className='text-5xl text-primary mb-10 text-white'>About Me</h2>
           <p className='text-justify'>In my portfolio, you'll discover a showcase of projects where I bring my passion for designing exceptional digital experiences to life. With expertise in both UI/UX design and graphic design, I strive to create visually appealing and user-centric solutions that leave a lasting impact.</p>
           <p className='text-justify'>My passion extends beyond web development and web/graphic design; I also excel in the art of video editing. This multifaceted skill set allows me to bring a comprehensive and creative approach to every project, ensuring a holistic and polished result that resonates with your audience.</p>
           <div className='flex items-center justify-end mt-10'>
               <ul className='flex gap-2 items-center '>
                   <li><button className='social_btn'><IoLogoBehance className='text-2xl' /></button></li>
                   <li><button className='social_btn'><FaFacebook className='text-2xl'/></button></li>
                   <li><button className='social_btn'><FaInstagram className='text-2xl text-gray-800 bg-black rounded-full p-1'/></button></li>
                   <li><button className='social_btn'><MdOutlineEmail className='text-2xl text-gray-800 bg-black rounded-full p-1'/></button></li>
               </ul>
           </div>
         </div>
       </div>
    </div>
  
  )
}

export default AboutBanner
import React from 'react'
import { AiTwotoneHtml5 } from 'react-icons/ai'
import { SiAdobephotoshop } from 'react-icons/si'
import { TbBrandCss3 } from 'react-icons/tb'

const Resume = () => {

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '../../../../../../public/Resume.pdf';
    link.download = 'resume_michaela.pdf';
    link.click();
  };

  return (
 
    <div className="container">
        <div className='flex py-20 justify-center gap-14'>
          <div className=' flex flex-col relative'>
            <h1 className='mt-6 mb-7 text-[4.5rem] text-center tracking-wide text-white '>RESUME</h1>
            <img src="../../../../public/resume.jpg" alt="" className='w-[315px]  rounded-3xl'/>
            <div className='flex justify-end '>
            <button className='btn btn-light bg-white px-5 py-2 absolute bottom-7 right-2 z-10 ' onClick={handleDownloadResume}>Download CV</button>
            </div>
          </div>

          <div>
            <div className='bg-white/50 w-[900px] h-[530px] rounded-3xl p-3 mb-5'>
              <div className='bg-white w-full h-full rounded-3xl flex flex-col items-center gap-2 py-6'>
                <div className='bg-gray-800 w-[800px] h-[150px] rounded-3xl p-4 mb-5'>
                  <h1 className='text-white mb-2'>Career Objective</h1>
                  <p className='text-white text-md'>To leverage and expand skills in a variety of IT domains. Motivated to effectively contributing to a team, obtaining hands-on experience, and increasing my expertise in the ever-changing world of Information Technology.</p>
                </div>

                <h2 className='text-4xl text-black'>SKILLS</h2>

                <div className='flex gap-5'>
                  <p className='bg-gray-800 w-[500px] h-[80px] text-white rounded-3xl p-4'>Proficient in front-end development, including HTML, CSS, and Figma for Web Design.</p>
                  <ul className='flex gap-2'>
                    <li className='flex items-center justify-center bg-stone-300 w-[80px] h-[80px] rounded-full'><AiTwotoneHtml5 className='bg-gray-800 w-[70px] h-[70px] rounded-full p-3' /></li>
                    <li className='flex items-center justify-center bg-stone-300 w-[80px] h-[80px] rounded-full'><TbBrandCss3 className='bg-gray-800 text-stone-300 w-[70px] h-[70px] rounded-full p-3' /></li>
                    <li className='flex items-center justify-center bg-stone-300 w-[80px] h-[80px] rounded-full'><SiAdobephotoshop className='bg-gray-800 text-stone-300 w-[70px] h-[70px] rounded-full p-3' /></li>
                  </ul>
                </div>

                <div className='flex gap-10'>
                  <p className='bg-gray-800 w-[440px] mx-3 text-white rounded-3xl p-4 text-sm'>Skilled in video editing, with knowledge of industry-standard software like Adobe Premiere Pro, After Effects, Capcut and Filmora.</p>
                <div className='relative'>
                <div>
                  <img src="../../../../public/photoshop.png" alt="" className='w-[100px] absolute bg-black p-4 border-4 rounded-full -left-10 ' />
                </div>
                  <p className='bg-gray-800 w-[280px] text-white rounded-3xl p-4 text-right pl-7 text-sm ml-5'> Proficient in utilizing Adobe Photoshop for graphic design and image editing.</p>
                </div>
                </div>
                

               
              </div>
            </div>
            
            
          </div>

        </div>
    </div>

  )
}

export default Resume
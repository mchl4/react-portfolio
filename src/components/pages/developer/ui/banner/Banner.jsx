import React from 'react'

const Banner = () => {

    const handleDownloadResume = () => {
        const link = document.createElement('a');
        link.href = '../../../../../../public/Resume.pdf';
        link.download = 'resume_michaela.pdf';
        link.click();
      };

  return (
    
        <div className="container">
        <div className='flex justify-between h-[870px] items-center justify-items-center border-b-2 border-white'>
            <div className='text-primary'>
                <h3 className='mb-0 font-thicker text-4xl text-white'>HELLO,</h3>
                <h2 className='text-6xl mb-0 text-white'>I'M MICHAELA ARBILO</h2>
                <p className='text-black text-sm '>A WEB DESIGNER AND GRAPHIC DESIGNER</p>
                <ul className='flex gap-2 mt-4'>
                    <li><button className='btn btn-light'>Let's Talk</button></li>
                    <li><button className='btn btn-dark' onClick={handleDownloadResume}>Download CV </button></li>              
                </ul>
            </div>

            <div>
                <div className='bg-white/50 w-[480px] h-[400px] p-4 rounded-lg relative'>
                <div className='bg-white/80 w-full h-full rounded-lg'></div>
                <img src="../../../../public/home/banner1.png" alt="" className='absolute -top-[168px] '/>
                </div>
            </div>
            </div>
        </div>
 
   
  )
}

export default Banner
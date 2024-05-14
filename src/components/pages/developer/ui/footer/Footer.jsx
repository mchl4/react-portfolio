import React from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { IoLogoBehance } from 'react-icons/io5'
import { MdOutlineEmail } from 'react-icons/md'

const Footer = () => {
  return (
    <div className='py-8'>
    <div className="container">
        <div className='flex items-center'>
            <ul className='flex gap-2 items-center '>
                <li><button className='social_btn'><IoLogoBehance className='text-2xl' /></button></li>
                <li><button className='social_btn'><FaFacebook className='text-2xl'/></button></li>
                <li><button className='social_btn'><FaInstagram className='text-2xl text-gray-800 bg-black rounded-full p-1'/></button></li>
                <li><button className='social_btn'><MdOutlineEmail className='text-2xl text-gray-800 bg-black rounded-full p-1'/></button></li>
                <li><p className='text-stone-600 text-xs ml-2'>&copy; Michaela Arbilo</p></li>
            </ul>
        </div>
    </div>
</div>
  )
}

export default Footer
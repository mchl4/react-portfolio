import React from 'react'
import Logo from '../svg/Logo'
import { MdDesignServices, MdOutlineCalendarMonth } from 'react-icons/md'
import { GoProjectSymlink } from 'react-icons/go'
import { IoSettingsOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <aside className='px-4 py-6 w-[250px] text-primary h-screen border-r border-line border-accent '>
      <div className='flex items-center gap-3'>
        {/* <Logo /> */}
      <h2 className='flex text-primary text-3xl ml-5 mb-0 mt-4'>MA</h2>
      </div>
      
      <div className='flex flex-col justify-between h-[830px]'>
      <ul className=' nav'>
        <li className='nav-link'><Link to="/services"><MdDesignServices />Services</Link></li>
        <li className='nav-link'><Link to="/portfolio"><GoProjectSymlink />Projects</Link></li>
        <li className='nav-link'><Link to="#"><MdOutlineCalendarMonth />Calendar</Link></li>
        <li className='nav-link'><Link to="#"><IoSettingsOutline />Settings</Link></li>
      </ul>

      <button className='bg-content/50 w-full py-1 rounded-lg'><Link to="/home" >Website</Link></button>
      </div>
    </aside>
  )
}

export default Navigation
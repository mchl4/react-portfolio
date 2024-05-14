import React from 'react'
import { CiBellOn } from 'react-icons/ci'
import { LiaAngleDownSolid, LiaKeySolid, LiaSignOutAltSolid, LiaUserCircle } from 'react-icons/lia'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header px-4 py-3 border-b border-line text-primary'>
        <div className='flex justify-end items-center gap-4 w-full relative'>

            <button className='text-2xl'><CiBellOn/></button>
            <img src="https://via.placeholder.com/40x40" alt="" className=' size-[40px] rounded-full object-cover '/>
            <button className='flex items-center gap-5 text-primary'>Arbilo, Michaela <LiaAngleDownSolid/></button>

            <div className='hidden header-dropdown absolute bg-secondary p-4 rounded-md right-0 top-[calc(100%+10px)] text-center'>
            <img src="https://via.placeholder.com/40x40" alt="" className=' size-[40px] rounded-full object-cover mx-auto mb-2'/>
            <h4 className='mb-1'>Muh Bambang</h4>
            <p className='text-sm w-[200px] truncate'>muh.bambang@gmail.com</p>
            <ul className='flex justify-center gap-5'> 
                <li><Link to="#" className='text-2xl'><LiaUserCircle/></Link></li>
                <li><Link to="#" className='text-2xl'><LiaKeySolid/></Link></li>
                <li><Link to="#" className='text-2xl'><LiaSignOutAltSolid/></Link></li>
            </ul>
            </div>
        </div>
    </header>
  )
}

export default Header
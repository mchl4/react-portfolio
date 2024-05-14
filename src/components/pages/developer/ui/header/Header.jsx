import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header py-3 bg-accent shadow-lg'>
        <div className="container">
        <div className='flex items-center justify-center '>
            <div className='w-full'>
                <h1 className='font-thicker mb-0 text-white'>MA</h1>
            </div>
            <div>
                <ul className='flex text-sm mb-0 text-center text-white'>
                    <li><Link to="/home">HOME</Link></li>
                    <li><Link to="/about">ABOUT</Link></li>
                    <li><Link to="/contacts">CONTACTS</Link></li>
                </ul>
            </div>
        </div>
        </div>
    </header>
  )
}

export default Header
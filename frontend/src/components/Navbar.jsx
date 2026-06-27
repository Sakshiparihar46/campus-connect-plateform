import React from 'react'
import { assets } from '../assets/assets'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='profile'>
      <img src={assets.profile_icon} alt='profile' />
    </div>
  )
}

export default Navbar


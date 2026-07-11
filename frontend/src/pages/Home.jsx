import React from 'react'
import { assets } from '../assets/assets'
import './Home.css'
function Home() {
  return (
    <div className='home-image'>
      <img src={assets.college_campus} alt='Campus overview' />
    </div>
  )
}

export default Home

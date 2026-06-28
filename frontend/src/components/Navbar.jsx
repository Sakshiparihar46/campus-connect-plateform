import React,{useState} from 'react'
import { assets } from '../assets/assets'
import './Navbar.css'
import {Link, useNavigate} from 'react-router-dom';

const Navbar = () => {
  const [menu,setMenu]=useState("Home");
  return (<div className='navbar'>
    <div className='navbar-left'>
      <div className='profile'>
        <img src={assets.profile_icon} alt='profile' />
      </div>
      <Link to="/" onClick={()=>setMenu("home")} className={menu==="Home"?"active":""}>Home</Link>
    </div>
  </div>

  )
}

export default Navbar


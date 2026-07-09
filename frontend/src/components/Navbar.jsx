import React,{useContext, useState} from 'react'
import { assets } from '../assets/assets'
import './Navbar.css'
import {Link, useNavigate} from 'react-router-dom';
import {StoreContext} from '../context/Context'

const Navbar = ({setShowLogin}) => {
  const [menu,setMenu]=useState("Home");
  const {token,setToken}=useContext(StoreContext);
  const navigate=useNavigate();
  const logOut=()=>{
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  }

  return (<div className='navbar'>
      <ul className='navbar-left'>
      <div className='profile'>
        <img src={assets.profile_icon} alt='profile' />
      </div>
      <Link to="/" onClick={()=>setMenu("home")} className={menu==="Home"?"active":""}>Home</Link>
      <Link to="/books" onClick={()=>setMenu("Books")} className={menu==="Books"?"active":""}>Books</Link>
      <Link to="/internships" onClick={()=>setMenu("internships")} className={menu==="internships"?"active":""}>Placements/Internships</Link>
      <Link to="/collegeEvents" onClick={()=>setMenu("Events")} className={menu==="Events"?"active":""}>Events</Link>
      </ul>
    <div className='navbar-right'>
      {!token?<button onClick={()=>setShowLogin(true)}>Login/register</button>:
      <li onClick={logOut}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>}
    </div>

  </div>

  )
}

export default Navbar


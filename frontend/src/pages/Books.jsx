import React, { useState } from 'react'
import BookDisplay from '../components/BookDisplay'
import { NavLink } from 'react-router-dom';
import {assets} from '../assets/assets.js'
function Books() {
  
  const [category,setCategory]=useState("All");
  return (
    <div>
      <NavLink to='/add' className="sidebar-option">
          <img src={assets.add_icon} alt="" />
          <p>Add Items</p>
        </NavLink>
      <BookDisplay category={category}/>
    </div>
  )
}

export default Books

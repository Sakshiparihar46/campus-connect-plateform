import React, { useContext, useState } from 'react'
import InternshipDisplay from '../components/InternshipDisplay'
import BookDisplay from '../components/BookDisplay'
import { useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets.js'
import { StoreContext } from '../context/Context.jsx';
function Internships() {
  const navigate = useNavigate();
  const { token } = useContext(StoreContext);

  const handleAddClick = () => {
    navigate('/internship/add');
  }
  return (
     <div>{!token?<></>:
      <div className="add-option">
          <img className='add-option-img' onClick={handleAddClick} src={assets.add_icon} alt="" />
          <p className='add-option-content' onClick={handleAddClick}>Add Internship</p>
        </div>}
      <InternshipDisplay/>
    </div>
  )
}

export default Internships

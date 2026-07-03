import React, { useContext, useState } from 'react'
import BookDisplay from '../components/BookDisplay'
import { useNavigate } from 'react-router-dom';
import {assets} from '../assets/assets.js'
import './Books.css'
import { StoreContext } from '../context/Context.jsx';
function Books() {
  
  const [category,setCategory]=useState("All");
  const navigate = useNavigate();
  const {token}=useContext(StoreContext);
  
  const handleAddClick = () => {
    navigate('/add');
  }
  
  return (
    <div>{!token?<></>:
      <div className="add-option">
          <img className='add-option-img' onClick={handleAddClick} src={assets.add_icon} alt="" />
          <p className='add-option-content' onClick={handleAddClick}>Add Books</p>
        </div>}
      <BookDisplay category={category}/>
    </div>
  )
}

export default Books

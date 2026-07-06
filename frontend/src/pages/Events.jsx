import React ,{useState,useContext}from 'react'
import { useNavigate } from 'react-router-dom';
import {assets} from '../assets/assets.js'
import { StoreContext } from '../context/Context.jsx';
import EventDisplay from '../components/EventDisplay.jsx'

function Events() {
  const navigate = useNavigate();
  const {token}=useContext(StoreContext);

  const handleAddClick=()=>{
    navigate('/event/add');
  }
  return (
    <div>
      <div>{!token?<></>:
      <div className="add-option">
          <img className='add-option-img' onClick={handleAddClick} src={assets.add_icon} alt="" />
          <p className='add-option-content' onClick={handleAddClick}>Add Event</p>
        </div>}
      <EventDisplay/>
    </div>
    </div>
  )
}

export default Events

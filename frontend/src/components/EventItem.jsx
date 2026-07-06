import React, { useContext } from 'react'
import { toast } from 'react-toastify';
import {StoreContext} from '../context/Context'
import { assets } from '../assets/assets'
import axios from 'axios';
import './EventItem.css'

function EventItem({id,image,link,venue}) {
    const {token,url,fetchEventList}=useContext(StoreContext);

    const removeEvent=async(eventId)=>{
    try{
      const response=await axios.post(url+"/api/event/remove",{id:eventId},{headers:{"Authorization":`Bearer ${token}`}});
      await fetchEventList();
      if(response.data.success){
        toast.success(response.data.message);
      }else{
        toast.error("error");
      }
    }catch(err){
      console.log(err);
    }
  }


  return (
     <div className='event-item'>
            <div>
          <img className ='event-item-img'src={image}></img>
            </div>
            <div className='event-item-info'><div className='event-item-top'>
            {token?<img onClick={()=>removeBook(id)} className ="event-item-image" src={assets.cross_icon} alt="" />:<></>}
            <p className='event-item-venue'>venue: {venue}</p>
            </div>
          <div><a target="_blank"href={link}className="event-item-link">👉click here for register</a></div>
          </div>
        </div>
  )
}

export default EventItem

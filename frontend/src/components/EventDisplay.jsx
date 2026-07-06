import React, { useContext } from 'react'
import { StoreContext } from '../context/Context'
import EventItem from './EventItem'

function EventDisplay() {
    const {eventList}=useContext(StoreContext);
  return (
    <div className='event-display-list'>
      {eventList.map((item,index)=>{
        return <EventItem key={index} id={item.id} image={item.image} venue={item.venue} link={item.link}/>
      })}
    </div>
  )
}

export default EventDisplay

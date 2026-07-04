import React, { useContext } from 'react'
import { StoreContext } from '../context/Context'
import InternshipItem from './InternshipItem'
function InternshipDisplay() {
  const {internshipList}=useContext(StoreContext);
  return (
    <div className='internship-display-list'>
      {internshipList.map((item,index)=>{
        return <InternshipItem  key={index} id={item._id} link={item.link} image={item.image}/>
      })}
    </div>
  )
}

export default InternshipDisplay

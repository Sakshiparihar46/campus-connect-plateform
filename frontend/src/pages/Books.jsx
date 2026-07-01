import React, { useState } from 'react'
import BookDisplay from '../components/BookDisplay'
function Books() {
  
  const [category,setCategory]=useState("All");
  return (
    <div>
      <BookDisplay category={category}/>
    </div>
  )
}

export default Books

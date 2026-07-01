import React, { useContext } from 'react'
import { StoreContext } from '../context/Context'
import BookItem from './BookItem.jsx';
import './BookDisplay.css'

function BookDisplay({category}) {
    const {bookList}=useContext(StoreContext);
  return (
    <div className='book-display-list'>
      {bookList.map((item,index)=>{
        return <BookItem  key={index} id={item._id} book_name={item.book_name} description={item.description} price={item.price} image={item.image} contact_no={item.contact_no} email={item.email}/>
      })}
    </div>
  )
}

export default BookDisplay

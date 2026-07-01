import React from 'react'
import {StoreContext} from '../context/Context'
import './BookItem.css'

function BookItem({id,book_name,price,description,image,contact_no,email}) {
  return (
    <div className='book-item'>
        <div>
      <img className ='book-item-img'src={image}></img>
        </div>
        <div className='book-item-info'>
        <h3 className='book-item-name'>{book_name}</h3>
        <p className="book-item-desc">{description}</p>
        <p className="book-item-price">${price}</p>
        <p className="book-item-contact"><span className='phone'>Phone_no:</span> {contact_no}</p>
        <p  className="book-item-email">{email}</p>
      </div>
    </div>
  )
}

export default BookItem

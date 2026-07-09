import React, { useContext } from 'react'
import { toast } from 'react-toastify';
import {StoreContext} from '../context/Context'
import './BookItem.css'
import { assets } from '../assets/assets'
import axios from 'axios';
function BookItem({id,book_name,price,description,image,contact_no,email}) {
  const {token,url,fetchBookList}=useContext(StoreContext);

  const removeBook=async(bookId)=>{
    try{
      const response=await axios.post(url+"/api/book/remove",{id:bookId},{headers:{"Authorization":`Bearer ${token}`}});
      await fetchBookList();
      if(response.data.success){
        toast.success(response.data.message);
      }else{
        toast.error(response.data?.message||"error");
      }
    }catch(err){
      const status = err?.response?.status;
      const msg = err?.response?.data?.message || err?.message || "Request failed";
      toast.error(msg);
      console.error(err);
    }
  }

  return (
    <div className='book-item'>
        <div>
      <img className ='book-item-img'src={image}></img>
        </div>
        <div className='book-item-info'>
        {token?<img onClick={()=>removeBook(id)} className ="book-item-image" src={assets.cross_icon} alt="" />:<></>}
        <h3 className='book-item-name'>{book_name}</h3>
        <p className="book-item-desc">{description}</p>
        <p className="book-item-price">${price}</p>
        <p className="book-item-contact"><span className='phone'>Phone_no:</span> {contact_no}</p>
        <p className="book-item-email">{email}</p>
      </div>
    </div>
  )
}

export default BookItem

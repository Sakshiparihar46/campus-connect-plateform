import React, { useContext, useState } from 'react'
import { toast } from 'react-toastify';
import { StoreContext } from '../context/Context';
import { assets } from '../assets/assets';
import  axios  from 'axios';
import "./Add.css"
function Add() {
  const [image,setImage]=useState(false);
  const {url,token,fetchBookList}=useContext(StoreContext);
  const [data,setData]=useState({
    book_name:"",
    contact_no:"",
    description:"",
    price:"",
    category:"Engineering",
    email:""
  });

  const onChangeHandler=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
    setData(data=>({...data,[name]:value}))
  }

  const onSubmitHandler=async(event)=>{
    event.preventDefault();
    try{
      const formData=new FormData();
      formData.append("book_name",data.book_name);
      formData.append("contact_no",Number(data.contact_no));
      formData.append("price",Number(data.price));
      formData.append("description",data.description);
      formData.append("category",data.category);
      formData.append("email",data.email);
      formData.append("image",image);

      const response=await axios.post(url+"/api/book/add",formData,{
        headers:{
          token:token
        }
      });
      await fetchBookList();
      if(response.data.success){
        setData({
          book_name:"",
          contact_no:"",
          description:"",
          price:"",
          category:"Engineering",
          email:""
        });
        setImage(false);
        toast.success(response.data.message);
      }else{
        toast.error(response.data.message);
      }
    }catch(error){
      toast.error(error.response?.data?.message || "Error adding book");
    }
  }
  return (
    <div className='add'>
      <form className='flex-col' onSubmit={onSubmitHandler}>
        <div className="add-img-upload flex-col">
          <p>upload Image</p>
          <label htmlFor="image">
            <img src={image?URL.createObjectURL(image):assets.upload_area} alt="" />
          </label>
        <input onChange={(e)=>setImage(e.target.files[0])} type="file" id="image" hidden required/>
        </div>
        <div className="add-book-name flex-col">
          <p>book name</p>
          <input onChange={onChangeHandler} value={data.book_name} type="text" name="book_name" placeholder='type-here'/>
        </div>
        <div className="add-book-description flex-col">
        <p>book-descripton</p>
        <textarea onChange={onChangeHandler} value={data.description} name="description" rows="6" placeholder='add 2 or 3 line book description'required></textarea>
        </div>
        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>book category</p>
            <select onChange={onChangeHandler} value={data.category} name="category" >
              <option value="Engineering">Engineering</option>
              <option value="Pharmacy">Pharmacy</option>
              <option value="BBA">BBA</option>
              <option value="Polytechnic">Polytechnic</option>
              <option value="Law">Law</option>
              <option value="Commerce">Commerce</option>
            </select>
          </div>
          <div className="add-price flex-col">
            <p>book price</p>
            <input onChange={onChangeHandler} value={data.price} type="number" name='price' placeholder='$20'/>
          </div>
        </div>
        <div className='add-contact'>
            <p>Phone_no</p>
            <input onChange={onChangeHandler} value={data.contact_no} type="phone" name='contact_no' placeholder='type your phone no'/>
          </div>
          <div className='add-email'>
            <p>email</p>
            <input onChange={onChangeHandler} value={data.email} type="email" name='email' placeholder='type your email address'/>
          </div>
        <button type='submit' className='add-btn' >ADD</button>
      </form>
    </div>
  )
}

export default Add

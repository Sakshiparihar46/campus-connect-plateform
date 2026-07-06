import React,{ useContext, useState } from 'react'
import { toast } from 'react-toastify';
import { StoreContext } from '../context/Context';
import { assets } from '../assets/assets';
import  axios  from 'axios';
import './AddEvent.css'

function AddEvent() {
   const [image,setImage]=useState(false);
      const {url,token,fetchEventList}=useContext(StoreContext);
      const [data,setData]=useState({
        venue:"",
        link:""
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
      formData.append("link",data.link);
      formData.append("venue",data.venue);
      formData.append("image",image);

      const response=await axios.post(url+"/api/event/add",formData,{
        headers:{
          token:token
        }
      });
      await fetchEventList();
      if(response.data.success){
        setData({
         link:"",
         venue:""
        });
        setImage(false);
        toast.success(response.data.message);
      }else{
        toast.error(response.data.message);
      }
    }catch(error){
      toast.error(error.response?.data?.message || "Error adding event");
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
   
               <div className="add-link">
             <p >link:</p>
             <input className='add-link-input' onChange={onChangeHandler} value={data.link} type="text" name="link" placeholder='type-here '/>
           </div>
               <div className="add-venue">
             <p >venue:</p>
             <input className='add-venue-input' onChange={onChangeHandler} value={data.venue} type="text" name="venue" placeholder='type-here the venue of this event'/>
           </div>
           <button type='submit' className='add-btn' >ADD</button>
           </form>
       </div>
  )
}

export default AddEvent

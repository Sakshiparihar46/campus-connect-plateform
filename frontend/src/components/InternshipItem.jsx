import React,{useContext} from 'react'
import { toast } from 'react-toastify';
import { StoreContext } from '../context/Context'
import { assets } from '../assets/assets'
import axios from 'axios';
import './InternshipItem.css';
function InternshipItem({ id, image, link }) {
  const { token, url, fetchInternshipList } = useContext(StoreContext);

  const removeInternship = async (internshipId) => {
    try {
      const response = await axios.post(url + "/api/internship/remove", { id:internshipId}, { headers: { "Authorization": `Bearer ${token}` } });
      await fetchInternshipList();
      if (response.data.success) {
        toast.success(response.data.message);
      } else {
        toast.error(response.data?.message||"error");
      }
    } catch (err) {
      const status = err?.response?.status;
      const msg = err?.response?.data?.message || err?.message || "Request failed";
      toast.error(msg);
      console.error(err);
    }
  }


  return (
    <div className='internship-item'>
      <div>
        <img className='internship-item-img' src={image}></img>
      </div>
      <div className='internship-item-info'>
        {token ? <img onClick={() => removeInternship(id)} className="internship-item-image" src={assets.cross_icon} alt="" /> : <></>}
        <a target='_blank' href={link} className='internship-item-link'>click here to visit and apply</a>
      </div>
    </div>
  )
}

export default InternshipItem

import React from 'react'
import axios from 'axios';
import {StoreContext} from '../context/Context'

export default function LoginPopup({setShowLogin}) {
    const {url,setToken}=useContext(StoreContext);
    const [currState,setCurrState]=useState("Login");


    const [data,setData]=useState({
        Student_Id:"",
        email:"",
        password:""
    });


    const onChangeHandler=(event)=>{
        const name=event.target.value;
        const value=event.target.value;
        setData(data=>({...data,[name]:value}));
    }

    const onLogin=async(event)=>{
        event.preventDefault();
        let newUrl=url;
        if(currState=="Login"){
            newUrl+="/api/user/login"
        }else{
            newUrl+="/api/user/register"
        }
        const response=await axios.post(newUrl,data);

        if(response.data.success){
            setToken(response.data.token);
            localStorage.setItem("token",response.data.token);
            setShowLogin(false);
        }else{
            alert(response.data.mesaage);
        }
    }


  return (
    <div>
      
    </div>
  )
}

import React from 'react'
import axios from 'axios';
import {StoreContext} from '../context/Context'
import {assets} from '../assets/assets'

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
    <div className='login-popup'>
      <form onSubmit={onLogin} className='login-popup-container'>
        <div className='login-popup-title'>
            <h2>{currState}</h2>
            <img onClick={()=>setShowLogin(false)}src={assets.cross_icon} alt="" />
        </div>
        <div className='login-popup-input'>
        <input type='text'onChange={onChangeHandler} value={data.Student_Id} placeholder='your student id' required>Student_Id</input>
        <input type='email'onChange={onChangeHandler} value={data.email} placeholder='please enter your email' required>email</input>
        <input type='password'onChange={onChangeHandler} value={data.email} placeholder='type your password' required>password</input>
        </div>
        <button type='submit'>{currState=="sign up"?"Create Account":"Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required/>
          <p>By continuing, i agree to the terms of use & privacy policy. </p>
        </div>
        {currState==="Login"? <p>Create a new account? <span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>: <p>Already add an account? <span onClick={()=>setCurrState("Login")}>login here</span></p>}
      </form>
    </div>
  )
}

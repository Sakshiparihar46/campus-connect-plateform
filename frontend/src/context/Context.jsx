import { createContext } from "react";
import { useState,useEffect } from "react";
import axios from 'axios';

export const StoreContext=createContext(null);
const StoreContextProvider=(props)=>{
const [token,setToken]=useState("");
const url="http://localhost:3000"
const [bookList,setBookList]=useState([]);
const [internshipList,setInternshipList]=useState([]);
const [eventList,setEventList]=useState([]);


const fetchBookList=async()=>{
    const response=await axios.get(`${url}/api/book/list`);
    setBookList(response.data.data);
  }

const fetchInternshipList=async()=>{
    const response=await axios.get(`${url}/api/internship/list`);
    setInternshipList(response.data.data);
  }

const fetchEventList=async()=>{
    const response=await axios.get(`${url}/api/event/list`);
    setEventList(response.data.data);
  }

useEffect(()=>{
    async function loadData(){
        await fetchBookList();
        await fetchInternshipList();
        await fetchEventList();
    }
    loadData();
   },[]);

const contextValue={
    url,
    token,
    setToken,
    bookList,
    internshipList,
    eventList,
    fetchBookList,
    fetchInternshipList,
    fetchEventList
}
return (
    <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
)
}
export default StoreContextProvider;
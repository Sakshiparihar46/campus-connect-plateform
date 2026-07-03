import { createContext } from "react";
import { useState,useEffect } from "react";
import axios from 'axios';

export const StoreContext=createContext(null);
const StoreContextProvider=(props)=>{
const [token,setToken]=useState("");
const url="http://localhost:3000"
const [bookList,setBookList]=useState([]);


const fetchBookList=async()=>{
    const response=await axios.get(`${url}/api/book/list`);
    setBookList(response.data.data);
  }

useEffect(()=>{
    async function loadData(){
        await fetchBookList();
    }
    loadData();
   },[]);

const contextValue={
    url,
    token,
    setToken,
    bookList,
    fetchBookList
}
return (
    <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
)
}
export default StoreContextProvider;
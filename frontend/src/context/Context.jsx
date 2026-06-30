import { createContext } from "react";
import { useState,useContext } from "react";

export const StoreContext=createContext(null);
const StoreContextProvider=(props)=>{
const [token,setToken]=useState("");
const url="http://localhost:3000"
const [bookList,setBookList]=useState([]);


const contextValue={
    url,
    token,
    setToken,
    bookList
}

const fetchBookList=async()=>{
    const response=await axios.get(`${url}/api/book/list`);
    setBookList(response.data.data);
  }
return (
    <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
)
}
export default StoreContextProvider;
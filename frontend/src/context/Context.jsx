import { createContext } from "react";
import { useState,useContext } from "react";

export const StoreContext=createContext(null);
const StoreContextProvider=(props)=>{
const [token,setToken]=useState("");
const url="http://localhost:3000"
const contextValue={
    url,
    token,
    setToken
}
return (
    <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
)
}
export default StoreContextProvider;
import { useState, createContext } from "react";

export const PharmaContext = createContext();

export const PharmaProvider = (props)=> {
    const [currentUser,setCurrentUser]= useState(null);
   
    return (
        <PharmaContext.Provider value={[currentUser,setCurrentUser]} > 
            {props.children}
        </PharmaContext.Provider>
    );
}
'use client';

import React, { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext(null);

function ThemeContextProvider({ children }) {

    const [theme, setTheme] = useState("dark");

    const toggleTheme = () => {
        if(theme === "light"){
            setTheme("dark");
            document.documentElement.classList.add("dark");
        }else{
            setTheme("light");
            document.documentElement.classList.remove("dark");
        }
    }

    useEffect(()=>{
        document.documentElement.classList.add("dark");
    },[]);


  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
        { children }
    </ThemeContext.Provider>
  )
}

export function useTheme(){
    const context = useContext(ThemeContext);

    if(context === null){
        throw new Error("useTheme must be used within an ThemeContextProvider");
    }

    return context;
}


export default ThemeContextProvider
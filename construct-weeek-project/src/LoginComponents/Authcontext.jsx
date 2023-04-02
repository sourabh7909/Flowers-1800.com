
import React, { useState } from 'react'
import { createContext } from 'react'
export const Auth=createContext()
const AuthcontextProvider = ({children}) => {
const [token,settoken]=useState("")
const [isAuth,setisAuth]=useState(false)
const [totalcartlength,settotalcartlength]=useState(0)
const [totalAmount,setallAmount]=useState(0)

const totalcartdata=(totalcartlength)=>{
settotalcartlength(totalcartlength)
}

const login=(token)=>{
    settoken(token)
   if(token){
    setisAuth(true)
   }
}
console.log(token)
console.log(isAuth)

const logout=()=>{
    settoken("")
  setisAuth(false)
}
  return (
    <Auth.Provider value={{login,isAuth,logout,totalcartdata,totalcartlength,setallAmount,totalAmount}}>
       {children}
    </Auth.Provider>
  )
}

export default AuthcontextProvider
import { Box } from '@chakra-ui/react'
import React, { useState } from 'react'
import { createContext } from 'react'
export const Auth=createContext()
const AuthcontextProvider = ({children}) => {
const [token,settoken]=useState("")
const [isAuth,setisAuth]=useState(false)

const login=(token)=>{
    settoken(token)
   if(token){
    setisAuth(true)
   }
}
console.log(token)
console.log(isAuth)
console.log()
const logout=()=>{
    settoken("")
  setisAuth(false)
}
  return (
    <Auth.Provider value={{login,isAuth,logout}}>
       {children}
    </Auth.Provider>
  )
}

export default AuthcontextProvider
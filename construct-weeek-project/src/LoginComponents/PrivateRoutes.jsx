import React from 'react'
import { useContext } from 'react'
import { Auth } from './Authcontext'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

function PrivateRoutes({children}) {
    const {isAuth}=useContext(Auth)
    const navigate=useNavigate()
    if(!isAuth){
    return navigate("/login")
    }
    return children
}
export default PrivateRoutes
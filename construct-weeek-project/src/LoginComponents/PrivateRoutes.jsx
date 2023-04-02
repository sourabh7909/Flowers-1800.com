import React from 'react'
import { useContext } from 'react'
import { Auth } from './Authcontext'
import { Navigate, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

function PrivateRoutes({children}) {
    const {isAuth}=useContext(Auth)
    console.log(isAuth)
    const navigate=useNavigate()
    if(!isAuth){
    // return navigate("/login")
    return <Navigate to='/login'/>
    }
    return children
}
export default PrivateRoutes
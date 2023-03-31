import { Box } from '@chakra-ui/react'
import React from 'react'
import axios from "axios"

 export const navbar = () => {
    return axios.get("http://localhost:8080/navbar")
}

export const folwers=()=>{
    return axios.get("http://localhost:8080/send_flowers")
}

export const Reccomnded=()=>{
   return axios.get("http://localhost:8080/Reccomnded")
}
export const Explore=()=>{
    return axios.get("http://localhost:8080/Explore")
 }
 export const Trending=()=>{
    return axios.get("http://localhost:8080/Trending")
 }
 export const MademeSmiles=()=>{
    return axios.get("http://localhost:8080/MademeSmiles")
 }
 export const Greatthings=()=>{
    return axios.get("http://localhost:8080/Greatthings")
 }
 export const Productslist=({sortby,orderby,filterval})=>{
   const url="http://localhost:8080/Productslist"
   if(filterval==""){
     return axios.get(url,{
      params:{
         _sort:sortby,
         _order:orderby
      }
     })
   }
   return axios.get(url,{
      params:{
         _sort:sortby,
         _order:orderby,
         isName:filterval
      }
   })
 }
 export const Singleproduct=({id})=>{
   return axios.get(`http://localhost:8080/Productslist/${id}`)
 }
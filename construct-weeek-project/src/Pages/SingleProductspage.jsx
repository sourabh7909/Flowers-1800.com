import { Box } from '@chakra-ui/react'
import React from 'react'
import Navbar from '../HomeComponents/Navbar'
import Navdiffproductlist from '../ProductComponents/Navdiffproductlist'
import Homesection from '../SingleProducrComponents/Homesection'
import SinglePr from '../SingleProducrComponents/SinglePr'

const SingleProductspage = () => {
  return (
    <Box>
        <Navbar/>
        <Navdiffproductlist/>
       <Homesection/>
       <SinglePr/>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
    </Box>
  )
}

export default SingleProductspage
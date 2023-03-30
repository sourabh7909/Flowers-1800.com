import React from 'react'
import { Box } from '@chakra-ui/react'
import Navbar from '../HomeComponents/Navbar'
import Difrrent_section from '../HomeComponents/Difrrent_section'
import Big_image1 from '../HomeComponents/Big_image1'
import SendFower from '../HomeComponents/SendFower'
import Big_image2 from '../HomeComponents/Big_image2'
import Recommended from '../HomeComponents/Recommended'
import Two_images from '../HomeComponents/Two_images1'
import Big_image3 from '../HomeComponents/Big_image3'
import Explores from '../HomeComponents/Explore'
import Tow_images2 from '../HomeComponents/Tow_images2'
import Big_image4 from '../HomeComponents/Big_images4'
import Trendings from '../HomeComponents/Trending'
import Big_image5 from '../HomeComponents/Big_image5'
import MademeSmile from '../HomeComponents/MademeSmile'
import GreatThings from '../HomeComponents/GreatThings'
import FlowerDelivery from '../HomeComponents/FlowerDelivery'
import Footer from '../HomeComponents/Footer'


const Home = () => {
  return (
    <Box>
        <Navbar/>
        <Difrrent_section/>
        <Big_image1/>
        <SendFower/>
        <Big_image2/>
        <Recommended/>
        <Two_images/>
        <Big_image3/>
        <Explores/>
        <Tow_images2/>
        <Big_image4/>
        <Trendings/>
        <Big_image5/>
        <MademeSmile/>
        <GreatThings/>
        <FlowerDelivery/>
        <Footer/>
    </Box>
    
  )
}

export default Home
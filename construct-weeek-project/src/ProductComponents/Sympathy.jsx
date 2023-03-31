import { Box,Center,Flex,Grid,HStack,Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Sympathy = () => {
  return (
   
    <Box>
      <Box mt={'15px'}>
        <Text  pl={'70px'} fontSize={'14px'}><a color='red'>Home</a> <a>Sympathy</a> Sympathy Gifts & Condolence Flower Delivery</Text>
      </Box>
      <Flex mt={'20px'}>
      <Text mt={2} pl={'67px'} fontWeight={'bold'} fontSize={'24px'} fontFamily={'LatoMedium, sans-serif'} color={'rgb(101, 56, 139)'}>Sympathy</Text>
      <Text ml={10} mr={'40px'} w={'0.5px'} h={'55px'} border='0.5px solid gray' ></Text>
      <Text color={'rgb(0, 0, 0)'} fontFamily= "LatoMedium,sans-serif" fontSize={'15px'}>Our wide selection of flowers and gifts, from hand-arranged flowers to gourmet fruit baskets, provide a tasteful means to express your deepest condolences. Appropriate to send to the home or office, each gift includes your personal sympathy message.<a to="/" color='#65388b'>Read more</a></Text>
      </Flex>
    </Box>
  
  )
}

export default Sympathy
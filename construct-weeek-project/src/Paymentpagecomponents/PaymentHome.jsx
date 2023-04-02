import { Box, Center, FormControl, FormLabel,Input,Button,Text, HStack } from '@chakra-ui/react'
import React from 'react'
import { cartData } from '../Getdata/Axios'
import { useEffect,useState } from 'react'
const PaymentHome = () => {
//     const [navtop, setnavtop] = useState([])
//     const fetchandupdatedata = async () => {
//         try {
//             await cartData()
//                 .then((res) => setnavtop(res.data))
//         } catch (error) {
//             console.log(error)
//         }
//     }
//     useEffect(() => {
//         fetchandupdatedata()
//     }, [])
   
  return (
    
    <Box border="1px solid red">
       <Center>
      
        <Box w={"28%"} p={'2%'} boxShadow={'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;'}>
            <Center><Text mb={'40px'} fontSize={'27px'}  fontWeight={'semibold'}>Checkout</Text></Center>
            <Center> <Box w={'100%'} h={'400px'} >
                <FormControl>
                    <FormLabel >Card number</FormLabel>
                    <Input type={'number'} mb={'20px'} border={'1px solid gray'} borderRadius={"3px"} focusBorderColor='1px solid silver'  w={'100%'}></Input>
                    <FormLabel>Expiry date</FormLabel>
                    <Input type={'number'} mb={'20px'} border={'1px solid gray'} borderRadius={"3px"} focusBorderColor='1px solid silver'></Input>
                    <HStack>
                    <Box>
                        <FormLabel>CVV</FormLabel>
                        <Input placeholder='***' border={'1px solid gray'} borderRadius={"3px"} focusBorderColor='1px solid silver' type={'password'}></Input>
                    </Box>
                    <Box>
                        <FormLabel>ZIP Code</FormLabel>
                        <Input placeholder='06355' border={'1px solid gray'} borderRadius={"3px"} focusBorderColor='1px solid silver' type={'number'}></Input>
                    </Box>
                    </HStack>
                </FormControl>
                <Text mt={'20px'} fontFamily={'Helvetica, Arial, Verdana, sans-serif !important'} fontSize={'13px'} textAlign={'center'}>if you dont't cancel your subscription before the trial ends on Novmber 30,2023,you agree that you will automatically be charged</Text>
            </Box>
            
            </Center>
            <Button mt={'43px'} _hover={'none'} borderRadius={'3px'} color={'white'} fontWeight={'bold'} height={'50px'} backgroundColor={'#00C876'} w={'100%'}>Pay</Button>
        </Box>
    
        </Center>
    </Box>
  )
}

export default PaymentHome
import { Box, Center, FormControl, FormLabel,Input,Button,Text, HStack,Progress } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useContext } from 'react'
import { Auth } from '../LoginComponents/Authcontext'
import { useNavigate } from 'react-router-dom'

const PaymentHome = () => {
    const navigate=useNavigate()
    const {totalAmount}=useContext(Auth)
    const [progress,setprogrees]=useState(false)
    console.log(totalAmount)
    const handleclick=()=>{
        setprogrees(!progress)
        console.log("working")
        setTimeout(() => {
           navigate("/paymentsuccess")
        }, 2000);
    }
  return (
    // backgroundImage={'https://cdn.dribbble.com/users/1487848/screenshots/3835483/transitionselect_payment.gif'}
    <Box  backgroundImage={'https://cdn.dribbble.com/users/1487848/screenshots/3835483/transitionselect_payment.gif'} w={'100%'} >
          {progress? <Progress size='xs' isIndeterminate />:""}
       <Center>
       
        <Box  backgroundColor={'white'}  w={"28%"} p={'2%'} boxShadow={' rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}>
            <Center><Text mb={'40px'} fontSize={'27px'}  fontWeight={'semibold'}>Checkout</Text></Center>
            <Center> <Box w={'100%'} h={'500px'} >
                <FormControl>
                    <FormLabel >Card number</FormLabel>
                    <Input backgroundColor={'white'} placeholder='4000 1234 5678 9010' type={'number'} mb={'20px'} border={'1px solid gray'} borderRadius={"3px"} focusBorderColor='1px solid silver'  w={'100%'}></Input>
                    <FormLabel>Expiry date</FormLabel>
                    <Input backgroundColor={'white'} placeholder='02/12'   type={'text'} mb={'20px'} border={'1px solid gray'} borderRadius={"3px"} focusBorderColor='1px solid silver'></Input>
                    <HStack>
                    <Box>
                        <FormLabel>CVV</FormLabel>
                        <Input backgroundColor={'white'} placeholder='***' border={'1px solid gray'} borderRadius={"3px"} focusBorderColor='1px solid silver' type={'password'}></Input>
                    </Box>
                    <Box>
                        <FormLabel>ZIP Code</FormLabel>
                        <Input backgroundColor={'white'} placeholder='06355' border={'1px solid gray'} borderRadius={"3px"} focusBorderColor='1px solid silver' type={'number'}></Input>
                    </Box>
                    </HStack>
                </FormControl>
                <Text mt={'20px'} fontFamily={'Helvetica, Arial, Verdana, sans-serif !important'} fontSize={'13px'} textAlign={'center'}>if you dont't cancel your subscription before the trial ends on Novmber 30,2023,you agree that you will automatically be charged</Text>
            </Box>
            
            </Center>
            <Button onClick={handleclick} mt={'43px'} _hover={'none'} borderRadius={'3px'} color={'white'} fontWeight={'bold'} height={'50px'} backgroundColor={'#00C876'} w={'100%'}>Pay ${totalAmount}</Button>
        </Box>
      
        </Center>
    </Box>
  )
}

export default PaymentHome
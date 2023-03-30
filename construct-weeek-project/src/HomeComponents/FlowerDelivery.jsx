import { Box,Center,HStack,Text,Image } from '@chakra-ui/react'
import React from 'react'

const FlowerDelivery = () => {
  return (
    <Box>
    <Center>
    <HStack mt={'40px'}>
        <Text color={'#212121'} fontFamily={'LatoMedium,sans-serif'} fontWeight={'bold'} fontSize={'21px'}>More About Our Flower Delivery</Text>
       <Center><Text textAlign={'center'} alignItems={'center'} width={'26px'} fontWeight={'semibold'} fontSize="30px">+</Text></Center> 
    </HStack>
    </Center>
    <Center>
    <HStack mt={'50px'} w={'24%'}>
    <Image mr={"14px"} borderRadius={'5px'} src="https://tse2.mm.bing.net/th?id=OIP.S86UfCLZrqzji-mPbwdfiQHaFj&pid=Api&P=0" w={'15%'} h={'30px'}></Image>
    <Text textAlign={'center'}>Shop now. Pay with Klarna. Learn more</Text>
 </HStack>
    </Center>
 <Image src="https://consent.trustarc.com/asset/cookiepref.png"></Image>

 </Box>
  )
}

export default FlowerDelivery
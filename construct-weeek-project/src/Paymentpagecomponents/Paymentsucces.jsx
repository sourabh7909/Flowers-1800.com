import React from 'react'
import { Box,Image,Center,Text } from '@chakra-ui/react'

const Paymentsucces = () => {
  return (
    <Center><Box mt={'50px'}>
        {/* <Center><Text fontSize={'26px'} fontWeight={'semibold'}>Payment Succesfull</Text></Center> */}
        <Box position={'relative'} borderRadius={'50%'}>
        <Image borderRadius={'2%'} src="https://i.pinimg.com/originals/e8/06/52/e80652af2c77e3a73858e16b2ffe5f9a.gif"  ></Image>
        </Box>
        <Center><Text top={0} mt={"32%"} color={"white"} position={'absolute'} fontSize={'30px'} fontWeight={'bold'}>Payment Succesfull</Text></Center>
    </Box>
    </Center>
  )
}

export default Paymentsucces
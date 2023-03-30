import { Box,Button,Center,VStack,Text, ListItem, UnorderedList } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const LoginLadingPage = () => {
  const navigate=useNavigate()
  return (
    
    <Box >
    <Center>
      <Box pt={'20px'} borderRadius={'3px'} mt={'10vh'}  h={'55vh'} width={'30%'} boxShadow={' rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;'}>
       
          <Center> <Button cursor={'pointer'} onClick={()=>navigate('/login')}  _hover={'none'} fontWeight={'bold'} borderRadius={'3px'} m={'10px'} w={'70%'} backgroundColor={'#65388b'} color={'#fff !important'}>SIGN IN</Button></Center>
          <Center> <Text color={'black'} fontWeight="bold">Don't have an account?</Text></Center>
           <Center><Text color={'#65388b'}fontWeight="bold" cursor={'pointer'} onClick={()=>navigate('/signin')} >Click Here</Text></Center>
          <Box mt={'30px'} mb={'20px'} pl={'15px'} lineHeight={'25px'}>
           <Text  color={'#65388b'} textAlign={'left'}>Your Acccount</Text>
           <Text  color={'#65388b'}>Track Your Orders</Text>
           <Text  color={'#65388b'}>Join Celebrations Passport</Text>
           </Box>
          <Center><Box p={'10px'} lineHeight={'25px'} w={'90%'} borderRadius={'5px'} border={'1px solid gray'}>
              <UnorderedList>
                <Text color={'black'} p={0} fontWeight="bold">Benefits of Registration</Text>
                <ListItem>Fast secure checkout</ListItem>
                <ListItem>Exclusive promotions & offers</ListItem>
                </UnorderedList>
           </Box>
           </Center>
      </Box>
      </Center>
    </Box>
  )
}

export default LoginLadingPage
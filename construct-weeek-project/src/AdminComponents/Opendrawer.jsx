import { HamburgerIcon } from '@chakra-ui/icons'
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    useDisclosure,
   RadioGroup,Text,Box,Image,Flex, Spacer
  } from '@chakra-ui/react'
  import { Link } from 'react-router-dom'
import React from 'react'

  function OpenDrawer() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = React.useState('left')
    

    return (
      <>
        <RadioGroup defaultValue={placement} onChange={setPlacement}>
          {/* <Stack direction='row' mb='4'>
            <Radio value='top'>Top</Radio>
            <Radio value='right'>Right</Radio>
            <Radio value='bottom'>Bottom</Radio>
            <Radio value='left'>Left</Radio>
          </Stack> */}
        </RadioGroup>
        <HamburgerIcon ml={2} cursor={'pointer'} onClick={onOpen}></HamburgerIcon>
        {/* <Button colorScheme='blue' onClick={onOpen}>
          Open
        </Button> */}
        <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottomWidth='1px'>Welcome Admin</DrawerHeader>
            <DrawerBody>
              {/* <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p> */}
              <Box>
             <Link to="/"> <Flex>
              <Text mt={"10px"}>Home Page</Text>
              <Spacer></Spacer>
              <Image src="https://tse1.mm.bing.net/th?id=OIP.qhTzE7ydFzi5YT-YWKuyTAHaHa&pid=Api&P=0" w={'12%'} mt={2}></Image>
              </Flex></Link>
              <Link to="/productpage"><Flex>
              <Text mt={"10px"}>Product Page</Text>
              <Spacer></Spacer>
              <Image src="https://tse2.mm.bing.net/th?id=OIP.AwJzA--cIbMfXb3IsB9MvgHaHt&pid=Api&P=0" w={'12%'} mt={2}></Image>
              </Flex></Link>
              <Link to="/login"><Flex>
              <Text mt={"10px"}>Login Page</Text>
              <Spacer></Spacer>
              <Image src="https://tse4.mm.bing.net/th?id=OIP.xS_zX6VNQPlouu_kjL0SAQHaHS&pid=Api&P=0" w={'12%'} mt={2}></Image>
              </Flex></Link>
            <Link to="/cartpage"> <Flex>
             <Text mt={"10px"}>Cart Page</Text>
             <Spacer></Spacer>
             <Image src="https://tse2.mm.bing.net/th?id=OIP.j9nph91k0vyd_ngx_WUNKgHaHJ&pid=Api&P=0" w={'12%'} mt={2}></Image>
             </Flex></Link>
            <Link to="/payment"> <Flex>
             <Text mt={"10px"}>Payment Page</Text>
             <Spacer></Spacer>
             <Image src="https://tse1.mm.bing.net/th?id=OIP.eeIVGfUdgCeibDgcqo1kYQHaF6&pid=Api&P=0"  w={'12%'} mt={2}></Image>
             </Flex></Link>
            
              </Box>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
  }
  export default OpenDrawer
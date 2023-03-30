import React from 'react'
import { Box, SimpleGrid,Image, Center, Flex, Input, Spacer,Text, Button} from '@chakra-ui/react'
import { navbar } from '../Getdata/Axios'
import { useEffect } from 'react'
import { useState } from 'react'
import Details from '../LoginComponents/LoginLadingPage'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { Auth } from '../LoginComponents/Authcontext'


const Navbar = () => {
    const {isAuth,logout}=useContext(Auth)
    const [navtop, setnavtop] = useState([])
    const navigate=useNavigate()
    const fetchandupdatedata = async () => {
        try {
            await navbar()
                .then((res) => setnavtop(res.data))
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchandupdatedata()
    }, [])
    return (
        <Box>
            <hr></hr>
            <Center>
            <SimpleGrid w={'88%'} columns={11} gap={15}>
                {navtop.map((el) =>
               
                <Box key={el.id}>
                    <Image src={el.image} w={'70px'} alt={el.id} h={'60px'}></Image>
                </Box>
            )}
            </SimpleGrid>
            </Center>
            <Center>
            <Flex w={'89%'} mb={2} >
             <Image src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/bltce6d6c480577e10e/5d4866eff9ece57fa9a82245/flowers.png?quality=60&auto=webp&optimize={medium}" w="10%"></Image>
             <Spacer/>
             <Input placeholder='What are you looking for?' border="1px solid silver" variant='unstyled' ml={20} pl={4}   size='md' mt={3} borderLeftRadius={2} borderRightRadius={'none'} w={'45%'} h={'40px'} />
             <Button _hover={'none'} backgroundColor='#65388b' color="white"  width={'7.5%'} borderLeftRadius={'none'} mt={3}>SEARCH</Button>
            <Spacer/>
                <Flex w={'18%'} >
                <Box>
                <Image src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt34a8699231b452d4/reminders_icon_black.svg" w={'65%'} pl={3} h={'45px'}></Image>
                <Text fontSize='xs'>Reminders</Text>
                </Box>
                <Spacer/>
              {!isAuth?<Box onClick={()=>navigate('/loginlanding')} cursor="pointer">
                <Image src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt88337dc20d1d8278/5e178293942caf0fc36b77ab/Header-Icon-PWA-profile.svg" w={'65%'} h={'45px'}></Image>
                <Text fontSize='xs'>Sign In</Text>
                </Box>:<Box onClick={logout} cursor="pointer">
                <Image src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt88337dc20d1d8278/5e178293942caf0fc36b77ab/Header-Icon-PWA-profile.svg" w={'65%'} h={'45px'}></Image>
                <Text fontSize='xs'>Logout</Text>
                </Box>}
                {/* <Box onClick={()=>navigate('/loginlanding')} cursor="pointer">
                 <Image src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt88337dc20d1d8278/5e178293942caf0fc36b77ab/Header-Icon-PWA-profile.svg" w={'65%'} h={'45px'}></Image>
                <Text fontSize='xs'>Sign In</Text>
                 </Box>  */}
                <Spacer/>
                <Box>
                <Image src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/bltd7f3af8e242d37c1/5e1782936430b50f03d6ccc3/Header-Icon-PWA-truck.svg?height=25&width=44" pl={1} w={'65%'} h={'45px'}></Image>
                <Text fontSize='xs'>My Orders</Text>
                </Box>
                <Spacer/>
                <Box>
                <Image src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt7888ec93d3d5c1ec/5e17829300c38f0f022d3646/Header-Icon-PWA-bag.svg?height=25&width=44" w={'65%'}h={'45px'}></Image>
                <Text fontSize='xs'>Cart</Text>
                </Box>
                </Flex>
            </Flex>
            </Center>
            <hr></hr>
            <hr></hr>
            {/* <hr style={{
            border:"1px solid rgb(97, 94, 94) ",
        }}/> */}
        </Box>
        
    )
}

export default Navbar
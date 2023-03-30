import { Box, Center, Image, Spacer, Text, Flex, Grid, HStack, FormControl, FormLabel, Input, Button, Link, Alert, AlertIcon, Spinner, Stack } from '@chakra-ui/react'
import axios from 'axios'
import React, { useState } from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Auth } from './Authcontext'

const LoginPage = () => {
    const { isAuth, login } = useContext(Auth)
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const navigate = useNavigate()
    const handleclick = () => {
        axios.post("https://reqres.in/api/login", {
            email, password
        })
            .then((res) => login(res.data.token))
    }
    if (isAuth) {
        setTimeout(() => {
              navigate("/")
        }, 2000)
    }

    return (
        <Box>
            <Box>
                <Box h={'100vh'} display={'flex'} justifyContent="center" alignItems={'center'} backgroundImage={'http://thewowstyle.com/wp-content/uploads/2015/03/2-flower-wallpaper.jpg'}>
                   <Box>
                    <Center>
                    <Box width={'40%'}>
                   {isAuth ? <Stack spacing={3}>
                    <Alert status='success'>
                        <AlertIcon />
                        Login success
                    </Alert>
                </Stack> : ""
                }
                </Box>
                </Center>
                    <HStack pt={'25px'} gap={'0px'} templateColumns={'repeat(2,1fr)'}>
                        <Box pt={'20px'} ml={'80px'} borderRadius={'5px'} height={'535px'} width="35%" backgroundColor={'white'} boxShadow={' rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;'}>
                            <Center><Image src={'https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/bltce6d6c480577e10e/5d4866eff9ece57fa9a82245/flowers.png?quality=60&auto=webp&optimize={medium}'}></Image></Center>
                            <Center><Text mt={'17vh'} mb={'17vh'} fontWeight={'bold'} color={'#4a4a4a'} w={'60%'}>Create an account for faster checkout and order tracking.</Text></Center>

                            <Center><Text mb={'15px'} color={'#4a4a4a'} w={'50%'}>One Account, 12 Brands</Text></Center>

                            <Center><Image src="https://cdn1.harryanddavid.com/wcsstore/HarryAndDavid/images/Auth0/celebrations_family_of_brands.png" w={"60%"}></Image></Center>
                            <Flex fontSize={'10px'} padding={'15px'}>
                                <Text>Terms of Use</Text>
                                <Spacer />
                                <Text>Privacy Notice</Text>
                            </Flex>
                        </Box>
                        <Box p={'30px'} borderRadius={'5px'} backgroundColor={'white'} width={'42%'} height={'535px'} boxShadow={' rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;'}>
                            <Text color={"#4a4a4a"} fontWeight={'bold'} fontSize={'20px'}>Sign In</Text>
                            <FormControl>
                                {/* <Flex mt={'10px'} gap={0}>
                    <Box>
                    <FormLabel lineHeight={'5px'} fontSize={'13px'}>Frist Name</FormLabel>
                    <Input onChange={(e)=>setfristname(e.target.value)} width={'95%'} borderRadius={'3px'} focusBorderColor={"black"}  h="31px" border="1px solid gray"></Input>
                    </Box>
            
                    <Box>
                    <FormLabel lineHeight={'5px'} fontSize={'13px'}>Last Name</FormLabel>
                    <Input onChange={(e)=>setlastname(e.target.value)} width={'95%'} borderRadius={'3px'} focusBorderColor={"black"} h="31px" border="1px solid gray"></Input>
                    </Box>
                    </Flex> */}
                                <Box mb={'30px'}>
                                    <FormLabel mt={'20px'} lineHeight={'5px'} fontSize={'13px'}>Email</FormLabel>
                                    <Input onChange={(e) => setemail(e.target.value)} width={'98%'} borderRadius={'3px'} focusBorderColor={"black"} h="31px" border="1px solid gray"></Input>
                                    <FormLabel mt={'20px'} lineHeight={'5px'} fontSize={'13px'}>Password</FormLabel>
                                    <Input type={'password'} onChange={(e) => setpassword(e.target.value)} width={'98%'} borderRadius={'3px'} focusBorderColor={"black"} h="31px" border="1px solid gray"></Input>
                                </Box>
                                <Button onClick={handleclick} bgColor={'#5e3987'} color="#fff" borderRadius={'4px'} cursor={'pointer'} _hover="none" w={'98%'} mt={'20px'}>Create Account</Button>
                                <Text mt={'10px'} mb={'30px'} fontSize={'13px'}>By continuing, you agree to our <Link color={'#4a90e2'}>Terms of Use</Link> and <Link color={'#4a90e2'}>Privacy Notice</Link>.</Text>
                            </FormControl>

                            <HStack>
                                <Text h={'1px'} w={'33%'} backgroundColor={"1px solid gray"}></Text> <Text>Or Sigin With</Text><Text h={'1px'} w={'33%'} backgroundColor={"1px solid gray"}></Text>
                            </HStack>

                            <HStack mt={'15px'}>
                                <Center> <Image src="https://cdn1.harryanddavid.com/wcsstore/HarryAndDavid/images/Auth0/fb_signin.png" width={'45%'} >
                                </Image>
                                    <Image ml={2} src="https://cdn1.harryanddavid.com/wcsstore/HarryAndDavid/images/Auth0/btn_google_signin_light_normal_web@2x.png" width={'45%'} h="40px">
                                    </Image>
                                </Center>
                            </HStack>

                        </Box>
                    </HStack>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default LoginPage
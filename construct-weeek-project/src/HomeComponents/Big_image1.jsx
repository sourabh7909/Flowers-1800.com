import { Box, Button, Center, Image, Text,Flex,Input, FormLabel, HStack, VStack } from '@chakra-ui/react'
import React from 'react'

const Big_image1 = () => {
    return (
        <Box>
            <Box position={'relative'}>
                <Image src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt560de5441247b4fd/63f4e12f2abe1410912a1677/send-birthday-flowers-hero-fy23-V2.jpg?quality=85&auto=webp&optimize={medium}" />
                <Box mt={'57px'} ml={'55%'} position={'absolute'} top={0}>
                    <Text lineHeight={'15px'} textAlign={'center'} color=' rgb(0, 0, 0)' fontSize={'1.4em'} fontWeight={'semibold'} letterSpacing={'3px'}>MAKE EVERY</Text>
                    <Text textAlign={'center'} fontSize={'2em'} color={'#000000'} fontWeight={600} fontFamily={'PlayfairDisplayBlack, serif'}>BRITHDAY SPECIAL</Text>
                    <Text fontWeight={'600'} fontFamily={'LatoMedium, sans-serif'} fontSize={'1em'} color={'#000000'}>We love birthdays like we love flowers. Find everything</Text>
                    <Text textAlign={'center'} fontWeight={'600'} fontFamily={'LatoMedium, sans-serif'} fontSize={'1em'} color={'#000000'}>from party favors to personalized gifts right here.</Text>
                    <Center><Button color={'rgb(0, 0, 0)'} fontWeight={'800'} mt={2} _hover={'none'} bg={'rgb(255, 255, 255)'} height={"32px"} >SHOP NOW</Button></Center>
                </Box>
                <Center>
                <Box borderRadius={3} pl={'10%'} backgroundColor={'rgb(244, 242, 247)'} position={'absolute'} top={'0'} w={'60%'} pt={4} h={'100px'} mt={'15%'} transition={"box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"}>
                    <HStack padding={0}>
                        <Text mt={5} fontWeight={'semibold'} fontSize= '19px' color="rgb(110, 50, 144)">FIND THE PERFECT GIFT</Text>
                        <VStack  w={'20%'}  >
                        <FormLabel color="rgb(110, 50, 144)" lineHeight={"1px"}>Where is it going?</FormLabel>
                        <Input _hover={'none'} placeholder="Delivery zip code"  h={'30px'} borderRadius={2} focusBorderColor='black'  border="1px solid black" w={'95%'} ></Input>
                        </VStack>
                        <VStack   w={'20%'}>
                        <FormLabel color="rgb(110, 50, 144)" lineHeight={"1px"}>Occasion</FormLabel>
                        <Input _hover={'none'} placeholder="Birthday"  focusBorderColor='black' h={'30px'} borderRadius={2}   border="1px solid black" w={'95%'}></Input>
                        </VStack>
                        <Center><Button color={'white'} fontWeight={'600'} mt={4} _hover={'none'} bg={'#65388b'} height={"32px"} >FIND A GIFT NOW</Button></Center>
                    </HStack>
                </Box>
                </Center>
            </Box>

        </Box>
    )
}

export default Big_image1
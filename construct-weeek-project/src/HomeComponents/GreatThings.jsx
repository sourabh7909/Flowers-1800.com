import React from 'react'
import { Box, Center, HStack, Text, VStack, Image, Grid } from '@chakra-ui/react'
import { Greatthings } from '../Getdata/Axios'
import { useState, useEffect } from 'react'
const GreatThings = () => {
    const [navtop, setnavtop] = useState([])
    const fetchandupdatedata = async () => {
        try {
            await Greatthings()
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
            <Box mt={'70px'} backgroundColor={'#f5f5f5'} height={'670px'} w={'100%'}>
                <Center><Text mt={'50px'} mb={'40px'} fontFamily={'PlayfairDisplayBold, serif'} fontWeight={'bold'} color={'rgb(0, 0, 0)'} fontSize='32px'>Some of the Great Things Our Customers Say About Us</Text></Center>
                <Center>
                    <Grid w={'90%'} templateColumns={"repeat(4,1fr)"} gap={8}>
                        {navtop.map((el) =>
                            <Box key={el.id}>
                                <Box >
                                    <HStack>
                                        <VStack>
                                            <Image mb={'30px'} src={el.image} w={'30%'} />
                                            <HStack color={'#65388b'} fontSize={'150%'} >
                                                <Box>{el.star}</Box>
                                                <Box>{el.star}</Box>
                                                <Box>{el.star}</Box>
                                                <Box>{el.star}</Box>
                                                <Box>{el.star}</Box>
                                            </HStack>
                                            <Text pt={'15px'} color={'#000'} fontSize={'20px'} pb={'10px'} fontWeight={'bold'}>{el.title}</Text>
                                            <Text textAlign={'center'} color={'#000'} fontSize={'18px'} fontWeight={'normal'}>{el.feedback}</Text>
                                            <Text fontSize={'18px'} fontWeight={'bold'}>{el.name}</Text>

                                        </VStack>
                                    </HStack>
                                </Box>
                                <Text mt={el.mt} height={el.height} width={el.width} backgroundColor={el.backgroundColor} ></Text>
                            </Box>
                        )}
                    </Grid>

                </Center>
                <Center>
                <HStack ml={'60px'} mt={'40px'} >
                    <Text fontFamily={'LatoMedium,sans-serif'} color={'#1472E6'}>Powered by</Text>
                    <Image  src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/bltcf637a6e16efdb8e/5ea9acbed4b10d15d3e8cfb3/yotpo-logo.png?quality=70&auto=webp&optimize={medium}" w={'20%'}></Image>
                </HStack>
                </Center>
            </Box>
            <Center>
                <Image src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt40b361bd81392aa3/60145a6694a1800f61b51cde/FY20_Web_CEO_Banner_Desktop.jpg?quality=70&auto=webp&optimize={medium}"></Image></Center>
        </Box>
        // return (
        //     <Box mt={'70px'} backgroundColor={'#f5f5f5'} h={'500px'} w={'100%'}>
        //         <Center><Text mt={"30px"} color={'#000'} fontWeight={'bold'} fontSize={'33px'} fontFamily={'PlayfairDisplayBold, serif'}>Some of the Great Things Our Customers Say About Us</Text></Center>
        //         {navtop.map((el)=>{
        //         <Box key={el.id}>
        //             <HStack>
        //                 <VStack>
        //                     <Image src={el.image} />
        //                     <HStack>
        //                         <Box>{el.star}</Box>
        //                         <Box>{el.star}</Box>
        //                         <Box>{el.star}</Box>
        //                         <Box>{el.star}</Box>
        //                         <Box>{el.star}</Box>
        //                     </HStack>
        //                     <Text>{el.title}</Text>
        //                     <Text>{el.feedback}</Text>
        //                     <Text>– Pamela</Text>
        //                 </VStack>
        //             </HStack>
        //         </Box>
        //     })}
        //     </Box>
    )
}

export default GreatThings
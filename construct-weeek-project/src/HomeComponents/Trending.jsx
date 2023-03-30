import { Box, Text, Center, SimpleGrid, Image, Grid, Button } from '@chakra-ui/react'
import React from 'react'
import { Reccomnded, Trending } from '../Getdata/Axios'
import { useState, useEffect } from 'react'

const Trendings = () => {
    const [navtop, setnavtop] = useState([])
    const fetchandupdatedata = async () => {
        try {
            await Trending()
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
            <Center><Text mt={'50px'} mb={'20px'} we="antialiased" antialiased fontFamily={'PlayfairDisplayBold, serif'} fontWeight={'semibold'} color={'rgb(0, 0, 0)'} fontSize='26px'>Trending Flowers & Gifts</Text></Center>
            {/* <Center><Text mb={2} fontSize={'13px'} width={'80%'}>Based on your history</Text></Center> */}
            <Center>
                <Grid w={'86.5%'} templateColumns={"repeat(8,1fr)"} gap={5}>
                    {navtop.map((el) =>
                        <Box>
                            <Box overflow={'hidden'} key={el.id}>
                                <Image overflow={'hidden'}  cursor={'pointer'} src={el.image} w={'100%'} alt={el.id} ></Image>
                                {/* <Center> <Text mt={1} textAlign={'center'} fontWeight={'semibold'} fontSize={'1.1em'} color={'rgb(31, 31, 27)'}>{el.name}</Text></Center> */}

                            </Box>

                            <Center> <Text w={'100%'} mt={1} fontFamily={'LatoMedium, sans-serif'} textAlign={'center'}  fontSize={'13px'} font-weight= '400' letterSpacing={'0.5px'} color={'rgb(31, 31, 27)'}>{el.name}</Text></Center>
                            <Center> <Text color={el.color} w={'160%'} mt={1} fontFamily={'LatoMedium, sans-serif'} textAlign={'center'}  fontSize={'13px'} fontWeight= '600' letterSpacing={'0.5px'}>{el.price}</Text></Center>
                        </Box>
                    )}
                </Grid>
            </Center>
        </Box>
    )
}

export default Trendings
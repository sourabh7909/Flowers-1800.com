import { Box, Text, Center, SimpleGrid, Image, Grid, Button } from '@chakra-ui/react'
import React from 'react'
import { Reccomnded } from '../Getdata/Axios'
import { useState, useEffect } from 'react'

const Recommended = () => {
    const [navtop, setnavtop] = useState([])
    const fetchandupdatedata = async () => {
        try {
            await Reccomnded()
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
            <Center><Text mt={'50px'} mb={'20px'} fontFamily={'PlayfairDisplayBold, serif'} fontWeight={'bold'} color={'rgb(0, 0, 0)'} fontSize='4xl'>Recommended For You</Text></Center>
            <Center><Text mb={2} fontSize={'13px'} width={'80%'}>Based on your history</Text></Center>
            <Center>
                <Grid w={'80%'} templateColumns={"repeat(5,1fr)"} gap={8}>
                    {navtop.map((el) =>
                        <Box>
                            <Box overflow={'hidden'} key={el.id}>
                                <Image overflow={'hidden'} _hover={{ transform: 'scale(1.07)' }} transition={'all 0.3s'} cursor={'pointer'} src={el.image} w={'100%'} alt={el.id} ></Image>
                                {/* <Center> <Text mt={1} textAlign={'center'} fontWeight={'semibold'} fontSize={'1.1em'} color={'rgb(31, 31, 27)'}>{el.name}</Text></Center> */}

                            </Box>

                            <Box  backgroundColor={'white'} position={'relative'} mt={'-15px'}  w={'80%'} ml={"60px"} fontSize={'14px'} color={'#000'} fontFamily=" LatoMedium,sans-serif" borderRadius={0} h={'30px'} textAlign={'end'} boxShadow='rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'>{el.name}</Box>
                        </Box>
                    )}
                </Grid>
            </Center>
        </Box>
    )
}

export default Recommended
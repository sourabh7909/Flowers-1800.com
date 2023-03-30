import { Box,Center,SimpleGrid,Image,Text } from '@chakra-ui/react'
import React from 'react'
import { useState,useEffect } from 'react'
import { Explore } from '../Getdata/Axios'

const Explores = () => {
    const [navtop, setnavtop] = useState([])
    const fetchandupdatedata = async () => {
        try {
            await Explore()
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
            <Center><Text mt={'50px'} mb={'20px'} fontFamily={'PlayfairDisplayBold, serif'} fontWeight={'bold'} color={'rgb(0, 0, 0)'} fontSize='4xl'>Explore Our Self-Care Essentials</Text></Center>
            <Center>
                <SimpleGrid w={'92%'} columns={6} gap={15}>
                    {navtop.map((el) =>
                          
                        <Box overflow={'hidden'} key={el.id}>
                            <Image  overflow={'hidden'} _hover={{transform:'scale(1.07)'}} transition={'all 0.3s'} cursor={'pointer'} src={el.image} w={'100%'} alt={el.id} ></Image>
                           <Center> <Text mt={1} fontFamily={'LatoMedium, sans-serif'} textAlign={'center'} fontWeight={'bold'} fontSize={'1.1em'} color={'rgb(31, 31, 27)'}>{el.name}</Text></Center>
                        </Box>
                    )}
                </SimpleGrid>
            </Center>
            </Box>
            )
}

export default Explores
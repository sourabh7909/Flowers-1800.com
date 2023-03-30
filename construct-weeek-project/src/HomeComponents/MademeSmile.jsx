import { Box, Text, Center, SimpleGrid, Image, Grid, Button } from '@chakra-ui/react'
import React from 'react'
import { useState,useEffect } from 'react'
import { MademeSmiles } from '../Getdata/Axios'


const MademeSmile = () => {
    const [navtop, setnavtop] = useState([])
    const fetchandupdatedata = async () => {
        try {
            await MademeSmiles()
                .then((res) => setnavtop(res.data))
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchandupdatedata()
    }, [])
    return (
        <Box mt={'15px'}>
            {/* <Center><Text mt={'50px'} mb={'20px'} fontFamily={'PlayfairDisplayBold, serif'} fontWeight={'bold'} color={'rgb(0, 0, 0)'} fontSize='4xl'>Recommended For You</Text></Center> */}
            {/* <Center><Text mb={2} fontSize={'13px'} width={'80%'}>Based on your history</Text></Center> */}
            <Center>
                <Grid w={'92%'} templateColumns={"repeat(4,1fr)"} gap={2}>
                    {navtop.map((el) =>
                        <Box key={el.id}>
                            <Box overflow={'hidden'}>
                                <Image overflow={'hidden'}  cursor={'pointer'} src={el.image} w={'100%'} alt={el.id} ></Image>
                                {/* <Center> <Text mt={1} textAlign={'center'} fontWeight={'semibold'} fontSize={'1.1em'} color={'rgb(31, 31, 27)'}>{el.name}</Text></Center> */}

                            </Box>

                            {/* <Box  backgroundColor={'white'} position={'relative'} mt={'-15px'}  w={'80%'} ml={"60px"} fontSize={'14px'} color={'#000'} fontFamily=" LatoMedium,sans-serif" borderRadius={0} h={'30px'} textAlign={'end'} boxShadow='rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'>{el.name}</Box> */}
                        </Box>
                    )}
                </Grid>
            </Center>
        </Box>
    )
}

export default MademeSmile
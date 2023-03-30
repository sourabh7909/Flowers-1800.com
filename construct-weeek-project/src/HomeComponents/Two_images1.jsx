import { Box,Center,HStack,Image, SimpleGrid,Text } from '@chakra-ui/react'
import React from 'react'

const Two_images = () => {
  return (
    <Center>
    <Box width={'80%'} mt={12}>
        <SimpleGrid columns={2} gap={6}>
        <Box>
            <Image position={'relative'}  src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt29d3f3bc0810ec78/641dafd89a08934e5773ba9e/spring-bulb-event-tier-fy23-last-chance.jpg?quality=60&auto=webp&optimize={medium}" w={'100%'}></Image>
            <Box position={'absolute'} width={'39.3%'}  mt={'-45px'} backgroundColor={'rgba(0, 0, 0, 0.8)'} color={'white'} border="1px solid black" h={"45px"}>
                <Text mt={1} textAlign={'left'} pl={'10px'} fontWeight={'600'} fontSize={'18px'}>Spring Bulb Event</Text>
            </Box>
        </Box>
        <Box>
            <Image src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt42bd2ef9247e4942/64148c292a3bd877a662a6f7/peonies-tier-fy23.jpg?quality=60&auto=webp&optimize={medium}" w={'100%'}></Image>
            <Box position={'absolute'} width={'39.3%'}  mt={'-45px'} backgroundColor={'rgba(0, 0, 0, 0.8)'} color={'white'} border="1px solid black" h={"45px"}>
                <Text mt={1} fontWeight={'600'} textAlign={'left'} pl={'10px'} fontSize={'18px'}>Peonies</Text>
            </Box>
        </Box>
        </SimpleGrid>
    </Box>
    </Center>
  )
}

export default Two_images
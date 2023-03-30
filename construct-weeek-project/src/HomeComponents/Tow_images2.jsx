import { Box,Center,HStack,Image, SimpleGrid,Text } from '@chakra-ui/react'
import React from 'react'

const Tow_images2 = () => {
    return (
        <Center>
        <Box width={'78%'} mt={12}>
            <SimpleGrid columns={2} gap={6}>
            <Box>
                <Image position={'relative'}  src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt3690a6c493dd6a6a/63f93ad7325d0044fe5f8eb0/harry-and-david-gift-baskets-gourmet-food-tier-spring-fy23.jpg?quality=60&auto=webp&optimize={medium}" w={'100%'}></Image>
                <Box position={'absolute'} width={'38.3%'}  mt={'-45px'} backgroundColor={'rgba(0, 0, 0, 0.8)'} color={'white'} border="1px solid black" h={"45px"}>
                    <Text mt={1} textAlign={'left'} pl={'10px'} fontWeight={'600'} fontSize={'18px'}>Delicious Gifts That Make the Celebration</Text>
                </Box>
            </Box>
            <Box>
                <Image src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/bltba5c5bb4aa42ed46/640247a0952945362ea1ac93/gifts-from-personalization-mall-tier-spring-fy23-v2.jpg?quality=60&auto=webp&optimize={medium}" w={'100%'}></Image>
                <Box position={'absolute'} width={'38.3%'}  mt={'-45px'} backgroundColor={'rgba(0, 0, 0, 0.8)'} color={'white'} border="1px solid black" h={"45px"}>
                    <Text mt={1} fontWeight={'600'} textAlign={'left'} pl={'10px'} fontSize={'18px'}>Custom Creation for Moments That Count</Text>
                </Box>
            </Box>
            </SimpleGrid>
        </Box>
        </Center>
      )
}

export default Tow_images2
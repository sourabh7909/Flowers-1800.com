import { Box,Center,HStack,Image,Text } from '@chakra-ui/react'
import React from 'react'

const Big_image5 = () => {
    return (
        <Box>
        <Center>
        <Box width={'92%'} mt={'35px'} >
            <Image src="https://images.contentstack.io/v3/assets/blt89dbf1c763ec00a6/bltfa36f70965e48481/6222b7ed6f0333490a0e7fd1/1400x200_IMCBnr_NonMem2.jpg?quality=80&auto=webp&optimze={medium}" h={'230px'} w={'100%'}/>
        </Box>
        </Center>
        <Center>
         <HStack mt={'40px'}>
         <Image src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt4661dd99d6401481/60184a440f1c0c1aa6f87986/instagram-icon.svg?quality=85&auto=webp&optimize={medium}" w={'30px'} h={'35px'}></Image>   
        <Text fontSize={'26px'} fontFamily={'PlayfairDisplayRegular, serif'}>Share Your <b color='rgb(0, 0, 0)'>#MadeMeSmile</b> Flowers Moment</Text>
        </HStack>
        </Center>
        </Box>
      )
}

export default Big_image5
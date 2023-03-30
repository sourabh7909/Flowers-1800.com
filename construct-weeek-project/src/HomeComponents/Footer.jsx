import { Box, Center, Flex, grid,HStack,Image,SimpleGrid,Text } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <Box pt={'45px'}   mt={'5px'} backgroundColor={'#65388b'} h={'680px'} w={'100%'}>
      <Flex color={'white'} justifyContent={'space-around'}>
       <Box ml={'40px'}>
        <Text fontSize={'16px'} fontWeight={'700'} fontFamily={'LatoMedium,sans-serif'}>MORE WAYS TO SHOP</Text>
        <Text pt={'9px'}>Flower Delivery Same-Day</Text>
        <Text pt={'5px'}>Flowers Arrangements</Text>
        <Text pt={'5px'}>Sympathy Flowers & Gifts</Text>
        <Text pt={'5px'}>Roses</Text>
        <Text pt={'5px'}>Birthday Flowers & Gifts</Text>
        <Text pt={'5px'}>Flower Subscriptions</Text>
        <Text pt={'5px'}>Plants</Text>
        <Text pt={'5px'}>Gift Baskets & Food</Text>
        <Text pt={'5px'}>Easter Flowers</Text>
        <Text pt={'5px'}>Mother’s Day Flowers</Text>
        <Text pt={'5px'}>International Flower Delivery</Text>
        <Text pt={'5px'}>Find a Local Florist</Text>
        <Text pt={'5px'}>Corporate Gifts</Text>
        <Text pt={'5px'}>Chocolate Covered Strawberries</Text>
        <Text pt={'5px'}>Marketplace Sellers</Text>
        <Text pt={'5px'}>Sitemap</Text>
       </Box>
       <Box>
        <Text fontSize={'16px'} fontWeight={'700'} fontFamily={'LatoMedium,sans-serif'}>CUSTOMER SERVICE</Text>
        <Text pt={'9px'}>Customer Service</Text>
        <Text pt={'5px'}>COVID-19 Updates</Text>
        <Text pt={'5px'}>eGift Cards</Text>
        <Text pt={'5px'}>Contact Us</Text>
        <Text pt={'5px'}>Do Not Sell My Personal</Text>
        <Text>Information</Text>
        <Text pt={'5px'}>Allergy Warning</Text>
        <Text pt={'5px'}>Funeral/Sympathy Advisors</Text>
        <Text pt={'5px'}>Smile Guarantee</Text>
        <Text fontSize={'16px'} fontWeight={'700'} fontFamily={'LatoMedium,sans-serif'} pt={'12px'}>VETERANS ADVANTAGE</Text>
        <Text pt={'5px'}>Get Exclusive Military Discounts</Text>
        <Text >Everyday</Text>
       </Box>
       <Box>
        <Text fontSize={'16px'} fontWeight={'700'} fontFamily={'LatoMedium,sans-serif'}>OUR STORES</Text>
        <Text pt={'9px'}>Store Locator</Text>
        <Text pt={'5px'}>Franchise Opportunities</Text>
        <Text pt={'5px'}>Local DIY Events</Text>
        <Text fontSize={'16px'} fontWeight={'700'} fontFamily={'LatoMedium,sans-serif'} pt={'10px'}>ACCOUNT LOGIN</Text>
        <Text pt={'5px'}>Sign In to Your Account</Text>
       </Box>
       <Box>
        <Text fontSize={'16px'} fontWeight={'700'} fontFamily={'LatoMedium,sans-serif'}>CORPORATE</Text>
        <Text pt={'9px'}>About Us</Text>
        <Text pt={'5px'}>Our Brands</Text>
        <Text pt={'5px'}>Social Responsibility</Text>
        <Text pt={'5px'}>Careers</Text>
        <Text pt={'5px'}>News & Media</Text>
        <Text pt={'5px'}>Investors</Text>
        <Text fontSize={'16px'} fontWeight={'700'} fontFamily={'LatoMedium,sans-serif'} pt={'10px'}>AFFILIATE PROGRAM</Text>
        <Text pt={'5px'}>Become an Affiliate</Text>
        <Text fontSize={'16px'} fontWeight={'700'} fontFamily={'LatoMedium,sans-serif'} pt={'10px'}>OUR BLOG</Text>
        <Text pt={'5px'}>Petal Talk Blog</Text>
        <Text pt={'5px'}>Julie’s Corner</Text>
        <Text pt={'5px'}>Jim’s Corner</Text>
       </Box>
       <Box >
        <Text fontSize={'16px'} fontWeight={'700'} fontFamily={'LatoMedium,sans-serif'} mb={4}>FOLLOW US</Text>
        <SimpleGrid width="88%" columns={4}>
            <Image src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt787e53ec7675db95/5ee1016e26fd9f3b64a5abe7/social-icon-twitter.png" w={'80%'}></Image>
            <Image src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt71c1a01174910073/5ee101831579a83a8b80b9ad/social-icon-facebook.png" w={'80%'}></Image>
            <Image src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt78b7b39043ac2de3/5ee101965cffd6317204ad4a/social-icon-instagram.png" w={'80%'}></Image>
            <Image src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt6ae8236f023d5359/5ee101a4f2c45903a4be0b8b/social-icon-pinterest.png" w={'80%'}></Image>
            <Image src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/bltbd439ba082738790/5ee101b758284c442bf7faea/social-icon-youtube.png"w={'80%'} mt={2}></Image>
        </SimpleGrid>
       </Box>
       </Flex>
       <Center>
        <HStack fontSize={'14px'} mt={'50px'} color="white">
       <Text>© 2023 1-800-Flowers.com, Inc., Jericho, NY Family of Brands</Text>
       <Text cursor={'pointer'} textDecoration={'underline'}>Terms of Use</Text><span>-</span>
       <Text cursor={'pointer'} textDecoration={'underline'}>Privacy Notice</Text><span>-</span>
       <Text cursor={'pointer'} textDecoration={'underline'}>Accesibility Statement</Text>
       </HStack>
       </Center>
    </Box>
  )
}

export default Footer
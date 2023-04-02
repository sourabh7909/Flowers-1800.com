import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Singleproduct } from '../Getdata/Axios'
import { Box, Center, Flex, HStack, Image, Text, Radio, RadioGroup, Checkbox, Button, Alert , AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,} from '@chakra-ui/react'
import axios from 'axios'
import { useContext } from 'react'
import { Auth } from '../LoginComponents/Authcontext'

const SinglePr = () => {
  const {totalcartlength}=useContext(Auth)
  const [value, setValue] = useState("")
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = React.useRef()
  const { id } = useParams()
  const [navtop, setnavtop] = useState([])
  // console.log(navtop)
  const fetchandupdatedata = async (id) => {
    try {
      await Singleproduct({ id })
        .then((res) => setnavtop(res.data))
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchandupdatedata(id)
  }, [id])
const handlepostclick=()=>{
  onClose()
  axios.post('http://localhost:8080/cartData',
  navtop
    )
  .then((res)=>{
    console.log(res)})
}

  return (
    <Box mt={2}>
      <Flex>

        <Box w={'12%'} >
          <Box pl={'60px'} m={1}>
            <Image mb={2} src={value || navtop.image}></Image>
            <Image src={navtop.Bottom}></Image>
          </Box>
        </Box>
        <Box w={'38%'} >
          <Box pl={'5px'}>
            <Image src={value || navtop.image} w={'100%'} ></Image>
          </Box>
        </Box>
        <Box pl={'20px'} w={'48%'} >
          <Box>
            <Text mb={'18px'} fontSize={'21px'} fontWeight={'bold'} fontFamily={'LatoMedium,sans-serif'} color={'#1f1f1b'}>Classic All White Arrangement™ for Sympathy</Text>
            <HStack mb={'15px'} borderRadius={'20px'} h={'40px'} w={'42%'} backgroundColor={'#F3E7F4'}>
              <Center>
                <Text fontFamily={'LatoMedium,sans-serif'} pr={2} fontSize={'16px'} color={'#000000'}>Show your Condolences</Text>
                <Image src="https://dd6zx4ibq538k.cloudfront.net/static/images/5811/1e555866471b1a4ac661a04b842b3a44_554_554.png" w={'12%'}></Image>
              </Center>
            </HStack>
            <Box mb={'7px'} w={'27%'}>
              <Image src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt8d4549d3cac15860/61e09d4f2e109d6c649d4aa4/PP_EligibleIcon.svg?quality=85&auto=webp&optimize={medium}"></Image>
            </Box>
            <Box borderRadius={'6px'} p={1} backgroundColor={'#e8eaec'} h={'42px'} w={"95%"}>
              <Text pl={5} pt={1} color={'#000'} fontWeight={'600'} fontSize={'14px'}>1. Pick Your Item</Text>
            </Box>
            <Box lineHeight={'35px'} p={'20px'} borderBottomRadius={'6px'} w={'95%'} h={'300px'} boxShadow={'rgba(0, 0, 0, 0.24) 0px 3px 8px;'}>

              <RadioGroup onChange={setValue} value={value}>
                <Box >
                  <HStack >
                    <Radio size='lg' value={navtop.ExtraLarge} colorScheme={'purple'}><Text w={"200px"} fontSize={'17px'} fontWeight={'semibold'}>Extra Large</Text></Radio>
                    <Text color={'#1f1f1b'} fontWeight={'500'} pl={'270px'}>${navtop.price2}</Text>
                  </HStack>
                  <HStack>
                    <Radio size='lg' value={navtop.Large} colorScheme={'purple'}><Text fontSize={'17px'} fontWeight={'semibold'}>Large</Text></Radio>
                    <Text color={'#1f1f1b'} fontWeight={'500'} pl={'428px'}>$69.99</Text>
                  </HStack>
                  <HStack>
                    <Radio size='lg' value={navtop.Medium} colorScheme={'purple'}><Text fontSize={'17px'} fontWeight={'semibold'}>Medium</Text></Radio>
                    <Text color={'#1f1f1b'} fontWeight={'500'} pl={'406px'}>$49.99</Text>
                  </HStack>
                  <HStack>
                    <Radio size='lg' value={navtop.small} colorScheme={'purple'}><Text fontSize={'17px'} fontWeight={'semibold'}>Small</Text></Radio>
                    <Text color={'#1f1f1b'} fontWeight={'500'} pl={'430px'}>${navtop.price}</Text>
                  </HStack>
                </Box>
              </RadioGroup>
              <HStack mt={'30px'}>
                <Image borderRadius={'4px'} src="https://tse2.mm.bing.net/th?id=OIP.S86UfCLZrqzji-mPbwdfiQHaFj&pid=Api&P=0" h={'26px'} w={'10%'}></Image>
                <Text fontSize={'13px'}>4 interest-free payments of $22.49. <a>Learn More</a> </Text>
              </HStack>
            </Box>
            <HStack mb={'30px'} p={"20px"} w={'95%'} h={'40px'} boxShadow={'rgba(0, 0, 0, 0.24) 0px 3px 8px;'} mt={'20px'}>
              <Checkbox colorScheme={"green"} defaultChecked></Checkbox>
              <Image src={'https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt199dfd765a419907/61e09d4f14ef402247cebaac/PP_UpsellIcon.svg'} w={'15%'}></Image>
              <Text pt={1} fontSize={'13px'}>Free Shipping/No Service Charge for One Full Year for Only $19.99/Year.</Text>
            </HStack>
            {/* <Button _hover={'none'} onClick={handlepostclick} cursor={'pointer'} borderRadius={'4px'} h={'50px'} w={'95%'} fontSize={'16px'} color={'white'} backgroundColor={'#61C278'}>Add to Cart</Button> */}
            <Button _hover={'none'} cursor={'pointer'} borderRadius={'4px'} h={'50px'} w={'95%'} fontSize={'16px'} color={'white'} backgroundColor={'#61C278'} onClick={onOpen}>
            Add to Cart
        </Button>
  
        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize='lg' fontWeight='bold'>
               Add to Cart
              </AlertDialogHeader>
  
              <AlertDialogBody>
                Are you sure? You want to Add to Cart item.
              </AlertDialogBody>
  
              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                  No
                </Button>
                <Button colorScheme='red' onClick={handlepostclick} ml={3}>
                  Yes
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
          
          </Box>
        </Box>
      </Flex>
    </Box>
  )
}

export default SinglePr
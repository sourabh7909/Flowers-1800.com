import React from 'react'
import { Deletedata, cartData } from '../Getdata/Axios'
import { useState, useEffect } from 'react'
import { Box, Center, Flex, Text, Image, Select, HStack, Button, Spacer, FormLabel } from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons'
import { useContext } from 'react'
import { Auth } from '../LoginComponents/Authcontext'
import { useNavigate } from 'react-router-dom'

// // The default icon size is 1em (16px)
// <PhoneIcon />

// // Use the `boxSize` prop to change the icon size
// <AddIcon boxSize={6} />

// // Use the `color` prop to change the icon color
// <WarningIcon w={8} h={8} color="red.500" />
const CartHome = () => {
    const navigate=useNavigate()
    const {totalcartdata,setallAmount}=useContext(Auth)
    const [navtop, setnavtop] = useState([])
    const [totalitems,settotalitem]=useState(0)
    const [pricewithquantity,setpricewithquantity]=useState(0)
    

    const fetchandupdatedata = async () => {
        try {
            await cartData()
                .then((res) =>{ 
                    settotalitem(res.data.length)
                    totalcartdata(res.data.length)
                    return setnavtop(res.data)})
        } catch (error) {
            console.log(error)
        }
    }
   
    useEffect(() => {
        fetchandupdatedata()
    }, [])

    const Qun = new Array(99).fill(0).map((e, i) => (i + 1))
    var totalprice=0
console.log("totalprice",totalprice)
const handleClick=(id)=>{
  Deletedata({id})
  .then((res)=>fetchandupdatedata())
}
const handlenavigate=(totalprice)=>{
    console.log("yeee",totalprice)
    setallAmount(totalprice)
    return navigate(`/payment`)
   
}
    return (

        <Box>
              <Text mt={4} pl={'200px'} pb={'25px'} color={'rgba(0, 0, 0, 0.87)'} fontSize={'26px'} fontWeight={'bold'} fontFamily={'Helvetica, Arial, Verdana, sans-serif !important'}>Shopping Cart</Text>
           
            <Flex>
           
                <Box  pl={'200px'} width={'56%'}>
                {navtop.map((el)=>{
                  totalprice=totalprice+Number(el.price)
               
              return  <Box key={el.id}>
                        {/* <Text pb={'30px'} color={'rgba(0, 0, 0, 0.87)'} fontSize={'26px'} fontWeight={'bold'} fontFamily={'Helvetica, Arial, Verdana, sans-serif !important'}>Shopping Cart</Text> */}
                        <Box   mb={'30px'} borderRadius={'9px'} boxShadow={' rgba(0, 0, 0, 0.35) 0px 5px 15px;'} w={'100%'} h={'230px'}>
                            <Center>
                                <Box  mt={2} ml={2} w={'95%'}>
                                    <Text mb={2} fontFamily={'Helvetica, Arial, Verdana, sans-serif !important'} color="#000" fontWeight={'bold'} textAlign={'left'}>item</Text>
                                    <Text border={'1px solid silver'} w={'100%'} h={'0.5px'}></Text>
                                    <Flex mt={3}>
                                        <Box w={'20%'}>
                                            <Image src={el.image} w={'95%'}></Image>
                                        </Box>
                                        <Box fontSize={'15px'} fontFamily={'Helvetica, Arial, Verdana, sans-serif !important'} w={'70%'} >
                                            <Text fontWeight={'bold'}>{el.name}</Text>
                                            <Text>Item #: 192269CB</Text>
                                            <Text>Sold by: 1800 Flowers</Text>
                                            <Text>Price: {el.price}</Text>
                                            <HStack>
                                                <Text>Qty :</Text>
                                                <Select onChange={(e)=>setpricewithquantity(Number(e.target.value)*Number(el.price))}
                                                on borderRadius={'4px'} h={'35px'} backgroundColor={'#F4F4F4'} w={'20%'}>{Qun.map((e) => <option key={e}  value={e} >{e}</option>)}</Select>
                                            </HStack>
                                        </Box>
                                        <Box ml={5}>
                                            <Box cursor={'pointer'} onClick={()=>handleClick(el.id)}><DeleteIcon/></Box>
                                        </Box>
                                    </Flex>

                                </Box>
                            </Center>
                        </Box>
                    </Box>
                
                 } )} 
                
                </Box>
  
                <Box mt={"-55px"} width={'50%'}>
                    <Box  borderRadius={'9px'} position={'fixed'}  ml={5}>
                        <Button _hover={'none'} mb={'20px'} h={'35px'} borderRadius={'3px'} fontWeight={'bold'} w={'60%'} color={'white'} backgroundColor={'#00C876'} onClick={()=>handlenavigate(totalprice)}>PROCEED TO CHECKOUT</Button>
                        <Box backgroundColor={'white'} p={'15px'} borderRadius={'9px'} h={'230px'} w={'60%'} boxShadow={' rgba(0, 0, 0, 0.35) 0px 5px 15px;'} >
                            <Text mb={2} color={'#000'} fontWeight={'bold'} fontSize={'1em'} fontFamily={'Helvetica, Arial, Verdana, sans-serif !important'}>Order Summary</Text>
                            <Text mb={2} fontFamily={'Helvetica, Arial, Verdana, sans-serif !important'}>{totalitems} Items</Text>
                            <Center><Text w={'100%'} h={'1px'}></Text></Center>
                            <Flex mb={2} mt={2} color={'#000'} fontWeight={'bold'} fontSize={'1em'} fontFamily={'Helvetica, Arial, Verdana, sans-serif !important'}>
                                <Text >Order Total</Text>
                                <Spacer />
                                <Text>${pricewithquantity===0?totalprice:pricewithquantity+totalprice}
                                </Text>
                            </Flex>
                            <Image mb={4} src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/bltc723326dc66beda5/image-20220307-142252.png" w={'40%'}></Image>
                            <Text fontSize={'12px'}>Has been added to your cart for $19.99 for your first year. Automatically renews, you can cancel any time. Enjoy <FormLabel display={'inline'} color='#30906E' fontSize={'11px'}>FREE SHIPPING/NO SERVICE CHARGE</FormLabel>* benefits and perks for a year.</Text>
                        </Box>

                    </Box>

                </Box>

            </Flex>
           
        </Box>
    )
}

export default CartHome
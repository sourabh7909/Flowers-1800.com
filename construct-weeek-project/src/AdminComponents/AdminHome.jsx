import React from 'react'
import { Box,Flex,Input,Center,Text,Button,Grid,Image } from '@chakra-ui/react'
import { useState ,useEffect} from 'react'
import axios from 'axios'
import { useContext } from 'react'
import { Auth } from '../LoginComponents/Authcontext'

const AdminHome = () => {
    const {totalAmount}=useContext(Auth)
    const [image,setimageurl]=useState("")
    const [image2,setimagelogo]=useState("")
    const [name,setname]=useState("")
    const [price,setpriceto]=useState("")
    const [price2,setpricefrom]=useState("")
    
    
    const [totalproductlength,settotalproductlength]=useState(0)

    const [navtop, setnavtop] = useState([])

    console.log(totalAmount)
   
    const fetchandupdatedata = async () => {
    //   try {
    //     await Productslist()
    //       .then((res) => setnavtop(res.data))
    //   } catch (error) {
    //     console.log(error)
    //   }
    axios.get("http://localhost:8080/Productslist")
    .then((res)=>{
        settotalproductlength(res.data.length)
        setnavtop(res.data)})
    }
    
    useEffect(() => {
      fetchandupdatedata()
    }, [])

    const handleclick=()=>{
        const usedata={image,image2,name,price,price2}
        axios.post('http://localhost:8080/Productslist',
        usedata
        )
        .then((res)=>fetchandupdatedata(res))
        setimageurl("")
        setimagelogo("")
        setname("")
        setpriceto("")
        setpricefrom("")
    }
var totalamt=0
    {navtop.map((e)=>{
     totalamt=totalamt+Number(e.price)
    }
        )}
        
      const handleDelete=(id)=>{
axios.delete(`http://localhost:8080/Productslist/${id}`)
.then((res)=>fetchandupdatedata())
      }  
  return (
    <Box backgroundColor={'#f5f9fb'} w={'100'} h={'100vh'}>
         <Flex>
            <Box  color="white" ml={2} mt={5} backgroundColor={'black'} boxShadow={'rgba(0, 0, 0, 0.35) 0px 5px 15px;'} p={3} width="30%">
                <Center fontSize={'26px'} mb={2}>Add new item</Center>
                <Input value={image} onChange={(e)=>setimageurl(e.target.value)}  mb={8} borderRadius={'1px'} outlineColor={'silver'} placeholder='Image url'></Input>
                <Input value={image2} onChange={(e)=>setimagelogo(e.target.value)} mb={8} borderRadius={'1px'} outlineColor={'silver'} placeholder='Image logo url'></Input>
                <Input value={name} onChange={(e)=>setname(e.target.value)} mb={8} borderRadius={'1px'} outlineColor={'silver'} placeholder='Name'></Input>
                <Input value={price} onChange={(e)=>setpriceto(e.target.value)} mb={8} borderRadius={'1px'} outlineColor={'silver'} placeholder='Price to'></Input>
                <Input value={price2} onChange={(e)=>setpricefrom(e.target.value)} mb={8} borderRadius={'1px'} outlineColor={'silver'} placeholder='Price from'></Input>
                <Button onClick={handleclick} _hover={'none'} mb={'20px'} h={'35px'} borderRadius={'3px'} fontWeight={'bold'} height={'40px'} w={'100%'} color={'white'} backgroundColor={'#00C876'} >Add New Product</Button>
            </Box>
            <Box ml="20px" p={3} mt={5} boxShadow={'rgba(0, 0, 0, 0.35) 0px 5px 15px;'} w={'70%'} >
             
                <Flex justifyContent={'space-between'} textAlign={'center'}>
                    <Box  h={'150px'} backgroundColor={'#ac4556'} w={'30%'}>
                        <Text color={'white'} fontSize={'30px'} fontWeight={'semibold'}>Total item</Text>
                        <Text color={'white'} fontSize={'30px'} fontWeight={'semibold'}>{totalproductlength}</Text>
                    </Box>
                    <Box h={'150px'} backgroundColor={'#4556ac'} w={'30%'}>
                    <Text color={'white'} fontSize={'30px'} fontWeight={'semibold'}>New item Added</Text>
                    <Text color={'white'} fontSize={'30px'} fontWeight={'semibold'}>{totalproductlength-33}</Text>
                    </Box>
                    <Box h={'150px'} backgroundColor={'#45ac9b '} w={'30%'}>
                    <Text color={'white'} fontSize={'30px'} fontWeight={'semibold'}>Active User</Text>
                    <Text color={'white'} fontSize={'30px'} fontWeight={'semibold'}>55</Text>
                    </Box>
                </Flex>
                 <Flex mt={'50px'}  justifyContent={'space-around'} textAlign={'center'}>
                 <Box h={'150px'} backgroundColor={'#56ac45 '} w={'30%'}>
                    <Text color={'white'} fontSize={'30px'} fontWeight={'semibold'}>Today Earnings</Text>
                    <Text color={'white'} fontSize={'30px'} fontWeight={'semibold'}>{Math.ceil(totalamt)}</Text>
                    </Box>
                    <Box h={'150px'} backgroundColor={'#c09758 '} w={'30%'}>
                    <Text color={'white'} fontSize={'30px'} fontWeight={'semibold'}>Weekly Earnings</Text>
                    <Text color={'white'} fontSize={'30px'} fontWeight={'semibold'}>{Math.ceil(totalamt*7)}</Text>
                    </Box>
                 </Flex>
            </Box>
         </Flex>
<Center>
         <Box mt={'20px'} width={'80%'} >
          <Grid templateColumns={'repeat(4,1fr)'} gap={5}>
            {navtop.map((el) =>{
             return <Box cursor={'pointer'} key={el.id}>
                <Image src={el.image} />
                <Image src={el.image2} mt={2} w={'150px'} h={'17px'} />
                <Text fontSize={'13px'} fontWeight={'medium'} color={'#000000'}>{el.name}</Text>
                <Text fontFamily={'LatoMedium,sans-serif'} fontSize={'18px'} fontWeight={'bold'} color={'#000000'}>${el.price} - ${el.price2}</Text>
                <Center><Button onClick={()=>handleDelete(el.id)} mt={3} w={'70%'} borderRadius={2} _hover={'none'} color={'white'} backgroundColor={'#45ac9b'}>Delete</Button></Center>
              </Box>
})}
          </Grid>
        </Box>
        </Center>
       </Box>
   
  )
}

export default AdminHome



 {/* "id": 1,
      "image": "https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/191165xlx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}",
      "image2": "https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt8d4549d3cac15860/61e09d4f2e109d6c649d4aa4/PP_EligibleIcon.svg",
      "name": "Classic All White Arrangement™ for ",
      "isName": "Sympathy",
      "price": "69.99",
      "price2": "99.99",
      "ExtraLarge": "https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/191165xlx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}",
      "Large": "https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/191165lx.jpg?width=545&height=597&quality=80&auto=webp&optimize={medium}",
      "Medium": "https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/191165mx.jpg?width=545&height=597&quality=80&auto=webp&optimize={medium}",
      "small": "https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/191165sx.jpg?width=545&height=597&quality=80&auto=webp&optimize={medium}",
      "Bottom": "https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/191165alt_viewc.jpg?width=100&height=110&quality=90&auto=webp&optimize={medium}" "id": 1,
      "image": "https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/191165xlx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}",
      "image2": "https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt8d4549d3cac15860/61e09d4f2e109d6c649d4aa4/PP_EligibleIcon.svg",
      "name": "Classic All White Arrangement™ for ",
      "isName": "Sympathy",
      "price": "69.99",
      "price2": "99.99",
      "ExtraLarge": "https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/191165xlx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}",
      "Large": "https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/191165lx.jpg?width=545&height=597&quality=80&auto=webp&optimize={medium}",
      "Medium": "https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/191165mx.jpg?width=545&height=597&quality=80&auto=webp&optimize={medium}",
      "small": "https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/191165sx.jpg?width=545&height=597&quality=80&auto=webp&optimize={medium}",
      "Bottom": "https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/191165alt_viewc.jpg?width=100&height=110&quality=90&auto=webp&optimize={medium}" */}

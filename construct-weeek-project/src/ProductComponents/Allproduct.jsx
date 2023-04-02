import { Box, Center, Flex, Grid,  Text, Image, Input, FormLabel, Button, Radio, RadioGroup, VStack, Select } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { Productslist } from '../Getdata/Axios'
import { useState, useEffect } from 'react'

const Allproduct = ({ searchval }) => {
  const [navtop, setnavtop] = useState([])
  const [orderby, setorderby] = useState("")
  const [sortby, setsortby] = useState("price")
  const [filterval,setfilterval]=useState("")
  
 console.log(filterval)
  const fetchandupdatedata = async (sortby, orderby,filterval) => {
    try {
      await Productslist({ sortby, orderby,filterval })
        .then((res) => setnavtop(res.data))
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchandupdatedata(sortby, orderby,filterval)
  }, [sortby, orderby,filterval])
  return (

    <Box mt={'20px'}>
      <Flex>
        <Box width={'23%'} >
          <Center>  <Box p={'20px'} borderRadius={'4px'} ml={'25px'} width={'78%'} height={'320px'} backgroundColor={'rgb(115, 79, 150)'}>
            <Text color={"white"} fontWeight={'bold'} mb={'20px'}>FIND AVAILABLE PRODUCTS!</Text>
            <FormLabel lineHeight={'5px'} fontSize={'10px'} color='white'>ENTER DELIVERY ZIP CODE OR ADDRESS*</FormLabel>
            <Input mb={'20px'} backgroundColor={'white'} borderRadius={'5px'} h={'50px'}></Input>
            <FormLabel lineHeight={'5px'} fontSize={'10px'} color='white'>LOCATION TYPE:</FormLabel>
            <Input mb={'20px'} backgroundColor={'white'} borderRadius={'5px'} h={'50px'}></Input>
            <Button color="white" backgroundColor={'rgb(0, 200, 118)'} h={'50px'} width={'100%'}>{"GO >"}</Button>
          </Box></Center>

          <Center>
            <Box ml={'27px'} p={'20px'} backgroundColor={'rgb(0, 200, 118)'} color={'white'} borderRadius={'4px'} mt={'30px'} width={'78%'}>
              <RadioGroup onChange={setorderby} value={orderby}>
                <VStack direction='row'>
                  <Radio value='asc' colorScheme={'pink'}><Text fontFamily={'sans-serif'} fontWeight={'bold'}>Low to High</Text></Radio>
                  <Radio value='desc' colorScheme={'orange'}><Text fontFamily={'sans-serif'} fontWeight={'bold'}>High to Low</Text></Radio>
                </VStack>
              </RadioGroup>
            </Box>
          </Center>
          <Center>
            <Box mt={'20px'}>
              <Select focusBorderColor={'none'}  bg='tomato' onChange={(e)=>setfilterval(e.target.value)} value={filterval}>
              <option disabled  value="" ><Text color={'black'}>SELECT</Text></option>
              <option value="">All</option>
                <option value="Sympathy">Sympathy</option>
                <option value="Blue & White">Blue & White</option>
                <option value="Bouquet">Bouquet</option>
                <option value="Lavender & White">Lavender & White</option>
                <option value="All White">All White</option>
                <option value="Basket">Basket</option>
                <option value="Lily">Lily</option>
                <option value="Gift Set">Gift Set</option>
              </Select>
            </Box>
          </Center>
        <Center>
          <Box mt={'50px'}>
            <Image src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt2cb19db2d397540c/6052e40f6d24ea4cb9b580ff/floral-heart-project-left-rail-banner.jpg"></Image>
          </Box>
          </Center>  
        </Box>
       
        <Box width={'73%'} >
          <Grid templateColumns={'repeat(3,1fr)'} gap={5}>
            {navtop.map((el) =>
              <Link to={`/single/${el.id}`}><Box cursor={'pointer'} key={el.id}>
                <Image src={el.image} />
                <Image src={el.image2} mt={2} w={'150px'} h={'17px'} />
                <Text fontWeight={'medium'} color={'#000000'}>{el.name}{el.isName}</Text>
                <Text fontFamily={'LatoMedium,sans-serif'} fontSize={'18px'} fontWeight={'bold'} color={'#000000'}>${el.price} - ${el.price2}</Text>
              </Box></Link>
            )}
          </Grid>
        </Box>
      </Flex>

    </Box>

  )
}

export default Allproduct
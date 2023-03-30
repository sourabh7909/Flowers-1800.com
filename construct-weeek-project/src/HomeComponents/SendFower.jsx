import { Box ,Center,SimpleGrid,Image,Text} from '@chakra-ui/react'
import { folwers } from '../Getdata/Axios'
import {useState,useEffect} from "react"
import { useNavigate } from 'react-router-dom'

const SendFower = () => {
    const [navtop, setnavtop] = useState([])
    const navigate=useNavigate()
    const fetchandupdatedata = async () => {
        try {
            await folwers()
                .then((res) => setnavtop(res.data))
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchandupdatedata()
    }, [])
    return (
        <Box mt={"70px"}>
            <Center><Text mt={'50px'} mb={'20px'} fontFamily={'PlayfairDisplayBold, serif'} fontWeight={'bold'} color={'rgb(0, 0, 0)'} fontSize='4xl'>Send Flowers & Exclusive Gifts</Text></Center>
            <Center>
                <SimpleGrid w={'92%'} columns={6} gap={15}>
                    {navtop.map((el) =>
                          
                        <Box cursor={'pointer'} onClick={()=>navigate('/productpage')} overflow={'hidden'} key={el.id}>
                            <Image  overflow={'hidden'} _hover={{transform:'scale(1.07)'}} transition={'all 0.3s'} cursor={'pointer'} src={el.image} w={'100%'} alt={el.id} ></Image>
                           <Center> <Text mt={1} textAlign={'center'} fontWeight={'semibold'} fontSize={'1.1em'} color={'rgb(31, 31, 27)'}>{el.name}</Text></Center>
                        </Box>
                    )}
                </SimpleGrid>
            </Center>
            </Box>
            )
           
}
export default SendFower


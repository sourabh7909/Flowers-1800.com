import { Box } from '@chakra-ui/react'
import React from 'react'
import AdminNavbar from '../AdminComponents/AdminNavbar'
import AdminHome from '../AdminComponents/AdminHome'

const Admin = () => {
  return (
    <Box>
        <AdminNavbar/>
        <AdminHome/>
    </Box>
  )
}

export default Admin
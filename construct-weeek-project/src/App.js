import './App.css';
import {Box} from "@chakra-ui/react"
import Home from './Pages/Home';
import { Routes,Route } from 'react-router-dom';
import LoginLadingPage from './LoginComponents/LoginLadingPage';
import Signin from './LoginComponents/Signin';
import LoginPage from './LoginComponents/LoginPage';
import PrivateRoutes from './LoginComponents/PrivateRoutes';
import ProductHomepage from './Pages/Productpage';
import SingleProductspage from './Pages/SingleProductspage';
import Cart from './Pages/Cart';
import Payment from './Pages/Payment';
import Paymentsucces from './Paymentpagecomponents/Paymentsucces';
import Admin from './Pages/Admin';
import AdminLogin from './AdminComponents/AdminLogin';
function App() {
  return (
   <Box>
  <Routes>
    <Route path='/'element={<Home/>}></Route>
    <Route path='/loginlanding' element={<LoginLadingPage/>}></Route>
    <Route path='/signin' element={<Signin/>}></Route>
    <Route path='/login' element={<LoginPage/>}></Route>
    <Route path='/productpage' element={<PrivateRoutes><ProductHomepage/></PrivateRoutes>}></Route>
    <Route path='/single/:id' element={<PrivateRoutes><SingleProductspage/></PrivateRoutes>}></Route>
    <Route path='/cartpage' element={<PrivateRoutes><Cart/></PrivateRoutes>}></Route>
    <Route path='/payment' element={<PrivateRoutes><Payment/></PrivateRoutes>}></Route>
    <Route path='/paymentsuccess' element={<Paymentsucces/>}></Route>
    <Route path='/adminlogin' element={<AdminLogin/>}></Route>
    <Route path='/admin' element={<Admin/>}></Route>
  </Routes>
  
   </Box>
  );
}

export default App;

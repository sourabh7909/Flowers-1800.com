import './App.css';
import {Box} from "@chakra-ui/react"
import Home from './Pages/Home';
import { Routes,Route } from 'react-router-dom';
import LoginLadingPage from './LoginComponents/LoginLadingPage';
import Signin from './LoginComponents/Signin';
import LoginPage from './LoginComponents/LoginPage';
import PrivateRoutes from './LoginComponents/PrivateRoutes';
import ProductHomepage from './Pages/ProductHomepage';
function App() {
  return (
   <Box>
  <Routes>
    <Route path='/'element={<Home/>}></Route>
    <Route path='/loginlanding' element={<LoginLadingPage/>}></Route>
    <Route path='/signin' element={<Signin/>}></Route>
    <Route path='/login' element={<LoginPage/>}></Route>
    <Route path='/productpage' element={<ProductHomepage/>}></Route>
  </Routes>
   </Box>
  );
}

export default App;

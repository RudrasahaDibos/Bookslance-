
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Authentication/Login/Login';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Register from './Pages/Authentication/Register/Register';
import RequiredAuth from './Pages/Authentication/RequiredAuth/RequiredAuth';
import Addtocart from './Pages/Addtocart/Addtocart';
import Inventory from './Pages/Inventory/Inventory';
// import Product from './Pages/Homepage/Product';

function App() {
  return (
    <div className=''>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/addtocart' element={<Addtocart></Addtocart>}></Route>
        <Route path='/register' element={<Register></Register>} ></Route>
      <Route  path='/login' element={<Login></Login>}  ></Route>
      {/* <Route  path='/product' element={<Product></Product>}  ></Route> */}
      <Route path='/inventory' element={<RequiredAuth><Inventory></Inventory></RequiredAuth>}  ></Route>
      <Route path='/dashboard' element={<RequiredAuth><</RequiredAuth>}  ></Route>
      </Routes>
        
        <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;

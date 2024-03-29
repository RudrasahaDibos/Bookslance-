
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Authentication/Login/Login';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Register from './Pages/Authentication/Register/Register';
import RequiredAuth from './Pages/Authentication/RequiredAuth/RequiredAuth';
import OrderSummary from './Pages/Addtocart/OrderSummary';
import Addtocart from './Pages/Addtocart/Addtocart';

function App() {
  return (
    <div className='lg:'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/addtocart' element={<Addtocart></Addtocart>}></Route>
        <Route path='/register' element={<Register></Register>} ></Route>
      <Route  path='/login' element={<Login></Login>}  ></Route>
      </Routes>
        
        <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;

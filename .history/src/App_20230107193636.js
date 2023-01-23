
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Authentication/Login/Login';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Register from './Pages/Authentication/Register/Register';
import RequiredAuth from './Pages/Authentication/RequiredAuth/RequiredAuth';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/register' element={<Register></Register>} ></Route>
      <Route  path='/login' element={<Login></Login>}  ></Route>
      </Routes>
        
        <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;

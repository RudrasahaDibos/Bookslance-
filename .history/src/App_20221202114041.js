
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Authentication/Login/Login';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}   ></Route>
        <Route path='/home' element={<Home></Home>}   ></Route>
      <Route  path='/login' element={<Login></Login>}  ></Route>
      </Routes>
        
    </div>
  );
}

export default App;

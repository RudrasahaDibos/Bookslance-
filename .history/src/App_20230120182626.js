
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Authentication/Login/Login';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Register from './Pages/Authentication/Register/Register';
import RequiredAuth from './Pages/Authentication/RequiredAuth/RequiredAuth';
import Addtocart from './Pages/Addtocart/Addtocart';
import Inventory from './Pages/ManageBookproduct/AddNewBooksadmin';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyBookBooking from './Pages/Dashboard/MyBookBooking';
import Reviews from './Pages/Dashboard/Reviews';
import About from './Pages/Shared/About';
import Allusers from './Pages/Dashboard/Allusers';
import RequiredAdmin from './Pages/Authentication/RequiredAdmin';
import AddNewBooksadmin from './Pages/ManageBookproduct/AddNewBooksadmin';


function App() {
  return (
    <div className=''>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/About' element={<About></About>}></Route>
        <Route path='/addtocart' element={<Addtocart></Addtocart>}></Route>
        <Route path='/register' element={<Register></Register>} ></Route>
      <Route  path='/login' element={<Login></Login>}  ></Route>
      
      <Route path='/dashboard' element={
      <RequiredAuth><Dashboard>
        
        </Dashboard></RequiredAuth>}  >

        <Route
            index
            element={<MyBookBooking></MyBookBooking>}
          ></Route>
          <Route
            path="reviews"
            element={<Reviews></Reviews>}
          ></Route>
          <Route
            path="users"
            element={<RequiredAdmin><Allusers></Allusers></RequiredAdmin>}
          ></Route>
         <Route path='addbook' element={<RequiredAdmin><AddNewBooksadmin></AddNewBooksadmin></RequiredAdmin>}  ></Route>

        </Route>
      </Routes>
        
        <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;


import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Authentication/Login/Login';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route to   ></Route>
      <Route  path='/login' element={<Login></Login>}  ></Route>
      </Routes>
        
    </div>
  );
}

export default App;


import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Authentication/Login/Login';

function App() {
  return (
    <div>
      Na
      <Routes>
      <Route  path='/login' element={<Login></Login>}  ></Route>
      </Routes>
        
    </div>
  );
}

export default App;

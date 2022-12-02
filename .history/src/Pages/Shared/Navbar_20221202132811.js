import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../Firebase.init';
import '../Shared/Navbar.css'

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
    localStorage.removeItem('access Token ');
  };
    return (
        <div class="nav">
  <input type="checkbox" id="nav-check"/>
  <div class="nav-header">
    <div class="nav-title">
      BOOKSLANCE
    </div>
  </div>
  <div class="nav-btn">
    <label for="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  
  <div class="nav-links">
    <Link to={'/home'}>Home</Link>
   
   
    <div class="dropdown">
    <Link className='button' to={'/authors'}>Authors
   
   </Link>
  <div class="dropdown-options">
    <Link href="#">Dashboard</Link>
    <Link href="#">Setting</Link>
    <Link href="#">Logout</Link>
  </div>
</div>
    <Link to={'/addtocart '} >Add To Cart</Link>
    <Link to={"/login"} >Login</Link>
  </div>
</div>
    );
};

export default Navbar;
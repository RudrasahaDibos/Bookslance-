import React from 'react';
import { Link } from 'react-router-dom';
import '../Shared/Navbar.css'

const Navbar = () => {
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
    <Link to={'/About'} >About</Link>
    <Link to={'/authors'}>Authors
   
    </Link>
    <div class="dropdown">
  <Link>Profile</Link>
  <div class="dropdown-options">
    <Link href="#">Dashboard</Link>
    <a href="#">Setting</a>
    <a href="#">Logout</a>
  </div>
</div>
    <Link to={''} >Add To Cart</Link>
    <Link to={"/login"} >Login</Link>
  </div>
</div>
    );
};

export default Navbar;
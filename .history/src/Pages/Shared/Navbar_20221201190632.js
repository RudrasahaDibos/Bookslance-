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
      <select name="languages" id="lang">
        <li >JavaScript</li>
        <li >PHP</li>
        <li >Java</li>
        <li >Golang</li>
        <li >Python</li>
        <li>C#</li>
        <li>C++</li>
        <li >Erlang</li>
      </select>
    </Link>
    <Link to={''} >Add To Cart</Link>
    <Link to={"/login"} >Login</Link>
  </div>
</div>
    );
};

export default Navbar;
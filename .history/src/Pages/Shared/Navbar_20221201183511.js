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
    <Link to={''}>Home</Link>
    <Link to={''} >A</Link>
    <Link to={''}>LinkedIn</Link>
    <Link to={''} >Codepen</Link>
    <Link to={""} >JsFiddle</Link>
  </div>
</div>
    );
};

export default Navbar;
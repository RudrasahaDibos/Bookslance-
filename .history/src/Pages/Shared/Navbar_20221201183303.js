import React from 'react';
import '../Shared/Navbar.css'

const Navbar = () => {
    return (
        <div class="nav">
  <input type="checkbox" id="nav-check"/>
  <div class="nav-header">
    <div class="nav-title">
      JoGeek
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
    <a>Github</a>
    <a >Stackoverflow</a>
    <a>LinkedIn</a>
    <a >Codepen</a>
    <a >JsFiddle</a>
  </div>
</div>
    );
};

export default Navbar;
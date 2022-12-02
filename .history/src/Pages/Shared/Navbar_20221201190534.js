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
        <li value="javascript">JavaScript</li>
        <li value="php">PHP</li>
        <li value="java">Java</li>
        <li value="golang">Golang</li>
        <li value="python">Python</li>
        <li value="c#">C#</li>
        <li value="C++">C++</li>
        <li value="erlang">Erlang</li>
      </select>
    </Link>
    <Link to={''} >Add To Cart</Link>
    <Link to={"/login"} >Login</Link>
  </div>
</div>
    );
};

export default Navbar;
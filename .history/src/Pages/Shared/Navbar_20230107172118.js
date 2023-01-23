import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../Firebase.init';
import '../Shared/Navbar.css'

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
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
  
</div>
    <Link to={'/addtocart '} ><small>Add To Cart </small><i class="fa-regular fa-cart-shopping"></i> </Link>
   { user? <Link  onClick={logout} class="btn btn-ghost">Sign Out <i class="fa-thin fa-right-from-bracket"></i> </Link> : <Link to={'/login'}>Login</Link>}
  </div>
</div>
    );
};

export default Navbar;
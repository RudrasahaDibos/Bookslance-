import React from 'react';
import { Link } from 'react-router-dom';
import auth from '../../Firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import Loading from './Loading';
const Navber = () => {
  const [user,loading] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
   

  };
  if(loading){
    return <Loading></Loading>
  }
  const Menubar = <>
   <div class="flex-none gap-2 w-40 mr-28 btn  " >
    <div class="form-control flex-row">
      <input type="text" placeholder="Search" class="input input-bordered" />
       <input type="submit" value={'search'} />
    </div>
    </div>
    <li><Link to={'/home'}>Home</Link></li>
    <li><Link to={'/about'}>About</Link></li>
    <li><Link to={'/'}>Product</Link></li>
    <li><Link to={'/reviews'}>Reviews</Link></li>
    <li><Link to={'/addtocart'}>AddToCart</Link></li>
    {
      user && <li><Link to={'/inventory'}>Inventory</Link></li>
    }
    <li>{ user? <button  onClick={logout} class="btn btn-ghost">Sign OUT</button> : <Link to={'/login'}>Login</Link>}</li>
  </>

    return (
        <div   class="navbar bg-base-100  ">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
             {Menubar}
            </ul>
        


          </div>
          <a class="btn btn-ghost normal-case  text-xl">Booklance</a>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal   p-0">
          {Menubar}
          </ul>
        </div>
       



          <div className='navbar-end'>
          <label for="my-drawer-2"  tabindex="0" class="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
          </div>
        
      </div>
    );
};

export default Navber;
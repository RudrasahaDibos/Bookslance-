import React from 'react';
import { Link } from 'react-router-dom';
import "../Shared/Navbarsecond.css"

const Navbarsecond = () => {
    return (
        <div>
<ul>

  <li><Link to={''} href="#news">News</Link></li>
  <li><Link to={''} href="#contact">Contact</Link></li>
  <li><Link to={''} href="#about">About</Link></li>
  <div class="dropdown">
    <Link className='button' to={'/authors'}>Authors
   
   </Link>
  <div class="dropdown-options">
    <Link href="#">Dashboard</Link>
    <Link href="#">Setting</Link>
    <Link href="#">Logout</Link>
  </div>
</div>
</ul>


        </div>
    );
};

export default Navbarsecond;
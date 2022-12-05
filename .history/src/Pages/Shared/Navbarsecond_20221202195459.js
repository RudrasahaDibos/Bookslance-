import React from 'react';
import { Link } from 'react-router-dom';
import "../Shared/Navbarsecond.css"

const Navbarsecond = () => {
    return (
        <div className>
<ul>

  <li><Link to={''} href="#news">News</Link></li>
  <li><Link to={''} href="#contact">Contact</Link></li>
  <li><Link to={''} href="#about">About</Link></li>
  
</ul>


        </div>
    );
};

export default Navbarsecond;
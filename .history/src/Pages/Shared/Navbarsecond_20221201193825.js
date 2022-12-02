import React from 'react';
import { Link } from 'react-router-dom';
import "../Shared/Navbarsecond.css"

const Navbarsecond = () => {
    return (
        <div>
<ul>
  <li><Link t class="active" href="#home">Home</Link></li>
  <li><Link t href="#news">News</Link></li>
  <li><Link t href="#contact">Contact</Link></li>
  <li><Link t href="#about">About</Link></li>
</ul>


        </div>
    );
};

export default Navbarsecond;
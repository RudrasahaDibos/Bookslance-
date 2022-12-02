import React from 'react';
import "../Shared/Navbarsecond.css"

const Navbarsecond = () => {
    return (
        <div>
<ul>
  <li><Link class="active" href="#home">Home</Link></li>
  <li><Link href="#news">News</Link></li>
  <li><Link href="#contact">Contact</Link></li>
  <li><Link href="#about">About</Link></li>
</ul>


        </div>
    );
};

export default Navbarsecond;
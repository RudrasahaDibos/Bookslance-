import React from 'react';
import '../Homepage/Header.css';
import bookk from '../images/bookk.jpg'

const Header = () => {
    return (
        <div className='headercontent' >    
            <div className='headertext' >
                <h1>There is no Friend As  <span>Loyal</span> as  a <span>book</span>  </h1>
                <p>I do believe something very magical can happen when you read a good book </p>
               <a href="" className='headerbtn'>PURCHASE</a>  
               </div>
              <div className='headerimg' >
             <img className='img' src={bookk} alt="" />
              </div>



        </div>
    );
};

export default Header;
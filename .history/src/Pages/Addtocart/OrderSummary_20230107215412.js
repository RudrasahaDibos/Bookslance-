import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fa_soild } from '@fortawesome/free-solid-svg-icons'
const OrderSummary = ({Cart}) => {
    
    return (
        <div class="indicator mt-36 mr-10 fixed top-60 left-200 right-0 bottom-20  ">
        <span class="indicator-item badge badge-secondary">{Cart.length}</span> 
        <Link to={'/addtocart'} class="btn"><FontAwesomeIcon ></FontAwesomeIcon></Link>
      </div>
    );
};

export default OrderSummary;
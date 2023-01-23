import React from 'react';
import { Link } from 'react-router-dom';

const OrderSummary = ({Cart}) => {
    
    return (
        <div class="indicator mt-36 mr-10 fixed top-40 left-0 right-0   ">
        <span class="indicator-item badge badge-secondary">{Cart.length}</span> 
        <Link to={'/addtocart'} class="btn">cart</Link>
      </div>
    );
};

export default OrderSummary;
import React from 'react';
import { Link } from 'react-router-dom';

const OrderSummary = ({Cart}) => {
    
    return (
        <div class="indicator mt-36 mr-10 ">
        <span class="indicator-item badge badge-secondary">{Cart.length}</span> 
        <button Link class="btn">inbox</button>
      </div>
    );
};

export default OrderSummary;
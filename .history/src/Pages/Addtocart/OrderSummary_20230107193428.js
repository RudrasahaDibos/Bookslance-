import React from 'react';

const OrderSummary = ({cart}) => {
    const[cart]=cart
    return (
        <div class="indicator">
        <span class="indicator-item badge badge-secondary">99+</span> 
        <button class="btn">inbox</button>
      </div>
    );
};

export default OrderSummary;
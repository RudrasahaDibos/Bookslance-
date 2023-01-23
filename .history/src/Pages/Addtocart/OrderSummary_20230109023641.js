import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping} from '@fortawesome/free-solid-svg-icons'
const OrderSummary = ({Cart}) => {
  
    let total = 0;
    let shipping =0;
    let quantity = 0;
    for(const Product of Cart ){
        quantity = quantity + Product.quantity;
        total = total+Product.price *Product.quantity ;
        shipping = shipping + Product.shipping;
    }
    const tax =(total*0.1).toFixed(2);
    const GrandTotal = total +shipping + parseFloat(tax);
  
    return (
      <div class="card w-96 bg-base-100 shadow-xl">
  <figure class="px-10 pt-10">
  
  </figure>
  <div class="card-body items-center text-center">
    <p class="card-title">Quantity : {quantity}</p>
    <p>Total : $ {total}</p>
    <p>Shipping $ {total}</p>
    <p>Tax: $ {total}</p>
    <div class="card-actions">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default OrderSummary;
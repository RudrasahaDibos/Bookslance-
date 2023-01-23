import React from 'react';
import UseCart from '../../Hooks/UseCart';
import UseProduct from '../../Hooks/UseProduct';
import ReviewItem from '../ReviewItem/ReviewItem';
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

      
     

<div class="card w-96 ml-44 bg-base-100 shadow-xl">
  <figure class="px-10 pt-10">
     
  </figure>
  <div class="card-body  text-start">
    <h1  class="card-title" >ORDER SUMMARY </h1>
    <p>Select Items : {quantity}</p>
    <p>Total Price : $ {total}</p>
    <p>Total  Shipping : $ {shipping}</p>
    <p>Tax: $ {tax}</p>
    <p className='card text-black'> GrantTotal : $ {GrandTotal}</p>
    <div class="card-actions">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>

     
      
    );
};

export default OrderSummary;
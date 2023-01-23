import React from 'react';
import { Link } from 'react-router-dom';
const OrderSummary = ({Cart,chlidren}) => {
 

  
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
    {chlidren}
    <div class="card-actions">
      {/* <Link  Cart={Cart} to={'/inventory'} class="btn btn-primary">ProccedCheckOut</Link> */}
    
<label for="my-modal-6" class="btn">open modal</label>

 
<input type="checkbox" id="my-modal-6" class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
          <form action=""></form>


    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
    <div class="modal-action">
      <label for="my-modal-6" class="btn">Yay!</label>
    </div>
  </div>
</div>
    </div>
  </div>
</div>

     
      
    );
};

export default OrderSummary;
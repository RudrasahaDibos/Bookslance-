import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
import { format } from "date-fns";
import Loading from '../Shared/Loading';

const OrderSummary = ({Cart,chlidren,SetCart}) => {
  const [user,loading] = useAuthState(auth);
  const [date ,setDate]=useState(new Date())
  const formattedDate = format(date, "PP");
  
  
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
   if(loading){
    return<Loading></Loading>
   }

   const  hanalebookingBook = (event)=>{
    event.preventDefault()
    const GrandTotal = event.target.value
    console.log(GrandTotal)
    SetCart(null)
   }



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

    
<label disabled={quantity === 0}  for="my-modal-6" class="btn">Order Now!</label>

 
<input type="checkbox" id="my-modal-6" class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle">

  <div class="modal-box">
        <h1 className="text-red-500 text-center">BUY BOOK </h1>
          <form onClick={hanalebookingBook}>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Name</span>
            </label>
            <input type="text" disabled value={user?.displayName}  placeholder="Name" class="input input-bordered" />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Total Taka</span>
            </label>
            <input type="text" value={GrandTotal} disabled  placeholder="Name" class="input input-bordered" />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input type="text" disabled value={user?.email} placeholder="email" class="input input-bordered" />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Date</span>
            </label>
            <input type="text" value={formattedDate} disabled placeholder="address" class="input input-bordered" />
            
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Address</span>
            </label>
            <input type="text"  placeholder="address" class="input input-bordered" />
            
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">PhoneNumber</span>
            </label>
            <input type="number"  placeholder="Number" class="input input-bordered" />
            
          </div>
          <div class="form-control mt-6">
            <button class="btn btn-primary">Book Shopping</button>
          </div>



          </form>


   
    <div class="ml-48 mt-4">
      <label for="my-modal-6" class="btn ">Cancel</label>
    </div>
  </div>
</div>
    </div>
  </div>
</div>

     
      
    );
};

export default OrderSummary;
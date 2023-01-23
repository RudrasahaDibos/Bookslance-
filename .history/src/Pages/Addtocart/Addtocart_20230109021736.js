import React from 'react';
import UseCart from '../../Hooks/UseCart';
import UseProduct from '../../Hooks/UseProduct';

const Addtocart = () => {

   const [Products , Setproduct] = UseProduct();
   const [Cart,SetCart] = UseCart(Products);
  
    return (
        <div  className=' display flex '>
             
              <div>
              <h1>This is car{Products.length}</h1>
           
              </div>
              <div>
              <div class="card mr- bg-base-100 shadow-xl">
  <figure class="px-10 pt-10">
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">{Cart.length}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
              </div>
        </div>
    );
};

export default Addtocart;
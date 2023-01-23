import React from 'react';
import UseCart from '../../Hooks/UseCart';
import UseProduct from '../../Hooks/UseProduct';

const Addtocart = () => {

   const [Products , Setproduct] = UseProduct();
   const [Cart,SetCart] = UseCart(Products);
  
    return (
        <div>
               <h1>This is car{Products.length}</h1>
            <h1>This Cart {Cart.length}</h1>
              <div>

              </div>
              <div>
              <div class="card w-96 bg-base-100 shadow-xl">
  <figure class="px-10 pt-10">
    <img src="https://placeimg.com/400/225/arch" alt="Shoes" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">Shoes!</h2>
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
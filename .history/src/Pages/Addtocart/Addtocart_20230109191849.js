import React from 'react';
import UseCart from '../../Hooks/UseCart';
import UseProduct from '../../Hooks/UseProduct';
import OrderSummary from './OrderSummary';

const Addtocart = () => {

   const [Products , Setproduct] = UseProduct();
   const [Cart,SetCart] = UseCart(Products);
  
    return (
        <div  className=' display flex '>
             
             <div className='grid grid-cols-3 gap-11 justify-center '>
           {
            Cart.map( product => <ReviewItem
            key={product._id}
            product={product}
            >

            </ReviewItem>)
           }
      </div>
              <div>
              {/* <div class="card ml-96  bg-base-100 shadow-xl">
  <figure class="px-10 pt-10">
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">{Cart.length}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div> */}
 <OrderSummary Cart={Cart} ></OrderSummary>
              </div>
        </div>
    );
};

export default Addtocart;
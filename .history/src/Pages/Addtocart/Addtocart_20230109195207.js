import React from 'react';
import UseCart from '../../Hooks/UseCart';
import UseProduct from '../../Hooks/UseProduct';
import ReviewItem from '../ReviewItem/ReviewItem';
import OrderSummary from './OrderSummary';

const Addtocart = () => {

   const [Products , Setproduct] = UseProduct();
   const [Cart,SetCart] = UseCart(Products);
  
    return (
        <div  className=' display flex content-center '>
             
             <div className='grid grid-cols-3 gap-11 justify-center '>
           {
            Cart.map( product => <ReviewItem
            key={product._id}
            product={product}
            >

            </ReviewItem>)
           }
      </div>
              <div className='card mr'>
          
 <OrderSummary Cart={Cart} ></OrderSummary>
              </div>
        </div>
    );
};

export default Addtocart;
import React from 'react';
import UseCart from '../../Hooks/UseCart';
import UseProduct from '../../Hooks/UseProduct';
import ReviewItem from '../ReviewItem/ReviewItem';
import OrderSummary from './OrderSummary';

const Addtocart = () => {

   const [Products , Setproduct] = UseProduct();
   const [Cart,SetCart] = UseCart(Products);

   const handaleRemoveItem =(RemoveProduct)=>{
     
   }
  
    return (
        <div  className=' display flex content-center '>
             
             <div className='grid ml-36  grid-cols-1 gap-12 justify-center '>
           {
            Cart.map( product => <ReviewItem
            key={product._id}
            product={product}
            handaleRemoveItem= {handaleRemoveItem}
            >

            </ReviewItem>)
           }
      </div>
              <div className='card ml-44 fixed top-20 left-80 right-0'>
          
 <OrderSummary Cart={Cart} ></OrderSummary>
              </div>
        </div>
    );
};

export default Addtocart;
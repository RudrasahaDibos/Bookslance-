import React from 'react';
import UseCart from '../../Hooks/UseCart';
import UseProduct from '../../Hooks/UseProduct';
import ReviewItem from '../ReviewItem/ReviewItem';
import { removeFromDb } from '../../Utilits/Fakedb';
import Cartt from './Cartt';
import OrderSummary from './OrderSummary';


const Addtocart = () => {

   const [Products , Setproduct] = UseProduct();
   const [Cart,SetCart] = UseCart(Products);

   const handaleRemoveItem = product =>{
     const rest = Cart.filter(pd => pd._id !== product._id)
     SetCart(rest);
     removeFromDb(product._id)
   }
  
    return (
        <div  className='dispay flex'>
             
            

             <div class="overflow-x-auto w-full">
  <table class="table table-zebra w-full">
   
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" class="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>

    <tbody>
      
    {
            Cart.map( product => <ReviewItem
            key={product._id}
            product={product}
            handaleRemoveItem= {handaleRemoveItem}
            >

            </ReviewItem>)
           }
      
    
      </tbody>
  </table>
</div>


          
  
              <div className='card ml-44 sm:mb-96  lg:fixed top-20 left-80 right-0'>
          
 <OrderSummary Cart={Cart} > 
 
  </OrderSummary>
 <Cartt  Cart={Cart}></Cartt>
              </div>
        </div>
    );
};

export default Addtocart;
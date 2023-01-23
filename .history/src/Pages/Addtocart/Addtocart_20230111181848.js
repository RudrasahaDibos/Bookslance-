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
        <div  className=''>
             
             <div className='grid sm:mr-20 ml-36  grid-cols-1 gap-10 justify-center '>

             <div class="overflow-x-auto w-full">
  <table class="table w-full">
   
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
   
      <tr>
        <th>
          <label>
            <input type="checkbox" class="checkbox" />
          </label>
        </th>
        <td>
          <div class="flex items-center space-x-3">
            <div class="avatar">
              <div class="mask mask-squircle w-12 h-12">
                <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div class="font-bold">Hart Hagerty</div>
              <div class="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>
        <td>
          Zemlak, Daniel and Leannon
          <br/>
          <span class="badge badge-ghost badge-sm">Desktop Support Technician</span>
        </td>
        <td>Purple</td>
        <th>
          <button class="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
    
      </tbody>
  </table>
</div>


           {
            Cart.map( product => <ReviewItem
            key={product._id}
            product={product}
            handaleRemoveItem= {handaleRemoveItem}
            >

            </ReviewItem>)
           }
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
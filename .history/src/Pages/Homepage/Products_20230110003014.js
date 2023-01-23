import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import UseCart from '../../Hooks/UseCart';

import UseProduct from '../../Hooks/UseProduct';
import { addToDb, getStoredCart } from '../../Utilits/Fakedb';
import Cartt from '../Addtocart/Cartt';

import Product from '../Homepage/Product';

const Products = () => {
  
   const[Products,Setproduct]=UseProduct();
   const [Cart,SetCart] = UseCart(Products)
   
 
  const handleAddtoCart =(Seletedproduct)=>{
     let newCart =[];
     const exists = Cart.find(product => product._id === Seletedproduct._id);
     if(!exists){
      Seletedproduct.quantity = 1;
      newCart = [...Cart ,Seletedproduct];
     }
      else{
        const rest = Cart.filter(product => product._id !== Seletedproduct._id);
        exists.quantity = exists.quantity + 1;
        newCart = [...rest,exists]
      }
     SetCart(newCart)
     addToDb(Seletedproduct._id)
  }


    return (
     
   <div className='flex display'>
  
  <div className=' justify-center   ml-10 mr-32 mt-10 grid grid-cols-3 gap-11'>

    
    {
      Products.slice(0, 6) .map(product=><Product
      key={product._id}
      product={product}
      handleAddtoCart={handleAddtoCart}
      ></Product>)
    }
   
  </div>
  <div>
    <Link to={''} className= >seemore</Link>
  </div>
  <div class="indicator mt-24 mr-10 ">
        <Cartt Cart ={Cart}></Cartt>
       
      </div>

  </div>   
    );
};

export default Products;
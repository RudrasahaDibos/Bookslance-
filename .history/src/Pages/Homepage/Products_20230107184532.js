import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Product from '../Homepage/Product';

const Products = () => {

   const[Products,Setproduct]=useState([])


  useEffect(()=>{
    fetch('product.json')
    .then(res=>res.json())
    .then(data=>Setproduct (data))

  },[])
 
  const handleAddtoCart =(product)=>{
     console.log(product);
  }


    return (
     
   <div>
   <h1 className='text-center text-2xl' >Book</h1>
  <div className=' justify-center grid grid-cols-3 gap-20'>
  
    {
      Products.map(product=><Product
      key={product._id}
      product={product}
      handleAddtoCart={handleAddtoCart}
      ></Product>)
    }
  </div>

  </div>
      

    
    );
};

export default Products;
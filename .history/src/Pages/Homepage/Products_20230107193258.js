import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Product from '../Homepage/Product';

const Products = () => {
  
   const[Products,Setproduct]=useState([])
   const [Cart,SetCart] = useState([])

  useEffect(()=>{
    fetch('product.json')
    .then(res=>res.json())
    .then(data=>Setproduct (data))

  },[])
 
  const handleAddtoCart =(product)=>{
     console.log(product);
     const NewCart =[...Cart,product]
     SetCart(NewCart)
  }


    return (
     
   <div>
   <h1 className='text-center text-2xl' >Book</h1>
  <div className=' justify-center grid grid-cols-2 gap-1'>
  
    
    {
      Products.map(product=><Product
      key={product._id}
      product={product}
      handleAddtoCart={handleAddtoCart}
      ></Product>)
    }

    <div class="indicator">
        <span class="indicator-item badge badge-secondary">{Cart.length}</span> 

        <button class="btn">inbox</button>
        {
          Cart.map(cart=>)
        }
      </div>
   

  </div>

  </div>   
    );
};

export default Products;
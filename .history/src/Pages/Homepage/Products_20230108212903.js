import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { addToDb } from '../../Utilits/Fakedb';
import Addtocart from '../Addtocart/Addtocart';
import OrderSummary from '../Addtocart/OrderSummary';
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
     addToDb(product._id)
  }


    return (
     
   <div className='flex display'>
  
  <div className=' justify-center   ml-10 mr-32 mt-10 grid grid-cols-3 gap-11'>

    
    {
      Products.map(product=><Product
      key={product._id}
      product={product}
      handleAddtoCart={handleAddtoCart}
      ></Product>)
    }

    
   

  </div>
  <div class="indicator mt-3 6mr-10 ">
         <OrderSummary Cart={Cart} ></OrderSummary>
       
      </div>

  </div>   
    );
};

export default Products;
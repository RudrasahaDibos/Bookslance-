import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
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
  }


    return (
     
   <div className='flex display'>
  
  <div className=' justify-center  ml-40 mr-40 mt-10 grid grid-cols-3 gap-'>

    
    {
      Products.map(product=><Product
      key={product._id}
      product={product}
      handleAddtoCart={handleAddtoCart}
      ></Product>)
    }

    
   

  </div>
  <div class="indicator mt-40 ">
        <span class="indicator-item badge badge-secondary">{Cart.length}</span> 

        <button class="btn">Cart</button>
        {/* {
          Cart.map(cart=><OrderSummary
          key={cart._id}
          cart={cart}

          ></OrderSummary>)
        } */}
      </div>

  </div>   
    );
};

export default Products;
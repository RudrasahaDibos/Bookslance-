import React from 'react';
import UseCart from '../../Hooks/UseCart';
import UseProduct from '../../Hooks/UseProduct';

const Addtocart = () => {

   const [Products , Setproduct] = UseProduct();
   const [Cart,SetCart] = UseCart(Products);
  
    return (
        <div>
              <div>

              </div>
              <div>
              <h1>This is car{Products.length}</h1>
            <h1>This Cart {Cart.length}</h1>
              </div>
        </div>
    );
};

export default Addtocart;
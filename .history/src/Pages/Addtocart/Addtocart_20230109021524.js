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
           
              </div>
        </div>
    );
};

export default Addtocart;
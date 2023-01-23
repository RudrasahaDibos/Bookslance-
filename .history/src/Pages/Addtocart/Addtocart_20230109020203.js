import React from 'react';
import UseCart from '../../Hooks/UseCart';
import UseProduct from '../../Hooks/UseProduct';

const Addtocart = () => {

   const [Products , Setproduct] = UseProduct();
   const [Cart,SetCart] = UseCart()
  
    return (
        <div>
            <h1>This is car{Products.length}</h1>
            <h1>This </h1>
        </div>
    );
};

export default Addtocart;
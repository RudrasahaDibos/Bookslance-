import React from 'react';
import UseProduct from '../../Hooks/UseProduct';

const Addtocart = () => {

   const [Products , Setproduct] = UseProduct();
   const [Cart,SetCart] = USeCa
  
    return (
        <div>
            <h1>This is car{Products.length}</h1>
        </div>
    );
};

export default Addtocart;
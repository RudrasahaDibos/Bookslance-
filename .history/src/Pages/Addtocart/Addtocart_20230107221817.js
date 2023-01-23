import React from 'react';

const Addtocart = ({Cart}) => {

    let total = 0;
    for(const Product of Cart ){
        total = total+Product.price;
    }
  
    return (
        <div>
            <h1>This is cart</h1>
        </div>
    );
};

export default Addtocart;
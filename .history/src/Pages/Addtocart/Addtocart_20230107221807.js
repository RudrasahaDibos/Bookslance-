import React from 'react';

const Addtocart = (props) => {
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
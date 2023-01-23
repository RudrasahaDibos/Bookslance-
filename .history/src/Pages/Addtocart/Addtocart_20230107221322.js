import React from 'react';

const Addtocart = (props) => {
  const {Cart}=props
    let total = 0;
    for(const Product of Cart ){
        total =total+product.price;
    }
    return (
        <div>
            <h1>This is cart:{total}</h1>
        </div>
    );
};

export default Addtocart;
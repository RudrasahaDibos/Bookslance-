import React from 'react';

const Addtocart = (props) => {
  const {Cart}=props
    let total = 0;
    for(const product of Cart ){
        total =total+product.price;
    }
    return (
        <div>
            <h1>This is cart:{totla}</h1>
        </div>
    );
};

export default Addtocart;
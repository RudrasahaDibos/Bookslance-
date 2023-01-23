import React from 'react';

const Addtocart = ({Cart}) => {
    const {name} =Cart;
    
    return (
        <div>
            <h1>This is cart{name}</h1>
        </div>
    );
};

export default Addtocart;
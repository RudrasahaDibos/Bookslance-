import React from 'react';

const Addtocart = ({Cart}) => {
    const {name} =Cart;

    let total
    return (
        <div>
            <h1>This is cart{name}</h1>
        </div>
    );
};

export default Addtocart;
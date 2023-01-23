import React from 'react';

const Cart = ({Cart}) => {
    let total = 0;
    let shipping =0;
    let quantity = 0;
    for(const Product of Cart ){
        quantity = quantity + Product.quantity;
        total = total+Product.price *Product.quantity ;
        shipping = shipping + Product.shipping;
    }
    const tax =(total*0.1).toFixed(2);
    const GrandTotal = total +shipping + parseFloat(tax);
    return (
        <div className='fixed top-60 left-200 right-0 bottom-20 '>
        <div class="indicator mt-36 mr-10  ">
       <span class="indicator-item badge badge-secondary">{quantity}</span> 
       <Link to={'/addtocart'} class="btn"><FontAwesomeIcon className='text-4xl' icon={faCartShopping} ></FontAwesomeIcon></Link>
     </div>
     
    );
};

export default Cart;
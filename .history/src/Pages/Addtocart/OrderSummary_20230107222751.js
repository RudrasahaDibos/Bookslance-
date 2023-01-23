import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping} from '@fortawesome/free-solid-svg-icons'
const OrderSummary = ({Cart}) => {
    let total = 0;
    let shipping =0;
    for(const Product of Cart ){
        total = total+Product.price;
        shipping = shipping + Product.shipping;
    }
    const tax = (total*0.1).toFixed;
    return (
        <div class="indicator mt-36 mr-10 fixed top-60 left-200 right-0 bottom-20  ">
        <span class="indicator-item badge badge-secondary">{Cart.length}</span> 
        <h1>Total:${total}</h1>
        <h1></h1>
        <Link to={'/addtocart'} class="btn"><FontAwesomeIcon className='text-4xl' icon={faCartShopping} ></FontAwesomeIcon></Link>
      </div>
    );
};

export default OrderSummary;
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
    const tax =(total*0.1).toFixed(2);
    const GrandTotal = total +shipping + parseFloat(tax);
    return (
       <div >
         <div class="indicator mt-36 mr-10  ">
        <span class="indicator-item badge badge-secondary">{Cart.length}</span> 
        <Link to={'/addtocart'} class="btn"><FontAwesomeIcon className='text-4xl' icon={faCartShopping} ></FontAwesomeIcon></Link>
      </div>
      <div>
        <h1>Total:{total}</h1>
      </div>
       </div>
    );
};

export default OrderSummary;
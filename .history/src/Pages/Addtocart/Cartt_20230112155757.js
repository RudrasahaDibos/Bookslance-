import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import UseCart from '../../Hooks/UseCart';
import Products from '../Homepage/Products';

const Cartt = ({Cart}) => {
    const {Products ,setProducts} = Use
    const {Cart ,setCart} = UseCart(Products)
    let quantity = 0;
    for(const Product of Cart ){
        quantity = quantity + Product.quantity; 
    }
    return (
        <div className='fixed top-60 left-200 right-0 '>
        <div class="indicator mt-36 mr-10  ">
       <span class="indicator-item badge badge-secondary">{quantity}</span> 
       <Link to={'/addtocart'} class="btn"><FontAwesomeIcon className='text-4xl' icon={faCartShopping} ></FontAwesomeIcon></Link>
     </div>
     </div>
     
    );
};

export default Cartt;
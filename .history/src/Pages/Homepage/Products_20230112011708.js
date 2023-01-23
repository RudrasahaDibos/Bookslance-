import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import UseCart from "../../Hooks/UseCart";

import UseProduct from "../../Hooks/UseProduct";
import { addToDb, getStoredCart } from "../../Utilits/Fakedb";
import Cartt from "../Addtocart/Cartt";

import Product from "../Homepage/Product";

const Products = () => {
  const [Products, Setproduct] = UseProduct();
  const [Cart, SetCart] = UseCart(Products);
  const [pageCount, setpageCount] = useState(0);
  const [page, setpage] = useState(0);
  const  [size ,setpagesize]  = useState(10)

  useEffect(()=>{
    fetch(`http://localhost:5000/bookproduct?page=${page}&size=${size}`)
    .then(res=>res.json())
    .then(data=>Setproduct (data))

  },[page ,size])


  useEffect(() => {
    fetch("http://localhost:5000/bookproductCount").then((res) =>
      res.json().then((data) => {
        const count = data.count;
        const pages = Math.ceil(count / 10);
        setpageCount(pages);
      })
    );
  }, []);

  const handleAddtoCart = (Seletedproduct) => {
    let newCart = [];
    const exists = Cart.find((product) => product._id === Seletedproduct._id);
    if (!exists) {
      Seletedproduct.quantity = 1;
      newCart = [...Cart, Seletedproduct];
    } else {
      const rest = Cart.filter((product) => product._id !== Seletedproduct._id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }
    SetCart(newCart);
    addToDb(Seletedproduct._id);
  };

  return ( 
    <div className="flex display">
      <div className=" ">
        <div>
        {Products.map((product) => (
          <Product
            key={product._id}
            product={product} 
            handleAddtoCart={handleAddtoCart}
          ></Product>
        ))}
        </div>

         <div>
         <div className="btn-group  mb-6">
          {[...Array(pageCount).keys()].map((number) => (
           <button 
           className={ page === number ? 'btn btn-active' : 'btn '}
           onClick={()=>setpage(number)}
           
         
           >{number + 1}</button>
            
          ))}
        
          {
            
            <select className="btn btn-success ml-2"  onChange={event => setpagesize(event.target.value)} >

              <option value="5">5</option>
              <option value="10" selected>10</option>
              <option value="15">15</option>
              <option value="20">20</option>
            </select>
          }

        </div>
         </div>
      </div>

      <div class="indicator mt-24 mr-10 ">
        <Cartt Cart={Cart}></Cartt>
      </div>
    </div>
  );
};

export default Products;

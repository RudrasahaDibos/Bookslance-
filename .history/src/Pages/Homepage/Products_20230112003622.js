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
      <div className=" justify-center  ml-10  mr-32 mt-10  grid lg:grid-cols-4 lg:gap-10 md:grid-cols-2 md:gap-8 sm:grid-cols-1 gap-1">
        {Products.map((product) => (
          <Product
            key={product._id}
            product={product}
            handleAddtoCart={handleAddtoCart}
          ></Product>
        ))}

        <div className="btn-group ml-96 mb-6">
          {[...Array(pageCount).keys()].map((number) => (
           <button 
           className={ page === number ? 'btn btn-active' : 'btn '}
           onClick={()=>setpage(number)}
           
         
           >{number + 1}</button>
            
          ))}

          {
            <select name="" id="">

              <option value="5"></option>
              <option value=""></option>
              <option value=""></option>
            </select>
          }

        </div>
      </div>

      <div class="indicator mt-24 mr-10 ">
        <Cartt Cart={Cart}></Cartt>
      </div>
    </div>
  );
};

export default Products;

import React from "react";
import UseCart from "../../Hooks/UseCart";
import UseProduct from "../../Hooks/UseProduct";
import ReviewItem from "../ReviewItem/ReviewItem";
import { removeFromDb } from "../../Utilits/Fakedb";
import Cartt from "./Cartt";
import OrderSummary from "./OrderSummary";

const Addtocart = () => {
  const [Products, Setproduct] = UseProduct();
  const [Cart, SetCart] = UseCart(Products);

  const handaleRemoveItem = (product) => {
    const rest = Cart.filter((pd) => pd._id !== product._id);
    SetCart(rest);
    removeFromDb(product._id);
  };

  return (
    <div className="flex">
      <div class="overflow-x-auto lg:w-auto sm:w-60 ">
        <table class="table table-zebra w-full">
          <thead>
            <tr>
              <th>Image</th>
              <th>
               Name
              </th>
              <th>price</th>
              <th>Shipping && Quantity</th>
              <th></th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {Cart.map((product) => (
              <ReviewItem
                key={product._id}
                product={product}
                handaleRemoveItem={handaleRemoveItem}
              ></ReviewItem>
            ))}
          </tbody>
        </table>
      </div>

      <div className="card   fl">
        <OrderSummary Cart={Cart}></OrderSummary>
        <Cartt Cart={Cart}></Cartt>
      </div>
    </div>
  );
};

export default Addtocart;

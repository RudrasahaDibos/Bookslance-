import React from "react";
import UseCart from "../../Hooks/UseCart";
import ReviewItem from "../ReviewItem/ReviewItem";
import { removeFromDb } from "../../Utilits/Fakedb";
import Cartt from "./Cartt";
import OrderSummary from "./OrderSummary";

const Addtocart = () => {
 
  const [Cart, SetCart] = UseCart();
  

  const handaleRemoveItem = (product) => {
    console.log(product)
    const rest = Cart.filter(pd => pd._id !== product._id);
    SetCart(rest);
    removeFromDb(product._id);

  };

  return (
    <div className="flex">
    <div className="justify-center   ml-10  mr-32 mt-10  grid grid-cols-2 gap-2">
    {Cart.map(product => (
              <ReviewItem
                key={product._id}
                product={product}
                handaleRemoveItem={handaleRemoveItem}
              ></ReviewItem>
            ))}
    </div>


     
      <div className="card   fixed left-96 ml-48 mt-5"> 
        <OrderSummary SetCart={SetCart}  product={product} Cart={Cart}></OrderSummary>
        <Cartt Cart={Cart}></Cartt>
      </div>
    </div>
  );
};

export default Addtocart;

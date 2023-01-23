import React from "react";

const Product = ({ product, handleAddtoCart }) => {
  const { name, img, price, seller } = product;
  return (
   
        <div  class="card   w-60 bg-base-50 shadow-xl">
          <label for="my-modal-6"   class="hover:btn">open modal</label>
      <figure class="px-20 pt-20">
        <img src={img} alt="Shoes" class="rounded-xl" />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">{name}</h2>
        <p> Price :  BDT. {price}</p>
        <p> Author : {seller}</p>
        <div class="card-actions">
          <button
            onClick={() => handleAddtoCart(product)}
            class="btn btn-primary"
          >
            Add To cart
          </button>
        </div>
      </div>
   
    </div>
  
  );
};

export default Product;

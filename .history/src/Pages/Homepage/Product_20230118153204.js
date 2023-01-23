import React from "react";

const Product = ({ product, handleAddtoCart }) => {
  const { name, img, price, seller } = product;
  return (
   
        <div  class="card   w-60 bg-base-50 shadow-xl">
        <label for="my-modal-6"   class="hover:btn-sc"><span className="text-white">open modal</span></label>
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
      <input type="checkbox" id="my-modal-6" class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
    <h3 class="font-bold text-lg">Congratulations random Internet user!</h3>
    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
    <div class="modal-action">
      <label for="my-modal-6" class="btn">Yay!</label>
    </div>
  </div>
</div>
    </div>
  
  );
};

export default Product;
import React from "react";

const Product = ({ product, handleAddtoCart }) => {
  const { name, img, price, seller } = product;
  return (
    <li class="group/item hover:bg-slate-100 card  w-60 bg-base-50 shadow-xl">
        <div for="my-modal-6"  class="relative">
        
        
        <a class="group/edit invisible hover:bg-slate-200 group-hover/item:visible">
        <label for="my-modal-6"   class="group-hover/edit:text-gray-700  "><span className="text-xl btn ml-10  relative  btn-secondary" >View Details</span></label>
      </a>
      
      <figure class="px-20 pt-20">
        <img src={img} alt="Shoes" class="rounded-xl" />
      </figure>
      <div class="card-body relative items-center text-center">
        <h2 class="card-title">{name}</h2>
        <p> Price :  BDT. {price}</p>
        <p> Author : {seller}</p>
        <div class="group/item hover:bg-slate-100 relative">
          {/* <button
            onClick={() => handleAddtoCart(product)}
            class="btn btn-primary"
          >
            Add To cart
          </button> */}
          <a class="group/edit invisible hover:bg-slate-200 group-hover/item:visible">
        <label  onClick={() => handleAddtoCart(product)}  class="group-hover/edit:text-gray-700  "><span className="text-xl btn ml-10 f  btn-secondary" >Add to Card</span></label>
      </a>
        </div>
       
      </div>
      
      <input type="checkbox" id="my-modal-6" class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
    <h3 class="font-bold text-lg">{name}</h3>
    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
    <div class="modal-action">
      <label for="my-modal-6" class="btn">Yay!</label>
    </div>
  </div>
</div>


    </div>
    </li>
  
  );
};

export default Product;

import React from "react";

const Product = ({ product, handleAddtoCart,setview }) => {
  const { name, img, price, seller,category } = product;
  return (
    <li  class="group/item hover:bg-slate-100 card  w-60 bg-base-50 shadow-xl">
      <div  class="relative">
        <a class="group/edit invisible hover:bg-slate-200 group-hover/item:visible">
          <label  onClick={()=>setvie}
           for="my-modal-6" class="group-hover/edit:text-gray-700  text-xl btn ml-10  relative  btn-secondary ">

              View Details
            
          </label>
        </a>

        <figure class="px-20 pt-20">
          <img src={img} alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body relative items-center text-center">
          <h2 class="card-title">{name}</h2>
          <p> Price : BDT. {price}</p>
          <p> Author : {seller}</p>
          <div class="group/item hover:bg-slate-100 relative">
            <a class="group/edit invisible hover:bg-slate-200 group-hover/item:visible">
              <label
                onClick={() => handleAddtoCart(product)}
                class="group-hover/edit:text-gray-700  "
              >
                <span className="text-xl btn ml-5 mr-5 mt-10  btn-secondary">
                  AddtoCard
                </span>
              </label>
            </a>
          </div>
        </div>

        <input type="checkbox" id="my-modal-6" class="modal-toggle" />
        <div class="modal modal-bottom sm:modal-middle">
          <div class="modal-box card lg:card-side bg-base-100 shadow-xl">
            <figure>
            <img src={img} alt="Shoes" />
            </figure>
            <div class="card-body">
              <h2 class="card-title">{name}</h2>
              <p>{category}</p>
              <p>{seller}<small>(Author)</small></p>
              <div class="card-actions justify-end modal-action">
                <label for="my-modal-6" class="btn">
                  x
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Product;

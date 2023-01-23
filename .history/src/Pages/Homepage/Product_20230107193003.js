import React from 'react';

const Product = ({product,handleAddtoCart}) => {
  const {name,img} = product;
    return (
     
<div class="card  bg-base- shadow-xl">
  <figure class="px-10 pt-10">
    <img src={img}alt="Shoes" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">{name}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions">
      <button onClick={()=>handleAddtoCart(product)}  class="btn btn-primary">Add To cart</button>
    </div>
  </div>
</div>
      
    );
};

export default Product;
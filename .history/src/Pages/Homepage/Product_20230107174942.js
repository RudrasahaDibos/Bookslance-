import React from 'react';

const Product = ({product}) => {
  const {name,img} = product;
    return (
     
<div class="card  bg-base-100 shadow-xl image-full">
  <figure><img src={img} alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">name</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Add</button>
    </div>
  </div>
</div>
      
    );
};

export default Product;
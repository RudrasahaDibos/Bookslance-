import React from "react";

const ReviewItem = ({ product ,handaleRemoveItem }) => {
  const { name, img ,price,shipping,quantity } = product;

  return (

<div class="card w-72 bg-base-100 shadow-xl  ">
<div class="avatar">
              <div class="mask mask-squircle ml-24 w-24 h-24">
                <img src={img} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
  <div class="card-body">
    <h2 class="card-title">{name.length > 20 ? name.slice(0, 20)+ '....' : name}</h2>
    <p>price : $ {price}</p>
    <p>Shipping : $ {shipping}</p>
    <p> Quantity:{quantity}</p>
    <div class="card-actions justify-end">
      <button  onClick={()=>handaleRemoveItem(product)} class="btn btn-primary">X</button>
    </div>
  </div>
</div>



   
   
  );
};

export default ReviewItem;

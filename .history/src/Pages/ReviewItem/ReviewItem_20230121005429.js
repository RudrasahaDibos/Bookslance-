import React from "react";

const ReviewItem = ({ product ,handaleRemoveItem }) => {
  const { name, img ,price,shipping,quantity } = product;

  return (

<div class="card w-72 bg-base-100 shadow-xl  ">
<div class="avatar">
              <div class="mask mask-squircle w-24 h-24">
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



    //   <tr>
    //     <th > <div class="avatar">
    //           <div class="mask mask-squircle w-12 h-12">
    //             <img src={img} alt="Avatar Tailwind CSS Component" />
    //           </div>
    //         </div></th>
    //   <th >{name.length > 20 ? name.slice(0, 20)+ '....' : name}</th>
    //   <td >price : $ {price}</td>
    //   <td  > <small>Shipping : $ {shipping}</small>
  
    //     <small>
    //     Quantity:{quantity}
    //     </small>
    //   </td>
    //   <td></td>
    //   <td><button  onClick={()=>handaleRemoveItem(product)} onClick={()=>handaleRemoveItem(product)} class="btn btn-square btn-sm">
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             class="h-6 w-6"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             stroke="currentColor"
    //           >
    //             <path
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //               stroke-width="2"
    //               d="M6 18L18 6M6 6l12 12"
    //             />
    //           </svg>
    //         </button></td>
    // </tr>

   
  );
};

export default ReviewItem;

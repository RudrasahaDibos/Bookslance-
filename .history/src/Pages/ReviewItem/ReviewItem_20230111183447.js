import React from "react";

const ReviewItem = ({ product ,handaleRemoveItem }) => {
  const { name, img ,price,shipping,quantity } = product;

  return (
    <div>

<tr>
      
        <td>
          <div class="flex items-center space-x-3">
            <div class="avatar">
              <div class="mask mask-squircle w-12 h-12">
                <img src={img} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div class="font-bold"> <p title={name}>{name.length > 20 ? name.slice(0, 20)+ '....' : name}</p></div>
              <div class="text-sm opacity-50">price : $ {price}</div>
            </div>
          </div>
        </td>
        <td>
       
          <br/>
          <span class="badge badge-ghost badge-sm">Shipping : $ {shipping}</span>
          {/* <span class="badge badge-ghost badge-sm">Quantity : $ {quantity}</span> */}
        </td>
        <td> </td>
        <th>
          <button class="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>

      <tr>
      <th>{name}</th>
      <td>{shipping}</td>
      <td>{ role !== 'admin' && < onClick={makeadmin}  class="btn btn-primary">Make Admin</
    </tr>






      {/* <div class="card   w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <div className="dispaly flex">
          <div>
          <img
            src={img}
            class="mask mask-squircle w-12 mr-7 h-12"
            alt="Avatar Tailwind CSS Component"
          />
          </div>
          <div>
            <p title={name}>{name.length > 20 ? name.slice(0, 20)+ '....' : name}</p>
            <p> price : $ {price}</p>
            <p> Shipping : $ {shipping}</p>
            <p> Quantity : $ {quantity}</p>
          </div>
          </div>
          <div class="card-actions justify-end">
            <button  onClick={()=>handaleRemoveItem(product)}  class="btn btn-square btn-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        
        </div>
      </div> */}
    </div>
  );
};

export default ReviewItem;

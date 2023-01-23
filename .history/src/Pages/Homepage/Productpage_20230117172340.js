import React from 'react';

const Productpage = ({product}) => {
    // const { name, img ,price,shipping,quantity } = product;
    return (
       
      <tr>
      <th > <div class="avatar">
            <div class="mask mask-squircle w-12 h-12">
              <img src={img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div></th>
    <th >{name.length > 20 ? name.slice(0, 20)+ '....' : name}</th>
    <td >price : $ {price}</td>
    <td  > <small>Shipping : $ {shipping}</small>

      <small>
      Quantity:{quantity}
      </small>
    </td>
    <td></td>
    
  </tr>

    );
};

export default Productpage;
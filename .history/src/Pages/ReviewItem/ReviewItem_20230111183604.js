import React from "react";

const ReviewItem = ({ product ,handaleRemoveItem }) => {
  const { name, img ,price,shipping,quantity } = product;

  return (
  



      <tr>
      <th>{name}</th>
      <td>{shipping}</td>
      <td>{price}</td>
      <td><button class="btn btn-secondary">Remove User</button></td>
    </tr>






      
   
  );
};

export default ReviewItem;

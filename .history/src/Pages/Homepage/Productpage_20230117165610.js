import React from 'react';
import UseCart from '../../Hooks/UseCart';

const Productpage = () => {
    const [Cart, SetCart] = UseCart();

    return (
        <div>
            <div className="flex">
      <div class="overflow-x-auto lg:w-auto sm:w-60 ">
        <table class="table table-zebra w-full">
          <thead>
            <tr>
              <th>Image</th>
              <th>
               Name
              </th>
              <th>price</th>
              <th>Shipping && Quantity</th>
              <th></th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {Cart.map(product => (
              <ReviewItem
                key={product._id}
                product={product}
                handaleRemoveItem={handaleRemoveItem}
              ></ReviewItem>
            ))}
          </tbody>
        </table>
      </div>
      </
        </div>
    );
};

export default Productpage;
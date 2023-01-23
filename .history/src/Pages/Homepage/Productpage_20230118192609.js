import React from 'react';

const Productpage = ({view}) => {
    return (
        <input type="checkbox" id="my-modal-6" class="modal-toggle" />
        <div class="modal modal-bottom sm:modal-middle">
          <div class="modal-box card lg:card-side bg-base-100 shadow-xl">
            <figure>
            <img src='' alt="Shoes" />
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
    );
};

export default Productpage;

import React from 'react';

const Inventory = ({}) => {
    return (
        <div className='ml-96'>
            <div class="card flex-shrink-0 w-full   max-w-sm shadow-2xl bg-base-100">
        <div class="card-body">
        <div class="form-control">
            <label class="label">
              <span class="label-text">Name</span>
            </label>
            <input type="text" placeholder="Name" class="input input-bordered" />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input type="text" placeholder="email" class="input input-bordered" />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Address</span>
            </label>
            <input type="text" placeholder="address" class="input input-bordered" />
            
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">PhoneNumber</span>
            </label>
            <input type="number" placeholder="Number" class="input input-bordered" />
            
          </div>
          <div class="form-control mt-6">
            <button class="btn btn-primary">Add Shopping</button>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Inventory;
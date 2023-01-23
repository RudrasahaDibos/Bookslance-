import React from 'react';
import UseProduct from '../../Hooks/UseProduct';

const DeleteCart= () => {
    const [Products, Setproduct] = UseProduct();
    const handleDelete = id =>{
       const proceed =  window.confirm('Are you sure?')
       if(proceed){
           const url =`http://localhost:5000/bookproduct/${id}`;
           fetch(url,{

              method:'DELETE',
              headers:{
                authorization:`Bearer ${localStorage.getItem('accesstoken')} `
            }
           })
           .then(res => res.json(id))
           .then(data =>{
               console.log(data);
               const remaining = Products.filter(product =>product._id !==id)
               Setproduct(remaining);
           })
       }
    }
    return (
        <div className='justify-center card  ml-10  mr-32 mt-10  grid grid-cols-4 gap-10 '>
          
        <h1>Delete Some Book </h1>
        {
            Products.map(product=><div key={product._id}>
               <div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">{product.name}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <button  class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        <h4>{product.name}<button className='btn'  onClick={() => handleDelete(product._id)}>X</button></h4>
            </div>)
        }
    </div>
    );
};

export default DeleteCart;
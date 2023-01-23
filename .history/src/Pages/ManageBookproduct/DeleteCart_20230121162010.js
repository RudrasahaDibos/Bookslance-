import React from 'react';
import { toast } from 'react-toastify';
import UseProduct from '../../Hooks/UseProduct';

const DeleteCart= () => {
    const [Products, Setproduct] = UseProduct();
    const handleDelete = id =>{
       const proceed =  toast.confirm('Are you sure?')
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
        <div className='justify-center card  ml-10  mr-32 mt-10  grid grid-cols-2 gap-10 '>
          
        
        {
            Products.map(product=><div key={product._id}>
               <div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">{product.name}</h2>
    <div class="card-actions justify-end">
      <button onClick={() => handleDelete(product._id)} class="btn btn-primary">X</button>
    </div>
  </div>
</div>
       
            </div>)
        }
    </div>
    );
};

export default DeleteCart;
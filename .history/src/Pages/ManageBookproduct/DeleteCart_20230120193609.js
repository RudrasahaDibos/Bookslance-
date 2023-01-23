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
        <div>
        <h1>manageservice</h1>
        {
            Products.map(product=><div key={product._Id}>

        <h4>{product.name}<button className=''  onClick={() => handleDelete(product._id)}>X</button></h4>
            </div>)
        }
    </div>
    );
};

export default DeleteCart;
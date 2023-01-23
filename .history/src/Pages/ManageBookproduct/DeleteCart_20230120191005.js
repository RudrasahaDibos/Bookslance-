import React from 'react';
import Hooks from '../../Hooks/Hooks';

const DeleteCart= () => {
    const [products,setproducts]= Hooks();
    const handleDelete = id =>{
       const proceed =  window.confirm('Are you sure?')
       if(proceed){
           const url =`http://localhost:5000//${id}`;
           fetch(url,{

              method:'DELETE'
           })
           .then(res => res.json())
           .then(data =>{
               console.log(data);
               const remaining = products.filter(product =>product._id !==id)
             setproducts(remaining);
           })
       }
    }
    return (
        <div>
        <h1>manageservice</h1>
        {
            products.map(product=><div key={product._Id}>

        <h4>{product.name}<button onClick={() => handleDelete(product._id)}>X</button></h4>
            </div>)
        }
    </div>
    );
};

export default DeleteCart;
import React from 'react';
import { useQuery } from 'react-query';

const Allusers = () => {
const {data:users, } = useQuery('users',()=>fetch(`http://localhost:5000/user`,{
   method: "GET",
   headers:{
    'authorization':`Bearer ${localStorage.getItem('accesstoken')} `
   }
})
.then(res=>res.json())

)

    return (
        <div>
            
        </div>
    );
};

export default Allusers;
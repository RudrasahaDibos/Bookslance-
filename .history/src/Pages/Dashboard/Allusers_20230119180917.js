import React from 'react';
import { useQuery } from 'react-query';

const Allusers = () => {
const { } = useQuery('users',()=>fetch(`http://localhost:5000/user`,{
   method: "GET",
   headers:{
    'authorization':`Bearer ${localStorage.getItem('accesstoken')} `
   }
}))

    return (
        <div>
            
        </div>
    );
};

export default Allusers;
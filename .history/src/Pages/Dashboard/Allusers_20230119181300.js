import React from 'react';
import { useQuery } from 'react-query';
import Loading from "../";

const Allusers = () => {
const {data:users,isLoading } = useQuery('users',()=>fetch(`http://localhost:5000/user`,{
   method: "GET",
   headers:{
    'authorization':`Bearer ${localStorage.getItem('accesstoken')} `
   }
})
.then(res=>res.json())

)
if(isLoading){
    return<Loading></Loading>
}

    return (
        <div>
            
        </div>
    );
};

export default Allusers;
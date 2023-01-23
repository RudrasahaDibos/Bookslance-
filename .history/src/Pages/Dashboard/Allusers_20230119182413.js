import React from 'react';
import { useQuery } from 'react-query';
import Loading from "../Shared/Loading";

const Allusers = () => {

const{data:users,isLoading}=useQuery('users',()=>fetch('http://localhost:5000/user',{

  method:"GET",
  headers:{
    'authorization':`Bearer ${localStorage.getItem('accesstoken')} `
  }


}).then(res=>res.json()))

if(isLoading){
    return<Loading></Loading>
}

    return (
        <div>
        <h1>All user:{users.length}</h1>
        <div class="overflow-x-auto">
<table class="table table-zebra w-full">

<thead>
  <tr>
    <th></th>
    <th>Name</th>
    <th>Job</th>
    <th>Favorite Color</th>
  </tr>
</thead>
<tbody>
 
  {
    users.map( (user ,index) =><USer
    key={user._id}
    user={user}
    index={index}
    >



    </USer>)
  }
  
</tbody>
</table>
</div>
    </div>
    );
};

export default Allusers;
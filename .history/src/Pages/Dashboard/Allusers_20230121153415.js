import React from 'react';
import { useQuery } from 'react-query';
import Loading from "../Shared/Loading";
import User from './User';

const Allusers = () => {
  const [removeuser ,setremoveuser ]

const{data:users,isLoading,refetch}=useQuery('users',()=>fetch('http://localhost:5000/user',{

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
    <th>Make-Admin</th>
    <th>Remove-user</th>
  </tr>
</thead>
<tbody>
 
  {
    users.map( (user ,index) =><User
    key={user._id}
    user={user}
    index={index}
    refetch={refetch}
    >



    </User>)
  }
  
</tbody>
</table>
</div>
    </div>
    );
};

export default Allusers;
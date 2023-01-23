import React from 'react';
import { useQuery } from 'react-query';
import Loading from "../Shared/Loading";

const Allusers = () => {


)
if(isLoading){
    return<Loading></Loading>
}

    return (
        <div>
        <h1>All user:{users.length}</h1>
        {/* <div class="overflow-x-auto">
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
    users.map( (user ,index) =><UserRow
    key={user._id}
    user={user}
    index={index}
    >



    </UserRow>)
  }
  
</tbody>
</table>
</div> */}
    </div>
    );
};

export default Allusers;
import React from 'react';
import { toast } from 'react-toastify';

const User = ({user,index,refetch}) => {
    const {email,role}=user;
    const makeadmin =()=>{
        fetch(`http://localhost:5000/user/admin/${email}`,{
         method:"PUT",
         headers:{
            authorization:`Bearer ${localStorage.getItem('accesstoken')} `
         }
        }).then(res=>res.json())
        .then(data=>{
           if(data.modif)
        })
    }


    return (
        <tr>
      <th>{index+1}</th>
      <td>{email}</td>
      <td> {role !== 'admin' &&  <button onClick={makeadmin}  class="btn btn-primary">Make Admin</button>}</td>
      <td><button class="btn btn-secondary">Remove User</button></td>
    </tr>
    );
};

export default User;
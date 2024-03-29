import React from 'react';
import { toast } from 'react-toastify';

const User = ({user,index,refetch}) => {
    const {email,role}=user;

   const removeuser = ()=>{
       fetch(`http://localhost:5000/user/${email}`,{

       }).then()
   }


    const makeadmin =()=>{
        fetch(`http://localhost:5000/user/admin/${email}`,{
         method:"PUT",
         headers:{
            authorization:`Bearer ${localStorage.getItem('accesstoken')} `
         }
        }).then(res=>{
            if(res.status === 403){
                toast.error('Failed to Make an admin')
            }
            
            
            res.json()})
        .then(data=>{
            if(data.modifiedCount > 0){
                toast.success(`Successfully made an admin`)
                refetch()
               
            }
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
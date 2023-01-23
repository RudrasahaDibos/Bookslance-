import React from 'react';

const User = ({user,index,refetch}) => {
    const {email}=user;
    const makeadmin =()=>{
        fetch(`http://localhost:5000/user/admin/${email}`,{
         method:"PUT",
         headers:{
            authorization:`Bearer ${localStorage.getItem('accesstoken')} `
         }
        }).then(res=>res.json())
        .then(data=>data)
    }


    return (
        <tr>
      <th>{index+1}</th>
      <td>{email}</td>
      <td> <button onClick={makeadmin}  class="btn btn-primary">Make Admin</button></td>
      <td><button class="btn btn-secondary">Remove User</button></td>
    </tr>
    );
};

export default User;
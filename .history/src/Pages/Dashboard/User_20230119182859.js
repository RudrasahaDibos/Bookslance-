import React from 'react';

const User = ({user,index,refetch}) => {
    const {email}=user;
    return (
        <tr>
      <th>{index+1}</th>
      <td>{email}</td>
      <td> <button   class="btn btn-primary">Make Admin</button></td>
      <td><button class="btn btn-secondary">Remove User</button></td>
    </tr>
    );
};

export default User;
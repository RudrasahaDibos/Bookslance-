import React from 'react';

const User = ({user,inde}) => {
    const {email}=user;
    return (
        <tr>
      <th>{index+1}</th>
      <td>{email}</td>
      <td></td>
      <td><button class="btn btn-secondary">Remove User</button></td>
    </tr>
    );
};

export default User;
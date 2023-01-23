import React from 'react';
import { useQuery } from 'react-query';

const Allusers = () => {
const { } = useQuery('users',()=>fetch(`http://localhost:5000/user`,{

}))

    return (
        <div>
            
        </div>
    );
};

export default Allusers;
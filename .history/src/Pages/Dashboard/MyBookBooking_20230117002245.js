import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const MyBookBooking = () => {

  const [bookbookings ,setbookbookings] = useState([])
  const [user,loading] = useAuthState(auth);
   useEffect(()=>{
    if(user){

    }

   },[])

    return (
        <div>
              <h1>hiii</h1>
        </div>
    );
};

export default MyBookBooking;
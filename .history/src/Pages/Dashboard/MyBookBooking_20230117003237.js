import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';

const MyBookBooking = () => {

  const [bookbookings ,setbookbookings] = useState([])
  const [user] = useAuthState(auth);
   useEffect(()=>{
    if(user){
          fetch(`http://localhost:5000/bookbooking?useremail`)
    }

   },[])

    return (
        <div>
              <h1>hiii</h1>
        </div>
    );
};

export default MyBookBooking;
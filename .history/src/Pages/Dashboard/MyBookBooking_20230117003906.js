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
          fetch(`http://localhost:5000/bookbooking?useremail=${user.email}`)
          .then(res=>res.json())
          .then(data =>setbookbookings(data))
    }

   },[user])

    return (
        <div>
              <h1>hiii{bookbookings.length}</h1>
              <div class="overflow-x-auto">
  <table class="table table-compact w-full">
    <thead>
      <tr>
        <th></th> 
        <th>Name</th> 
        <th>Job</th> 
        <th>company</th> 
        <th>location</th> 
        <th>Last Login</th> 
        <th>Favorite Color</th>
      </tr>
    </thead> 
    <tbody>
        {
           bookbookings.map() 
        }
    </tbody> 
    <tfoot>
      <tr>
        <th></th> 
        <th>Name</th> 
        <th>Job</th> 
        <th>company</th> 
        <th>location</th> 
        <th>Last Login</th> 
        <th>Favorite Color</th>
      </tr>
    </tfoot>
  </table>
</div>
        </div>
    );
};

export default MyBookBooking;
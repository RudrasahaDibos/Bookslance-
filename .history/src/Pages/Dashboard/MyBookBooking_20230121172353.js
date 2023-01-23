import { signOut } from 'firebase/auth';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../Firebase.init';

const MyBookBooking = () => {

  const [bookbookings ,setbookbookings] = useState([])
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
   useEffect(()=>{
    if(user){
          fetch(`http://localhost:5000/bookbooking?useremail=${user.email}`,{

       method:"GET",
       headers:{
        'authorization':`Bearer ${localStorage.getItem('accesstoken')} `
       }

          })
          .then(res=>{
            console.log('res',res)
            if(res.status  === 401 || res.status === 403){
              signOut(auth);
              localStorage.removeItem('accesstoken')
                  navigate('/home')
            }
           return res.json()})
          .then(data =>{
            setbookbookings(data)})
    }

   },[user])

    return (
        <div>
              <h1 className='text-3xl text-green-500' >My Bookings</h1>
              <div class="overflow-x-auto">
  <table class="table table-compact w-full">
    <thead>
      <tr>
        <th></th> 
        <th>Name</th> 
        <th>TotalMoney</th> 
        <th>Email</th> 
        <th>Phone</th> 
        <th>Address</th> 
        <th>Date</th>
        <th>Date</th>

      </tr>
    </thead> 
    <tbody>
        {
           bookbookings.map((bookbooking ,index) => <tr>
            <th>{index +1}</th> 
            <td>{bookbooking.username}</td> 
            <td>{bookbooking. GrandTotal}</td> 
            <td>{bookbooking.useremail }</td> 
            <td>{bookbooking.phone}</td> 
            <td>{bookbooking.Address}</td> 
            <td>{bookbooking.date}</td>
            <td>
          {(bookbooking.price && !bookbooking.paid)  && <Link to={`/dashboard/payment/${bookbooking._id}`} ><button className="btn btn-success">pay</button> </Link> }
          {(bookbooking.price && bookbooking.paid)  && <span className="text-success"> paid </span> }
        
        
        </td>
          </tr> ) 
        }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyBookBooking;
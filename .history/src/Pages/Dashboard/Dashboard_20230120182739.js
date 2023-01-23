import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../Firebase.init';
import useAdmin from '../../Hooks/useAdmin';

const Dashboard = () => {
  const [user, loading] = useAuthState(auth);
  const [admin]=useAdmin(user)
    return (
        <div class="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content ">
            <h1 className='text-red-500 text-3xl text-center' >Dashboard</h1>
            <Outlet></Outlet>
         
        
        </div> 
        <div class="drawer-side">
          <label for="my-drawer-2" class="drawer-overlay"></label> 
          <ul class="menu p-4 w-80 bg-base-100 text-base-content">
            
            <li><Link to={'/dashboard'}>MyBookingBook</Link></li>
            <li><Link to={'/dashboard/reviews'} >Reviews</Link></li>
           { admin &&  
            <>
            </>
           }
           { admin &&   <li><Link to={'/dashboard/addbook'} >Add A New Book</Link></li>}
          </ul>
        
        </div>
      </div>
    );
};

export default Dashboard;
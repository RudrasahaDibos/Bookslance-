import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col items-center justify-center">
            <h1 className='text-red-500 text-3xl text-center' >Dashboard</h1>
            <Outlet></Outlet>
          <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        
        </div> 
        <div class="drawer-side">
          <label for="my-drawer-2" class="drawer-overlay"></label> 
          <ul class="menu p-4 w-80 bg-base-100 text-base-content">
            
            <li><Link to={'/dashboard'}>Sidebar Item 1</Link></li>
            <li><Link to={'/'} >Sidebar Item 2</Link></li>
          </ul>
        
        </div>
      </div>
    );
};

export default Dashboard;
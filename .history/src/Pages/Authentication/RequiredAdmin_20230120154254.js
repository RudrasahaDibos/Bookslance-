import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../Firebase.init';
import useAdmin from '../../Hooks/useAdmin';
import Loading from '../../Shared/Loading';

const RequiredAdmin = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [admin,adminloading]=useAdmin(user)
  const  location = useLocation();
  
  if(loading ||adminloading){
    return <Loading></Loading>
  }

    if(user || !){
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    
    if(!user.emailVerified)
   {
    return  <div>
<div className="card">
  <h1></h1>
  <p className="title">Your email is not Verify</p>
  <p>Please Verify</p>
  <p> <button className='bbutton'
        onClick={async () => {
                   await sendEmailVerification();
                   toast('Sent email');
                  }}
        
        >Accept</button></p>
</div>
   
    </div>




    
   }

    return  children;
};

export default RequiredAdmin;
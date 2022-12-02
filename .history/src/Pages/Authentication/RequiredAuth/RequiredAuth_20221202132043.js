import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../Firebase.init';
import Loading from '../../Shared/Loading';
import '../RequiredAuth/RequiredAuth.css';

const RequiredAuth = ({ children }) => {
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
    const [user, loading] = useAuthState(auth);
  const  location = useLocation();
  
  if(loading){
    return <Loading></Loading>
  }

    if(!user){
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    
    if(!user.emailVerified)
   {
    return  <div>

<h2 style="text-align:center"></h2>

<div class="card">
  <h1></h1>
  <p class="title">Your email is not Verify</p>
  <p>Please Verify</p>
  <div style="margin: 24px 0;">
  
  </div>
  <p> <button 
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

export default RequiredAuth;
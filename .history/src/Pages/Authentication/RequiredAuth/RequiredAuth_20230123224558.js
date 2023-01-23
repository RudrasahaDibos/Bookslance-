import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../Firebase.init';
import Loading from '../../Shared/Loading';

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
//     return  <div>
// <div className="card">
//   <h1></h1>
//   <p className="title">Your email is not Verify</p>
//   <p>Please Verify</p>
//   <p> <button className='bbutton'
//         onClick={async () => {
//                    await sendEmailVerification();
//                    toast('Sent email');
//                   }}
        
//         >Accept</button></p>
// </div>
   
//     </div>

<div class="card w-96 bg-neutral text-neutral-content">
  <div class="card-body items-center text-center">
    <h2 class="card-title">Your email is not Verify</h2>
    <p>Please Verify</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Accept</button>
      <button class="btn btn-ghost">Deny</button>
    </div>
  </div>
</div>


    
   }

    return  children;
};

export default RequiredAuth;
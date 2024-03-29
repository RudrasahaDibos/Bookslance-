import {  signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../Firebase.init';

import useAdmin from '../../Hooks/useAdmin';
import Loading from '../../Shared/Loading';

const RequiredAdmin = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [admin,adminloading]=useAdmin(user)
  const  location = useLocation();
  
  if(loading ||adminloading){
    return <Loading></Loading>
  }

    if(user || !admin){
     signOut(auth)
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    
   

    return  children;
};

export default RequiredAdmin;
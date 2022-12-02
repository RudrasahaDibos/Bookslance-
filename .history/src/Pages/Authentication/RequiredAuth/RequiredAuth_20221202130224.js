import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { useLocation } from 'react-router-dom';
import auth from '../../../Firebase.init';

const RequiredAuth = () => {
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
    const [user, loading] = useAuthState(auth);
  const  location = useLocation();
    return (
        <div>
            
        </div>
    );
};

export default RequiredAuth;
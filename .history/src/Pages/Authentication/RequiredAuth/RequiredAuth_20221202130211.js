import React from 'react';
import { useSendEmailVerification } from 'react-firebase-hooks/auth';

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
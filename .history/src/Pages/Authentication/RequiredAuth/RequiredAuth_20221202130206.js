import React from 'react';

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
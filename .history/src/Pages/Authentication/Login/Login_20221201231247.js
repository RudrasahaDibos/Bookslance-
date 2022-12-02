import React from 'react';
import '../Login/Login.css'

const Login = () => {
    return (
        <div className='login-now'>
            <h1>LOGIN NOW</h1>
            <form>
           <input type="email" className='input-box' placeholder='  Your Email' />
           <input type="name" className='input-box' placeholder='Your Name' />
        

            </form>
        </div>
    );
};

export default Login;
import React from 'react';
import '../Login/Login.css'

const Login = () => {
    return (
        <div className='login-now'>
            <h1>LOGIN NOW</h1>
            <form>
           <input type="email" className='input-box' placeholder='Enter Your Email' />
           <input type="pass" className='input-box' placeholder='Enter  Your Name' />
        

            </form>
        </div>
    );
};

export default Login;
import React from 'react';
import '../Login/Login.css'

const Login = () => {
    return (
        <div className='loginnow'>
            <h1>LOGIN NOW</h1>
            <form>
           <input type="email" className='input-box' placeholder='Enter Your Email' />
           <input type="password" className='input-box' placeholder='Enter  Your password' />
           <br />
           <a href="">Forget Password</a>
            <button type='button' className='' ></button>
            
            </form>
        </div>
    );
};

export default Login;
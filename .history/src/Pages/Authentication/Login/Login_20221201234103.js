import React from 'react';
import { Link } from 'react-router-dom';
import '../Login/Login.css'

const Login = () => {
    return (
        <div className='loginnow'>
            <h1>LOGIN NOW</h1>
            <form>
           <input type="email" className='input-box' placeholder='ENTER YOUR EMAIL' />
           <input type="password" className='input-box' placeholder='' />
           <br />
           <a href="">FORGET PASSWORD</a>
           <br />
           <button type='button' className='loginbutton' >LOGIN</button>
            <hr></hr>
            <p className='or'>OR</p>
            <button type='button' className='loginbutton' >LOGIN WITH GOOGLE</button>
            <p>DON'T HAVE AN ACCOUNT YET ? <Link>CREATE A ACCOUNT !</Link> </p>
            </form>
        </div>
    );
};

export default Login;
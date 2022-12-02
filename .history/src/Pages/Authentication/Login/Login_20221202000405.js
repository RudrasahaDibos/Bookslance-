import React from 'react';
import { Link } from 'react-router-dom';
import '../Login/Login.css'
import image from '../Login/images.png';
import bg from '../../assets/images/bg.png';
const Login = () => {
    return (
        <div className='loginnow'>
            <img src="images.png" alt="" />
            <h1>LOGIN NOW</h1>
            <form>
           <input type="email" className='input-box' placeholder='ENTER YOUR EMAIL' />
           <input type="password" className='input-box' placeholder='ENTER YOUR PASSWORD' />
           <br />
           <a href="">FORGET PASSWORD</a>
           <br />
           <button type='button' className='loginbutton' >LOGIN</button>
            <hr></hr>
            <p className='or'>OR</p>
            <button type='button' className='googlebutton' >LOGIN WITH GOOGLE</button>
            <p>DON'T HAVE AN ACCOUNT YET ? <Link>CREATE A ACCOUNT !</Link> </p>
            </form>
        </div>
    );
};

export default Login;
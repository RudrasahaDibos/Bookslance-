
import React from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle} from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../Firebase.init';
import '../Login/Login.css'


const Login = () => {
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const [sendPasswordResetEmail,sending] = useSendPasswordResetEmail(auth);
     
      const navigate = useNavigate();
      const location = useLocation();
let from = location.state?.from?.pathname || "/";

       let signInError;


    // // if( loading || gloading){
       
    //   return <Loading></Loading>
    // }
  
    if(error || gerror){
       signInError= <p className='text-red-500'>{error?.message || gerror?.message}</p>
    }

 

     if(user || guser){
       navigate(from, { replace: true });
   }





   const onSubmit = (data) => {
       console.log(data)
        signInWithEmailAndPassword(data.email ,data.password)
       
   };

   const resetPassword=async(email)=>{
    if(email){
     await sendPasswordResetEmail(email);
     toast('Sent email');
    }
    else{
      toast('please enter your email')
    }


   }
    return (
        <div className='loginnow'>  
            
            <h1>LOGIN NOW</h1>
            <form onSubmit={handleSubmit(onSubmit)} >
           <input
            type="email" 
            className='input-box' 
            placeholder='ENTER YOUR EMAIL'
            {...register("email", {
                required:{
                     value:true,
                     message:"Email is requried "
                },
            
              pattern: {
                value: /[A-Za-z]{3}/,
                message: 'Enter  Your  a vaild email  '
              }
            
            })} 
            />
             <label>
  {errors.email?.type === 'required' &&  <span className="label-text-alt ">{errors.email.message}</span>}
  {errors.email?.type === 'pattern' &&  <span className="label-text-alt ">{errors.email.message}</span>}
  </label>


           <input type="password" className='input-box' placeholder='ENTER YOUR PASSWORD' />
           <br />
           <a href="">FORGET PASSWORD ?</a>
           <br />
           <input  className='loginbutton'type="submit" value="Login" />
            <hr></hr>
            <p className='or'>OR</p>
            <button onClick={()=>signInWithGoogle()}  type='button' className='googlebutton' >LOGIN WITH GOOGLE</button>
            <p>DON'T HAVE AN ACCOUNT YET ? <Link>CREATE A ACCOUNT !</Link> </p>
            </form>
        </div>
    );
};

export default Login;
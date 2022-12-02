
import React from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle} from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../Firebase.init';
import Loading from '../../Shared/Loading';
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


     if( loading || gloading){
       
      return <Loading></Loading>
    }
  
    if(error || gerror){
       signInError= <p className='label-text-alt'>{error?.message || gerror?.message}</p>
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
                message: 'Enter  Your  a vaild email '
              }
            
            })} 
            />
             <label>
  {errors.email?.type === 'required' &&  <span className="label-text-alt ">{errors.email.message}</span>}
  {errors.email?.type === 'pattern' &&  <span className="label-text-alt ">{errors.email.message}</span>}
  </label>


           <input 
           type="password" 
           className='input-box'
            placeholder='ENTER YOUR PASSWORD'
            {...register("password", {
                required:{
                     value:true,
                     message:" password is requried "
                },
            
                minLength: {
                    value: 6,
                    message: 'minimum length is 6 charecter' 
                  }
            
            })} 
            
            />
     <label>
  {errors.password?.type === 'required' &&  <span class="label-text-alt ">{errors.password.message}</span>}
  {errors.password?.type === 'minLength' &&  <span class="label-text-alt ">{errors.password.message}</span>}
  </label>



           <br />
           <a href="">FORGET PASSWORD ?</a>
           <br />
           {signInError}
           <input  className='loginbutton'type="submit" value="Login" />
           </form>
            <hr></hr>
            <p className='or'>OR</p>
            <button onClick={()=>signInWithGoogle()}  type='button' className='googlebutton' >LOGIN WITH GOOGLE</button>
            <p>DON'T HAVE AN ACCOUNT YET ? <Link to={'.'}  >CREATE A ACCOUNT !</Link> </p>
            
        </div>
    );
};

export default Login;
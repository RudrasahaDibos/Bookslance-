
import { updateProfile } from 'firebase/auth';
import React from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile} from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../Firebase.init';
import UserToken from '../../../Hooks/UserToken';
import Loading from '../../Shared/Loading';


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
      const [updateProfile, updating, updateerror] = useUpdateProfile(auth);
     const{token} =UserToken(user || guser)
      const navigate = useNavigate();
      const location = useLocation();
let from = location.state?.from?.pathname || "/";

       let signInError;


     if( loading || gloading||updating){
       
      return <Loading></Loading>
    }
  
    if(error || gerror||updateerror){
       signInError= <p className='label-text-alt'>{error?.message || gerror?.message}</p>
    }

 

     if(token){
        console.log(token)
      //  navigate(from, { replace: true });
   }





   const onSubmit = as(data) => {
        signInWithEmailAndPassword(data.email ,data.password)
        updateProfile({displayName:})
       
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
      <div class="hero min-h-screen ">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <div class="text-center lg:text-left">
          <h1 class="text-5xl font-bold">Login now!</h1>
        </div>
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div class="flex flex-col w-full">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Email */}
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text">Enter your Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  class="input input-bordered w-full max-w-xs"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is requried ",
                    },

                    pattern: {
                      value: /[A-Za-z]{3}/,
                      message: "Proveid a vaild email",
                    },
                  })}
                />
                <label class="label">
                  {errors.email?.type === "required" && (
                    <span class="label-text-alt text-red-600 ">
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span class="label-text-alt text-red-600 ">
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>

              {/* password */}
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text">Enter Your password </span>
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  class="input input-bordered w-full max-w-xs"
                  {...register("password", {
                    required: {
                      value: true,
                      message: " password is requried ",
                    },

                    minLength: {
                      value: 6,
                      message: "minimum length is 6 charecter",
                    },
                  })}
                />
                <label class="label">
                  {errors.password?.type === "required" && (
                    <span class="label-text-alt text-red-600 ">
                      {errors.password.message}
                    </span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span class="label-text-alt text-red-600 ">
                      {errors.password.message}
                    </span>
                  )}
                </label>

                <label class="label">
                  <a
                    href="#"
                    class="label-text-alt link link-hover"
                    onClick={resetPassword}
                  >
                    Forgot password?
                  </a>
                </label>
              </div>

              {signInError}
              <input
                class="btn btn-primary w-full max-w-2xs  rounded-box place-items-center"
                type="submit"
                value="Login"
              />
            </form>

            <p>
              <small>
                New to Doctors portals ?{" "}
                <Link to="/register" className="text-primary">
                  Create a new user
                </Link>
              </small>
            </p>

            <div class="divider">or</div>
            <button
              onClick={() => signInWithGoogle()}
              class="btn btn-primary rounded-box place-items-center"
            >
              GoogleLogin
            </button>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
    );
};

export default Login;
import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../Firebase.init';
import Loading from '../../Shared/Loading';

const Register = () => {
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
      const [updateProfile, updating, uppdateerror] = useUpdateProfile(auth);
     
   

  const navigate = useNavigate()

   let signInError;


     if( loading || gloading){
        
       return <Loading></Loading>
     }
   
     if(error || gerror || uppdateerror){
        signInError= <p className='text-red-500'>{error?.message || gerror?.message || uppdateerror?.message}</p>
     }



    const onSubmit = async  (data) => {
        console.log(data)
       await createUserWithEmailAndPassword(data.email ,data.password)
       await updateProfile({ displayName:data.name});
       console.log("uapdate done ")
    

    };

    if(user || guser){
        navigate('/home')
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
            <p>DON'T HAVE AN ACCOUNT YET ? <Link to={''}   >CREATE A ACCOUNT !</Link> </p>
        </div>
    );
};

export default Register;
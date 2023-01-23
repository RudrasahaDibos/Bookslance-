import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
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
     
             
    );
};

export default Register;
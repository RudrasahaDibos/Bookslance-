import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51MQ8fGLAKDcXeqmZiVGQAbjBEd5yzbmFLIYaWEEiKXGxc0XroYCUIbGcNrzNiRQ7Q6yHE7s5dQeIe0sITo0Eq6dE00VoDbCTQL');


const Payment = () => {
    const{id}=useParams()
    
      const {data:appointment,isLoading} = useQuery(['bookbooking',id],()=>fetch(`http://localhost:5000/bookbooking/${id}`,{
        method: "GET",
        headers:{
            'authorization':`Bearer ${localStorage.getItem('accesstoken')} `
        }
      }).then(res=>res.json()))

   if(isLoading){
    return <Loading></Loading>
   }
    return (
        <div>
        <div class="card w-50 max-w-md my-12 bg-base-100 shadow-xl">
  <div class="card-body">
    <p className='text-success' >Hello, {appointment.patientName}</p>
    <h1 className='card-title'>Please pay for  {appointment.treatment}</h1>
    <p>Your Appointment : <span className='text-red-500'>{appointment.date}</span> </p>
    <p>Please pay :  $  <span>{appointment.treatment}</span> </p>
  </div>
</div>
          <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div class="card-body">
            <Elements stripe={stripePromise}>
    <CheckoutForm
    appointment={appointment}
    
    />
    
  </Elements>
            </div>
          </div>
          </div>
    );
};

export default Payment;
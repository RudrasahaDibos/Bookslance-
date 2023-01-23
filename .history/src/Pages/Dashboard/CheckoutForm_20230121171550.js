
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

import React, { useEffect, useState } from 'react';

   
    const CheckoutForm = ({  bookbooking }) => {
    const stripe = useStripe();
    const elements = useElements();
    const[carderror ,setCardError]= useState('')
    const[cardesuccess ,setCardsuccess]= useState('')
    const[transactionID ,settransactionIDs]= useState('')
    const[clientSecret ,setCliebtSecret] = useState('')
   const{price,username,useremail}=bookbooking;
    useEffect(()=>{
     fetch('http://localhost:5000/create-payment-intent',{
        method:"POST",
        headers:{
            "content-type": "application/json",
            'authorization':`Bearer ${localStorage.getItem('accesstoken')} `
            

        },
        body:JSON.stringify({price})

     })
     .then(res=>res.json())
    .then(data => {
            if(data?.clientSecret){
                setCliebtSecret(data.clientSecret)
            }
    } )


    },[price])



    const handleSubmit = async (event)=>{
        event.preventDefault()
        if(!stripe || !elements){
            return ;
        }
        const card = elements.getElement(CardElement);
        if(card === null){
            return;
        }
   
        const {error,paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });
      
         
        setCardError( error?.message || '');
        setCardsuccess('')
          const{paymentIntent,error: intenterror}  = await stripe.confirmCardPayment(
            clientSecret, {
            payment_method: {
              card: card,
              billing_details: {
                name: username,
                email: patient
              },
            },
          },
          );
        if(intenterror)  {
          setCardError(intenterror?.message)
         
        }
        else{
          setCardError('')
          settransactionIDs(paymentIntent.id)
          console.log(paymentIntent)
          setCardsuccess('congrats!  You payment is completed ')
        }
    }


    return (
      <>
        <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className='btn btn-success mt-5'  type="submit" disabled={!stripe || !clientSecret}>
          Pay
        </button>
      </form>
      {
        carderror && <p className="span text-red-500">{carderror}</p>
      }
     {
       cardesuccess && <div className="span text-green-500">
        
        <p>{cardesuccess}</p>
        <p> Your Transaction ID : <span className='text-orange-500 font-bold'>{transactionID}</span> </p></div>
       
        
      } 
      
      </>
    );
};

export default CheckoutForm;
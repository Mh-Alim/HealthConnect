import React,{useState,useEffect, useRef} from 'react'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckOutForm from './CheckOutForm';
import { useLocation } from 'react-router-dom';
import "./Stripe.css"

const stripePromise = loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY);
console.log(stripePromise);


const Stripe = () => {
    const location = useLocation();
    const [clientSecret, setClientSecret] = useState("");
    const [price, setPrice] = useState(500);

    const initial = useRef(true);
    useEffect(() => {
      console.log(initial.current);
      if(initial.current){
        console.log("data coming form apponint ",location.state.user_id);
        // Create PaymentIntent as soon as the page loads
        fetch(`${process.env.REACT_APP_BACKEND_URL}/api/create-payment-intent`, {
          method: "POST",
          credentials : "include",
          headers: { "Content-Type": "application/json",'Accept': 'application/json' },
          body: JSON.stringify({ 
             id : location.state.user_id
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            setClientSecret(data.clientSecret);
            setPrice(data.price);
          });

          initial.current = false;
      }
      
    }, []);
  
    const appearance = {
      theme: 'stripe',
    };
    const options = {
      clientSecret,
      appearance,
    };
    
    return (
        <div className="stripe">
          {clientSecret && (
            <Elements options={options} stripe={stripePromise}>
              <CheckOutForm price= {price} />
              {console.log("element is coming here or not ")}
            </Elements>
          )}
        </div>
      );
}

export default Stripe

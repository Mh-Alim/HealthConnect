import React,{useState,useEffect} from 'react'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckOutForm from './CheckOutForm';
import "./Stripe.css"

const stripePromise = loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY);
console.log(stripePromise);


const Stripe = () => {
    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
      // Create PaymentIntent as soon as the page loads
      fetch("/api/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
      })
        .then((res) => res.json())
        .then((data) => setClientSecret(data.clientSecret));
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
              <CheckOutForm />
            </Elements>
          )}
        </div>
      );
}

export default Stripe

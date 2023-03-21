import React,{useState,useEffect} from 'react'
import {PaymentElement,useStripe,useElements} from '@stripe/react-stripe-js';
import "./Stripe.css"
import { useNavigate } from 'react-router-dom';





const CheckOutForm = ({price}) => {
  const navigate = useNavigate();
    const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  const takeAppointment  = async () =>{
    const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/takeApt`,{
      method: "GET",
      headers: {
        Accept : "application/json",
        "Content-Type": "application/json",
        'Accept': 'application/json'
      },
      credentials: 'include'
    })

    
    const data = await res.json();
    if(res.status !== 200){
      window.alert("Try Again");
      return res.status;
      
      
    }

    return res.status;
  }
  const deleteAppointment  = async () =>{
    const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/deleteApp`,{
      method: "GET",
      headers: {
        "Accept" : "application/json",
        "Content-Type": "application/json",
      },
      credentials: 'include'
    })

    
    const data = await res.json();
    if(res.status !== 200){
      window.alert("Try Again");
      return res.status;
    }
    console.log("deleted appointment");
    return res.status;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    let x= await takeAppointment();
    console.log(x);
    if(x === 200){
      setIsLoading(true);
      console.log("before return url")
      const { error } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          // Make sure to change this to your payment completion page
          return_url: `/payment-success`,
        },
      });
  
      // This point will only be reached if there is an immediate error when
      // confirming the payment. Otherwise, your customer will be redirected to
      // your `return_url`. For some payment methods like iDEAL, your customer will
      // be redirected to an intermediate site first to authorize the payment, then
      // redirected to the `return_url`.
      let del = await deleteAppointment();
      if (error.type === "card_error" || error.type === "validation_error") {
        setMessage(error.message);
        console.log(error)
      } else {
        setMessage("An unexpected error occurred.");
        console.log(error)
      }
  
      setIsLoading(false);
    }
    else {
      navigate("/appointment");
    }

    
  };

  const paymentElementOptions = {
    layout: "tabs"
  }
    return (
      <div className="checkoutform">
        <form id="payment-form" onSubmit={handleSubmit}>
          <PaymentElement id="payment-element" options={paymentElementOptions} />
          <button disabled={isLoading || !stripe || !elements} id="submit">
            <span id="button-text">
              {isLoading ? <div className="spinner" id="spinner"></div> : `Pay Now ${price/100} Rs.`}
            </span>
          </button>
          {/* Show any error or success messages */}
          {message && <div id="payment-message">{message}</div>}
        </form>
      </div>
    );
}

export default CheckOutForm

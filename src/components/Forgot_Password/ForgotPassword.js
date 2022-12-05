import React,{useState,useRef} from 'react'
import {Navigate, useNavigate} from "react-router-dom"
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox
  }
  from 'mdb-react-ui-kit';
import { NavLink } from 'react-router-dom';
import "./ForgotPassword.css"

const ForgotPassword = () => {

    const emailRef = useRef("");
    const [otpDisplay, setOtpDisplay] = useState(false);
    const otpRef = useRef("");
    const navigate = useNavigate();

    const handleClick = async (e) => {
        e.preventDefault();
        
        const email = emailRef.current.value;
        console.log(email);
        const res = await fetch("/api/forgot_password",{
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify({
                email
            })
        })
      // console.log("after res")
        const resFromServerInJson = await res.json();
        console.log("json res in handleclick fun "+resFromServerInJson.message);
        if(res.status === 200){
          window.alert(resFromServerInJson.message);
          setOtpDisplay(true);
        }


        else window.alert(resFromServerInJson.message);


        
        
    }



    const otpHandleClick = async (e)=> {
      e.preventDefault();

      const otp = otpRef.current.value;
      const email = emailRef.current.value;
      const res = await fetch("/api/otp",{
        method: "POST",
        headers: {
          "Content-Type":"application/json",
        },
        body:JSON.stringify({
          otp,email
        })
      })

      const resFromServerInJson = await res.json();
      if(res.status === 200){
        window.alert(resFromServerInJson.message);
        navigate("/reset-password",{state:{email}});
      }
      
      else window.alert(resFromServerInJson.message);
    }
  return (
    <MDBContainer id='for_pass_container' fluid className='d-flex align-items-center justify-content-center bg-image ' >
      <div className='mask gradient-custom-3'></div>
      <MDBCard className='m-5' id='signup_card'>
        <MDBCardBody className='px-5' >
          <h2 className="signup-heading text-uppercase text-center mb-5">Forgot Password</h2>
          <MDBInput wrapperClass='mb-4' label='Your Email' size='lg' inputRef={emailRef} id='form3' name='email' type='email'  />
         
          <MDBBtn className='mb-4 w-100 gradient-custom-4' type='submit'  size='lg' onClick={handleClick}>Enter</MDBBtn>
        </MDBCardBody>
        <MDBCardBody style={{display: otpDisplay?"block":"none"}} className='px-5' >
          <h2  id='otp' className=" text-uppercase text-center mb-5">OTP</h2>
          <MDBInput wrapperClass='mb-4' label='Your OTP' size='lg' inputRef={otpRef} id='form3' name='otp' type='text'  />
         
          <MDBBtn className='mb-4 w-100 gradient-custom-4' type='submit'  size='lg' onClick={otpHandleClick}>Enter</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  )
}

export default ForgotPassword
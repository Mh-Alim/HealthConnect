import React,{useState,useRef} from 'react'
import {useNavigate} from "react-router-dom"
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
  }
  from 'mdb-react-ui-kit';
// import { NavLink } from 'react-router-dom';
import "./ForgotPassword.css"
import {ToastCallError,ToastCallSuccess} from "../../ReactToast"

const ForgotPassword = () => {

    const emailRef = useRef("");
    const btn1 = useRef(null);
    const btn2 = useRef(null);
    
    const [otpDisplay, setOtpDisplay] = useState(false);
    const otpRef = useRef("");
    const navigate = useNavigate();

    const handleClick = async (e) => {
        e.preventDefault();
        btn1.current.disabled = true;
        const email = emailRef.current.value;
        console.log(email);
        const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/forgot_password`,{
            method: "POST",
            credentials : "include",
            headers: {
                "Content-Type" : "application/json",
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                email
            })
        })
      // console.log("after res")
        const jsonRes = await res.json();
        if(res.status === 200){
          
          ToastCallSuccess(jsonRes.message);
          setOtpDisplay(true);
        }


        else ToastCallError(jsonRes.message);
        btn1.current.disabled = false;
    }



    const otpHandleClick = async (e)=> {
      e.preventDefault();
      btn2.current.disabled = true;
      const otp = otpRef.current.value;
      const email = emailRef.current.value;
      const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/otp`,{
        method: "POST",
        headers: {
          "Content-Type":"application/json",
          'Accept': 'application/json'
        },
        body:JSON.stringify({
          otp,email
        })
      })

      const resFromServerInJson = await res.json();
      if(res.status === 200){
        ToastCallSuccess(resFromServerInJson.message);
        navigate("/reset-password",{state:{email}});
      }
      
      else ToastCallError(resFromServerInJson.message);
      btn2.current.disabled = false;
    }
  return (
    <MDBContainer id='for_pass_container' fluid className='d-flex align-items-center justify-content-center bg-image ' >
      <div className='mask gradient-custom-3'></div>
      <MDBCard className='m-5' id='signup_card'>
        <MDBCardBody className='px-5' >
          <h2 className="signup-heading text-uppercase text-center mb-5">Forgot Password</h2>
          <MDBInput wrapperClass='mb-4' label='Your Email' size='lg' inputRef={emailRef} id='form3' name='email' type='email'  />
         
          <MDBBtn ref={btn1} className='mb-4 w-100 gradient-custom-4' type='submit'  size='lg' onClick={handleClick}>Enter</MDBBtn>
        </MDBCardBody>
        <MDBCardBody style={{display: otpDisplay?"block":"none"}} className='px-5' >
          <h2  id='otp' className=" text-uppercase text-center mb-5">OTP</h2>
          <MDBInput wrapperClass='mb-4' label='Your OTP' size='lg' inputRef={otpRef} id='form3' name='otp' type='text'  />
         
          <MDBBtn ref={btn2} className='mb-4 w-100 gradient-custom-4' type='submit'  size='lg' onClick={otpHandleClick}>Enter</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  )
}

export default ForgotPassword
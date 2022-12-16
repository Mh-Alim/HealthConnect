import React,{useRef} from 'react'
// import {useNavigate} from "react-router-dom"
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

const OTP = () => {

    // const navigate = useNavigate();
    const otpRef = useRef();

    const handleClick = async (e)=> {
        e.preventDefault();
        const otp = otpRef.current.value;
        console.log(otp);
        const res = await fetch("/api/otp",{
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify({
                otp
                
            })
        })

        const resFromServerInJson = await res.json();

        if(res.status === 200){
          window.alert(resFromServerInJson.message);
        //   navigate("/reset-password");
        }
        else window.alert(resFromServerInJson.message);
    }
  return (
    <MDBContainer id='for_pass_container' fluid className='d-flex align-items-center justify-content-center bg-image ' >
      <div className='mask gradient-custom-3'></div>
      <MDBCard className='m-5' id='signup_card'>
        <MDBCardBody className='px-5' >
          <h2 className="signup-heading text-uppercase text-center mb-5">Enter OTP</h2>
          <MDBInput wrapperClass='mb-4' label='Your Email' size='lg' inputRef={otpRef} id='otp' name='otp' type='text'  />
         
          <MDBBtn className='mb-4 w-100 gradient-custom-4' type='submit'  size='lg' onClick={handleClick}>Enter</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  )
}

export default OTP
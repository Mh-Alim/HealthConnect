import React,{useRef} from 'react'
import {useNavigate, useLocation} from "react-router-dom"
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

const ResetPassword = () => {

    const navigate = useNavigate();
    const passRef = useRef("");
    const cpassRef = useRef("");


    const location = useLocation();

   
    let email = null;
    
    email = location.state.email;
      if(email === null){
        navigate("/")
      }
    
    const handleClick = async(e) => {

        e.preventDefault();
        const pass = passRef.current.value;
        const cpass = cpassRef.current.value;

        const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/reset-passwor`,{
            method: "POST",
            headers : {
                "Content-Type" : "application/json",
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                email,pass,cpass
            })
        });

        const resFromServerInjson = await res.json();

        if(res.status === 200){
          window.alert(resFromServerInjson.message);
          navigate("/");
        }
        else {
          window.alert(resFromServerInjson.message);
        }
    }

  return (
    <MDBContainer id='for_pass_container' fluid className='d-flex align-items-center justify-content-center bg-image ' >
      <div className='mask gradient-custom-3'></div>
      <MDBCard className='m-5' id='signup_card'>
        <MDBCardBody className='px-5' >
          <h2 className="signup-heading text-uppercase text-center mb-5">Change Password</h2>
          <MDBInput wrapperClass='mb-4' label='New Password' size='lg' inputRef={passRef}  name='pass' type='password'  />
          <MDBInput wrapperClass='mb-4' label='Confirm Password' size='lg' inputRef={cpassRef}  name='cpass' type='password'  />
         
          <MDBBtn className='mb-4 w-100 gradient-custom-4' type='submit'  size='lg' onClick={handleClick}>Enter</MDBBtn>
        </MDBCardBody>
        
      </MDBCard>
    </MDBContainer>
  )
}

export default ResetPassword
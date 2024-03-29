import React, { useState, useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
} from "mdb-react-ui-kit";

import { NavLink } from "react-router-dom";
import { userContext } from "../../App";
import { ToastCallError, ToastCallSuccess } from "../../ReactToast";

const Login = () => {
  const { state, dispatch } = useContext(userContext);
  const loginRef = useRef(null);
  // login codes

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const loginBtn = async (e) => {
    e.preventDefault();
    console.log(loginRef.current);
    loginRef.current.disabled = true;

    const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/login`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
      credentials: "include",
    });

    const data = await res.json();
    console.log(data);
    if (!data || res.status === 400) {
      ToastCallError(data.error);
      console.log("Wrong credentials");
    } else {
      dispatch({ type: "USER", payload: true });
      ToastCallSuccess("login successfully");
      navigate("/");
    }
    loginRef.current.disabled = false;
  };
  return (
    <MDBContainer id="signin" fluid className="login-background">
      <MDBRow className="d-flex justify-content-center align-items-center h-100">
        <MDBCol col="12">
          <MDBCard
            className="bg-white text-dark my-5 mx-auto"
            style={{ maxWidth: "400px" }}
          >
            <MDBCardBody className="p-5 d-flex flex-column align-items-center mx-auto w-100">
              <h2 className="fw-bold mb-2 text-uppercase">Log in</h2>
              <p className="text-dark-50 mb-5">
                Please enter your login and password!
              </p>

              <MDBInput
                wrapperClass="mb-4 mx-5 w-100"
                labelClass="text-dark"
                label="Email address"
                id="formControlLg"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                size="lg"
              />
              <MDBInput
                wrapperClass="mb-4 mx-5 w-100"
                labelClass="text-dark"
                label="Password"
                id="formControlLg"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                size="lg"
              />

              <p className="small mb-3 pb-lg-2">
                <NavLink className="text-dark-50" to="/forgot_password">
                  Forgot password?
                </NavLink>
              </p>
              {/* <MDBBtn outline style={{backgroundColor: '#dd4b39'}} className='mx-2 px-5' color='black' size='lg'>
                Login
              </MDBBtn> */}
              <MDBBtn size="lg" type="submit" ref={loginRef} onClick={loginBtn}>
                Login
              </MDBBtn>

              <div>
                <p className="mb-0">
                  Don't have an account?{" "}
                  <NavLink to="/signup" className="text-dark-50 fw-bold">
                    Sign Up
                  </NavLink>
                </p>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Login;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import { NavLink } from "react-router-dom";
import { ToastCallError, ToastCallSuccess } from "../../ReactToast";

const Signup = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    cpassword: "",
  });

  let fieldName, filedValue;
  const changeText = (e) => {
    fieldName = e.target.name;
    filedValue = e.target.value;
    setUser({ ...user, [fieldName]: filedValue });
  };

  const onSubmitRegister = async (e) => {
    e.preventDefault();
    /// rm phone
    const { name, email, phone, password, cpassword } = user;
    const res = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/api/register`,
      {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          // rm phone
          name,
          email,
          phone,
          password,
          cpassword,
        }),
      }
    );

    // backend se i am getting data just check this line of code
    const data = await res.json();

    if (res.status === 422 || !data) {
      ToastCallError(data.message);
    } else {
      ToastCallSuccess(data.message);
      navigate("/login");
    }
  };

  return (
    <>
      <MDBContainer
        id="signup"
        fluid
        className="d-flex align-items-center justify-content-center bg-image "
      >
        <div className="mask gradient-custom-3"></div>
        <MDBCard className="m-5" id="signup_card">
          <MDBCardBody className="px-5">
            <h2 className="signup-heading text-uppercase text-center mb-5">
              Sign Up
            </h2>
            <MDBInput
              wrapperClass="mb-4"
              label="Your Name"
              size="lg"
              id="form1"
              name="name"
              type="text"
              value={user.name}
              onChange={changeText}
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Your Phone Number"
              size="lg"
              id="form2"
              name="phone"
              type="tel"
              value={user.phone}
              onChange={changeText}
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Your Email"
              size="lg"
              id="form3"
              name="email"
              type="email"
              value={user.email}
              onChange={changeText}
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Password"
              size="lg"
              id="form4"
              name="password"
              type="password"
              value={user.password}
              onChange={changeText}
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Repeat your password"
              size="lg"
              id="form5"
              name="cpassword"
              type="password"
              value={user.cpassword}
              onChange={changeText}
            />
            <MDBBtn
              className="mb-4 w-100 gradient-custom-4"
              onClick={onSubmitRegister}
              size="lg"
            >
              Register
            </MDBBtn>
            <p className="ml-4">
              Have already an account? <NavLink to="/login">Login</NavLink> here
            </p>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </>
  );
};

export default Signup;

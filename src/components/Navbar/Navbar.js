import React, { useCallback, useContext, useEffect } from "react";

import "./Navbar.css";
import { NavLink } from "react-router-dom";
import logo from "../../images/bg1/hospital-logo.png";
import $ from "jquery";
import { userContext } from "../../App";

function hamburger() {
  let d = document.getElementById("navText");
  d.style.display = d.style.display === "block" ? "none" : "block";

  let nav = document.getElementById("navbar");
  if (nav.style.height === "100vh") {
    if (window.innerWidth <= 400) {
      nav.style.height = "3rem";
    } else {
      nav.style.height = "10vh";
    }
    nav.style.background = "transparent";
  } else {
    nav.style.height = "100vh";
    nav.style.background = "none";
  }

  const ele = document.getElementById("nav-hamburger")
  ele.classList.toggle("open")
  // $(document).ready(function () {
  //   $("#nav-hamburger").click(function () {
  //     $(this).toggleClass("open");
  //   });
  // });
}



const Navbar = () => {
  const { state, dispatch } = useContext(userContext);

  const InitialStateFun = useCallback(async () => {
    const resFromServer = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/api/login_check`,
      {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    const res = await resFromServer.json();
    if (resFromServer.status === 200) {
      dispatch({ type: "USER", payload: true });
      // user logged in
    } else {
      // user not logged in
      dispatch({ type: "USER", payload: false });
    }
  }, [state]);

  useEffect(() => {
    InitialStateFun();
  }, [InitialStateFun]);
  return (
    <>
      <div className="navbar" id="navbar">
        <div className="left">
          <img src={logo} alt="logo" />
        </div>
        <div className="mid" id="navText">
          {/* <div id="about" className='navComponents'> <NavLink to="/about">About</NavLink>   </div> */}
          <div id="home" className="navComponents">
            {" "}
            <NavLink onClick={hamburger} to="/">
              Home
            </NavLink>{" "}
          </div>
          <div id="our-client" className="navComponents" onClick={hamburger}>
            <NavLink to="/review">Reviews</NavLink>
          </div>
          {/* <div id="contact" className='navComponents'><NavLink to="/contact">Contact</NavLink></div> */}
          <div id="appointment" className="navComponents" onClick={hamburger}>
            <NavLink to="/appointment">Appointment</NavLink>
          </div>
          {state ? (
            <div id="profile" className="navComponents" onClick={hamburger}>
              <NavLink to="/profile">Profile</NavLink>
            </div>
          ) : null}
          {state ? (
            <div id="queue" className="navComponents" onClick={hamburger}>
              <NavLink to="/lists">Lists</NavLink>
            </div>
          ) : null}
          {!state ? (
            <div id="login" className="navComponents" onClick={hamburger}>
              <NavLink to="/login">Login</NavLink>
            </div>
          ) : null}
          {state ? (
            <div id="login" className="navComponents" onClick={hamburger}>
              <NavLink to="/logout">Logout</NavLink>
            </div>
          ) : null}
        </div>
        <div className="right">
          <div id="nav-hamburger" onClick={hamburger}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

import React from 'react'

import './Navbar.css'
import {NavLink} from "react-router-dom"
import logo from '../../images/bg1/hospital-logo.png'
import $ from 'jquery';


function hamburger(){

 
  let d = document.getElementById('navText');
  d.style.display = (d.style.display === 'block') ? 'none':'block';

  let nav = document.getElementById('navbar');
  if(nav.style.height === '100vh') {

    if(window.innerWidth <= 400){
      nav.style.height = '7vh';
    }
    else {
      nav.style.height = '10vh';
    }
    nav.style.background = 'transparent';
  }
  else{
    nav.style.height = '100vh';
    nav.style.background = 'none';
    
  }
  
}

$(document).ready(function(){
  $('#nav-hamburger').click(function(){
    $(this).toggleClass('open');
  });
});

const Navbar = () => {
 

 
  return (
    <>
        <div className="navbar" id='navbar'>
            <div className="left">
              <img src={logo} alt="logo" />
              </div>
            <div className="mid" id='navText'  >
                <div id="about" className='navComponents'> <NavLink to="/about">About</NavLink>   </div>
                <div id="home" className='navComponents'> <NavLink to="/">Home</NavLink>   </div>
                <div id="our-client" className='navComponents'><NavLink to="/review">Reviews</NavLink></div>
                <div id="contact" className='navComponents'><NavLink to="/contact">Contact</NavLink></div>
                <div id="appointment" className='navComponents'><NavLink to="/appointment">Appointment</NavLink></div>
                <div id="profile" className='navComponents'><NavLink to="/profile">Profile</NavLink></div>
                <div id="queue" className='navComponents'><NavLink to="/lists">Lists</NavLink></div>
                <div id="login" className='navComponents'><NavLink to="/login" >Login</NavLink></div>
            </div>
            <div className="right">
                <div id="nav-hamburger" onClick={hamburger} >
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
            </div>
        </div>
    </>
  )
}

export default Navbar
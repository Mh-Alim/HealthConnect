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
    nav.style.height = '10vh';
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
            <div className="mid" id='navText'>
                <div id="about" className='navComponents'> <NavLink to="/about">About</NavLink>   </div>
                <div id="our-client" className='navComponents'><NavLink to="/clients">Clients</NavLink></div>
                <div id="contact" className='navComponents'><NavLink to="/contact">Contact</NavLink></div>
                <div id="appointment" className='navComponents'><NavLink to="/take-appointment">Take Appointment</NavLink></div>
                <div id="queue" className='navComponents'><NavLink to="/appointments">Todays Appointmets Lists</NavLink></div>
                <div id="news" className='navComponents'><NavLink to="/News">News</NavLink></div>
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
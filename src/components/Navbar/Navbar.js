import React from 'react'
import './Navbar.css'
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
                <div id="about" className='navComponents'> About </div>
                <div id="our-client" className='navComponents'>Clients</div>
                <div id="contact" className='navComponents'>Contact</div>
                <div id="appointment" className='navComponents'>Take Appointment</div>
                <div id="queue" className='navComponents'>Todays Appointmets Lists</div>
                <div id="news" className='navComponents'>News</div>
            </div>
            <div className="right">
                <div id="nav-hamburger" >
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
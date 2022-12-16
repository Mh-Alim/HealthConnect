import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer_text">
          <div className="social_media_links">
            <span className='social_text'>Get connected with us on social media networks</span>
            <div >
              <a href="https://www.facebook.com/" className='icons'><i className="bi bi-facebook"></i></a>
              <a href="https://www.instagram.com/"  className='icons'><i className="bi bi-instagram"></i></a>
              <a href="https://www.linkedin.com/in/alim-khan-109165204/"  className='icons'><i className="bi bi-linkedin"></i></a>
              <a href="https://www.twitter.com/" className='icons'><i className="bi bi-twitter"></i></a>
            </div>
          </div>
          <div className="footer_text">

          </div>
        </div>
        <footer className='copy_write_text'>
          <p>© 2022 Copyright : AlimKhan.com</p>
        </footer>
    </div>
  )
  
}

export default Footer
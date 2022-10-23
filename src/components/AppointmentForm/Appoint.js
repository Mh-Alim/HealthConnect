import React from 'react'
import "./Appoint.css"

// eslint-disable-next-line
import mobImg from '../../images/workingProcess/mobile.png'
// eslint-disable-next-line
import mobWomen from '../../images/workingProcess/mobileWomen.png'



const Appoint = () => {
  return (

    <div className="outer-part-appointment">
        <h1 className='heading'>Appointment Form</h1>
        <form className="row g-3 form">
          

          <div className="col-md-5">
            <label htmlFor="fname" className="form-label">First Name</label>
            <input type="text" className="form-control" id="fname"/>
          </div>
          <div className="col-md-5">
            <label htmlFor="lname" className="form-label">Last Name</label>
            <input type="text" className="form-control" id="lname"/>
          </div>
          <div className="col-md-5">
            <label htmlFor="inputEmail4" className="form-label">Email</label>
            <input  type="email" className="form-control" id="inputEmail4" />
            
          </div>
          <div className="col-md-5">
            <i className="bi bi-envelope"></i>
            <label htmlFor="inputPassword4" className="form-label">Password</label>
            
            <input type="password" className="form-control" id="inputPassword4"/>
          </div>


          <div className="col-md-5">
            <label htmlFor="blood_group" className="form-label">Blood Group(optional)</label>
            <input type="text" className="form-control" id="blood_group" placeholder='A+'/>
          </div>
          <div className="col-md-5">
            <label htmlFor="confirm_pass" className="form-label">Confirm Password</label>
            <input type="text" className="form-control" id="confirm_pass"/>
          </div>


          <div className="col-10">
            <label htmlFor="inputAddress" className="form-label">Address</label>
            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
          </div>
          <div className="col-10">
            <label htmlFor="inputAddress2" className="form-label">Address 2</label>
            <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
          </div>
          <div className="col-md-4">
            <label htmlFor="inputCity" className="form-label">City</label>
            <input type="text" className="form-control" id="inputCity"/>
          </div>
          <div className="col-md-4">
            <label htmlFor="inputState" className="form-label">State</label>
            <input type="text" className="form-control" id="inputState"/>
          </div>
          <div className="col-md-2">
            <label htmlFor="inputZip" className="form-label">Zip</label>
            <input type="text" className="form-control" id="inputZip" />
          </div>
          
          {/* Radio Button (Male Female Button) */}
          
          <div className="form-check form-check-inline mt-4 ml-3 col-3">
            <input className="radioForm" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" / >
            <label style={{"cursor":"pointer"}} className="form-check-label"htmlFor="inlineRadio1">Male</label>
          </div>
          <div className="form-check form-check-inline mt-4  col-3" id='femaleOption'>
            <input className="radioForm" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
            <label style={{"cursor":"pointer"}} className="form-check-label"htmlFor="inlineRadio2">Female</label>
          </div>
        
          <div  className="form-check form-check-inline mt-4  col-3">
            <input className="radioForm" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option2" />
            <label style={{"cursor":"pointer"}} className="other form-check-label"htmlFor="inlineRadio3">Other</label>
          </div>
          <div id='appointment_btn' className="col-12 mt-3">
            <button id='apt_btn' type="submit" className="btn btn-primary">Appointment</button>
          </div>
        </form>

    </div>
  )
}

export default Appoint
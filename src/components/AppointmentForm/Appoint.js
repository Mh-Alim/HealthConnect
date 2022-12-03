import React,{useRef} from 'react'
import {useNavigate} from "react-router-dom"
import "./Appoint.css"

// eslint-disable-next-line
import mobImg from '../../images/workingProcess/mobile.png'
// eslint-disable-next-line
import mobWomen from '../../images/workingProcess/mobileWomen.png'



const Appoint = () => {
  const fname = useRef("");
  const lname = useRef("");
  const phone = useRef("");
  const email = useRef("");
  const dob = useRef("");
  const bgroup = useRef("");
  const city = useRef("");
  const state = useRef("");
  const zip = useRef("");
  const address1 = useRef("");
  // const address2 = useRef("");
  const male = useRef(null);
  const female = useRef(null);
  const otherGender = useRef(null);
  const navigate = useNavigate();

  const submitAppointment = async(e)=>{
      e.preventDefault();
      const name = fname.current.value.concat(" ",lname.current.value);
     
     


      // gender calculation


      let allGenders = document.getElementsByName("inlineRadioOptions");
      let gender;
      for(var i = 0;i<allGenders.length;i++){
        if(allGenders[i].checked){
          gender = allGenders[i].value;
        }
      }

     

      const resFromServer = await fetch("/api/appointment", {
        method : "POST",
        headers: {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify({
          name,
          phone: phone.current.value,
          email: email.current.value,
          dob: dob.current.value,
          bloodGroup: bgroup.current.value,
          address1: address1.current.value,
          // address2: address2.current.value,
          city: city.current.value,
          zip: zip.current.value,
          gender
        })
      })
      

      const resFromServerInJson = await resFromServer.json();
      console.log(resFromServerInJson);

      if(resFromServer.status === 401){

        window.alert(resFromServerInJson.message);
      }
      else if(resFromServer.status === 422 || !resFromServer){
        // window.alert("login before appointment");
        window.alert(resFromServerInJson.message);
        console.log(resFromServerInJson.message);
      }
      else {
        window.alert("Appointment successfull");
        console.log("Appointment successfull");
        // navigate to payment option 
        navigate("/");
      }
  }
  return (

    <div className="outer-part-appointment">
        <h1 className='heading'>Appointment Form</h1>
        <form className="row g-3 form">
          

          <div className="col-md-5">
            <label htmlFor="fname" className="form-label">First Name</label>
            <input type="text" className="form-control" id="fname" ref={fname}/>
          </div>
          <div className="col-md-5">
            <label htmlFor="lname" className="form-label">Last Name</label>
            <input type="text" className="form-control" id="lname" ref={lname}/>
          </div>
          <div className="col-md-5">
            <label htmlFor="phone" className="form-label">Mobile No.</label>
            <input type="text" className="form-control" id="phone" ref={phone}/>
          </div>
          <div className="col-md-5">
            <label htmlFor="inputEmail4" className="form-label">Email</label>
            <input  type="email" className="form-control" id="inputEmail4" ref={email} />
            
          </div>
          <div className="col-md-5">
            <i className="bi bi-envelope"></i>
            <label htmlFor="inputPassword4" className="form-label">Date-Of-Birth</label>
            
            <input type="date" className="form-control" id="inputPassword4" ref={dob}/>
          </div>


          <div className="col-md-5">
            <label htmlFor="blood_group" className="form-label">Blood Group(optional)</label>
            <input type="text" className="form-control" id="blood_group" placeholder='A+' ref={bgroup}/>
          </div>
          


          <div className="col-10">
            <label htmlFor="inputAddress" className="form-label">Address</label>
            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" ref={address1}/>
          </div>
          {/* <div className="col-10">
            <label htmlFor="inputAddress2" className="form-label">Address 2</label>
            <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" ref={address2}/>
          </div> */}
          <div className="col-md-4">
            <label htmlFor="inputCity" className="form-label">City</label>
            <input type="text" className="form-control" id="inputCity" ref={city}/>
          </div>
          <div className="col-md-4">
            <label htmlFor="inputState" className="form-label">State</label>
            <input type="text" className="form-control" id="inputState" ref={state}/>
          </div>
          <div className="col-md-2">
            <label htmlFor="inputZip" className="form-label">Zip</label>
            <input type="text" className="form-control" id="inputZip" ref={zip}/>
          </div>
          
          {/* Radio Button (Male Female Button) */}
          
          <div className="form-check form-check-inline mt-4 ml-3 col-3">
            <input className="radioForm" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="male" ref={male}/ >
            <label style={{"cursor":"pointer"}} className="form-check-label"htmlFor="inlineRadio1">Male</label>
          </div>
          <div className="form-check form-check-inline mt-4  col-3" id='femaleOption'>
            <input className="radioForm" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="female" ref={female} />
            <label style={{"cursor":"pointer"}} className="form-check-label"htmlFor="inlineRadio2">Female</label>
          </div>
        
          <div  className="form-check form-check-inline mt-4  col-3">
            <input className="radioForm" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="other" ref={otherGender} />
            <label style={{"cursor":"pointer"}} className="other form-check-label"htmlFor="inlineRadio3">Other</label>
          </div>
          <div id='appointment_btn' className="col-12 mt-3">
            <button id='apt_btn' type="submit" className="btn btn-primary" onClick={submitAppointment}>Appointment</button>
          </div>
        </form>

    </div>
  )
}

export default Appoint
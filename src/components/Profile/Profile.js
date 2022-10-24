import React, {useEffect, useState} from 'react'
import {NavLink, useNavigate} from "react-router-dom"
import "./Profile.css"
import userImg from "../../images/user.jpg"

const Profile = () => {

const [userData, setUserData] = useState({});
  const navigate = useNavigate();


  const callAboutPage = async () => {

    try{
      const res = await fetch("/api/profile1",{
        method: "GET",
        headers: {
          Accept : "application/json",
          "Content-Type": "application/json",
        },
        credentials: 'include'
      })

      
      const data = await res.json();
      setUserData(data);
      // console.log(data);

      if(!res.status === 200){
        throw new Error(res.error);
      }
    }
    catch(err){
      console.log(err);
      navigate("/login");
    }
    
  }
  useEffect(() => {
    
    callAboutPage();
    
  }, []);
  

  return (
    <div id='Profile'>
        <div className="innerProfile">
            <div className="basicInfo">
              <h1 className='profileHeading'>Basic info</h1>
              <div className="contentBasicInfo">
                <div className="contentBasicInfoText">
                  <div className="key">
                    <p>Name</p>
                    <p>D.O.B</p>
                    <p>Gender</p>
                  </div>
                  <div className="value">
                    <p>{userData.name}</p>
                    <p> -- </p>
                    <p> -- </p>
                  </div>
                </div>
                <img className='profileImg' src={userImg} alt="" />

              </div>
            </div>

            <div className="hline"></div>
            <div className="contactInfo">
              <h1 className='profileHeading'>Contact Information</h1>
              <div className="contentContactInfoText">
                  <div className="key">
                    <p>Phone</p>
                    <p >Email</p>
                    <p>Adddress</p>
                  </div>
                  <div className="value">
                    <p>{userData.phone}</p>
                    <p id='cemail'>{userData.email}</p>
                    <p> -- </p>
                  </div>
                  {/* <p> <span className='key'>Phone</span> <span className='value'>7748070763</span> </p>
                  <p> <span className='key'>Email</span> <span className='value'>smasoon7789@gmail.com</span> </p>
                  <p> <span className='key'>Address</span> <span className='value'>Falana Falana jagah</span> </p> */}
              </div>
            </div>

            <div className="hline"></div>
            <div className="personalInfo">
              <h1 className='profileHeading'>Personal Information</h1>
              <div className="personalInfoText">
                  <div className="key">
                    <p>Height</p>
                    <p>Weight</p>
                  </div>
                  <div className="value">
                    <p>--</p>
                    <p>--</p>
                  </div>
              </div>
            </div>
        <p className='editInfo'><NavLink to="/editProfile" className="btn btn-primary">Edit Your Profile</NavLink></p>
        </div>
    </div>
  )
}

export default Profile
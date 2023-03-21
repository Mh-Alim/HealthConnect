import React, { useEffect, useState, useRef, useCallback } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Profile.css";
// import userImg from "../../images/user.jpg"

const Profile = () => {
  const [userData, setUserData] = useState({});
  const initial = useRef(false);
  // const [appointData, setAppointData] = useState({})
  const navigate = useNavigate();

  const callAboutPage = useCallback(async () => {
    console.log("first render of profile");
    try {
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/api/profile`,
        {
          method: "GET",
          credentials: "include",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );

      const data = await res.json();

      if (res.status === 401) {
        window.alert(data.message);
        navigate("/login");
      }

      setUserData(data);
      console.log(data);

      if (!res.status === 200) {
        throw new Error(res.error);
      }
    } catch (err) {
      console.log(err);
      // navigate("/login");
    }
  }, [navigate]);
  useEffect(() => {
    if (!initial.current) {
      initial.current = true;
      callAboutPage();
    }
  }, [callAboutPage]);

  return (
    <div id="Profile">
      <div className="innerProfile">
        <div className="basicInfo">
          <h1 className="profileHeading">Basic info</h1>
          <div className="contentBasicInfo">
            <div className="contentBasicInfoText">
              <div className="key dflex">
                <span className="space">Name</span>
                <span className="overflowHide">{userData.name}</span>
              </div>
              <div className="key dflex">
                <span className="space">D.O.B</span>
                <span className="overflowHide">
                  {userData.details
                    ? userData.details.dob
                      ? userData.details.dob
                      : "--"
                    : "--"}
                </span>
              </div>
              <div className="key dflex pb_3">
                <span className="space">Gender</span>
                <span className="overflowHide">
                  {" "}
                  {userData.details
                    ? userData.details.Gender
                      ? userData.details.Gender
                      : "--"
                    : "--"}
                </span>
              </div>
            </div>
            {/* <img className='profileImg' src={userImg} alt="" /> */}
          </div>
        </div>

        <div className="hline"></div>
        <div className="contactInfo">
          <h1 className="profileHeading">Contact Information</h1>
          <div className="contentContactInfoText">
            <div className="key dflex">
              <span className="space">Phone</span>
              <span className="overflowHide" id="phone">
                {userData.phone}
              </span>
            </div>
            <div className="key dflex">
              <span className="space">Email</span>
              <span className="overflowHide">{userData.email}</span>
            </div>
            <div className="key dflex pb_3">
              <span className="space">Address</span>
              <span className="overflowHide text_justify">
                {userData.details
                  ? userData.details.address
                    ? userData.details.address
                    : "--"
                  : "--"}
              </span>
            </div>
            {/* <p> <span className='key'>Phone</span> <span className='value'>7748070763</span> </p>
                  <p> <span className='key'>Email</span> <span className='value'>smasoon7789@gmail.com</span> </p>
                  <p> <span className='key'>Address</span> <span className='value'>Falana Falana jagah</span> </p> */}
          </div>
        </div>

        <div className="hline"></div>
        <div className="personalInfo">
          <h1 className="profileHeading">Personal Information</h1>
          <div className="personalInfoText">
            <div className="key dflex">
              <span className="space">Height</span>
              <span className="">
                {" "}
                {userData.details
                  ? userData.details.height
                    ? userData.details.height
                    : "--"
                  : "--"}
              </span>
            </div>
            <div className="key dflex">
              <span className="space">Weight</span>
              <span className="">
                {userData.details
                  ? userData.details.weight
                    ? userData.details.weight
                    : "--"
                  : "--"}
              </span>
            </div>
          </div>
        </div>
        <p className="editInfo">
          <NavLink to="/editProfile" className="btn btn-primary">
            Edit Your Profile
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Profile;

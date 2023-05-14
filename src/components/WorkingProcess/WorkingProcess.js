import React from "react";
import "./WorkingProcess.css";
// import { MDBIcon} from 'mdbreact';
import { NavLink } from "react-router-dom";

const WorkingProcess = () => {
  return (
    <div id="WorkingProcessMainwork-container">
      <div className="h6">
        <h4>Working Process</h4>
      </div>
      <div className="workHeadingText">
        <h2>How we works?</h2>
      </div>
      {/* cards starts from here */}
      <div className="cardBody">
        <div className="work-container">
          <div className="card">
            <div className="content">
              <h2>01</h2>
              <h3>STEP-1</h3>
              <p>
                Click on the below button to take appointment or you can also
                click on the Take appointment button on the navbar{" "}
              </p>
              <NavLink to="/appointment">Appointment</NavLink>
            </div>
          </div>
        </div>
        <div className="work-container">
          <div className="card">
            <div className="content">
              <h2>02</h2>
              <h3> STEP-2 </h3>
              <p>Click on the below button for online fee paymnet </p>
              <NavLink to="/appointment">Payment Gateway</NavLink>
            </div>
          </div>
        </div>
        <div className="work-container">
          <div className="card">
            <div className="content">
              <h2>03</h2>
              <h3>STEP-3</h3>
              <p>Check Your Appointment Number here</p>
              <NavLink to="/lists">Details</NavLink>
            </div>
          </div>
        </div>
      </div>

      <hr />
    </div>
  );
};

export default WorkingProcess;

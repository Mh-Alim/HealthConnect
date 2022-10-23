import React from 'react'
import './WorkingProcess.css'
// import { MDBIcon} from 'mdbreact';
import { NavLink } from "react-router-dom"

const WorkingProcess = () => {
  return (
    <div id='WorkingProcessMainwork-container'>
        <div className="h6"><h4>Working Process</h4></div>
        <div className="workHeadingText"><h2>How we works?</h2></div>
        {/* cards starts from here */}
        <div className="cardBody">

       
        <div className="work-container">
                    <div className="card">
                        <div className="content">
                            <h2>01</h2>
                            <h3>STEP-1</h3>
                            <p>Click on the below button to take appointment or you can also click on the Take appointment button on the navbar </p>
                            <NavLink to =  "#">Read More</NavLink>
                        </div>
                    </div>
                </div>
                <div className="work-container">
                    <div className="card">
                        <div className="content">
                            <h2>02</h2>
                            <h3> STEP-2 </h3>
                            <p>Click on the below button for online fee paymnet </p>
                            <NavLink to =  "#">Read More</NavLink>
                        </div>
                    </div>
                </div>
                <div className="work-container">
                    <div className="card">
                        <div className="content">
                            <h2>03</h2>
                            <h3>Card Three</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, incidunt omnis. Similique odio facilis perferendis rem exercitationem maxime officiis inventore totam beatae corporis quia ut dicta accusamus temporibus</p>
                            <NavLink to =  "#">Read More</NavLink>
                        </div>
                    </div>
                </div> 
            </div>

            <hr />
    </div>
  )
}

export default WorkingProcess
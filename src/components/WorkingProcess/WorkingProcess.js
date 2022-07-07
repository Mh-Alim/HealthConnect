import React from 'react'
import './WorkingProcess.css'
import { MDBIcon} from 'mdbreact';

const WorkingProcess = () => {
  return (
    <div id='WorkingProcessMainContainer'>
        <div className="h6"><h4>Working Process</h4></div>
        <div className="workHeadingText"><h2>How we works?</h2></div>
        <div className="workCards">
            <div id="card1" className='card'>
                <div className="num">01</div>
                <div className="cardTextSubHeading">Make Appointmnet</div>
                <div className="cardHeading">To take Appointment online you just have to click on below button or navbar take appointment and fill form.</div>
                <div className="cardButton">
                <div>Appointment</div>
                <MDBIcon icon="angle-right" className='right-angle' />
                </div>
            </div>
            <div id="card2" className='card'>
                <div className="num">02</div>
                <div className="cardTextSubHeading">Payment</div>
                <div className="cardHeading">After Register you have to pay the then you are fully Register</div>
                <div className="cardButton">
                <div>Pay</div> 
                <MDBIcon icon="angle-right" className='right-angle' />
                </div>
            </div>
            <div id="card3" className='card'>
                <div className="num">03</div>
                <div className="cardTextSubHeading">Date of Checkup </div>
                <div className="cardHeading">Come at the day of you checkup </div>
                <div className="cardButton">
                <div>see</div>
                <MDBIcon icon="angle-right" className='right-angle' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default WorkingProcess
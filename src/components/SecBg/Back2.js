import React from 'react'
import './Back2.css'
import bg2_Dr from "../../images/bg2/dr-graphic.png"
import Tilt from 'react-parallax-tilt';


const glareOpacity = 0.4;
const glareColor = "white"

const Back2 = () => {
  
  return (
    <>
        <div id="bg2">
        
            <Tilt   className='bg2-subContainer' tiltEnable={false} transitionSpeed={3000} glareEnable={true} glareMaxOpacity={glareOpacity} scale={1.1} glareColor={glareColor} >
                <div className="drImg"><img src={bg2_Dr} alt="" /></div>
                <div className="bg2-txt">
                  <h1 className="bg2About">About</h1>
                  <div className="bg2AboutWrite">
                      <p>Adept medical doctor with eight solid years of practice experience. Dedicated to exemplary patient outcomes and following all necessary medical procedures with the use of the latest industry equipment and technology.</p>
                      <p>Strong focus on listening to and addressing patient concerns and answering all questions in terms patients can easily understand. </p>
                      <p>Willingness to work with all members of the medical team and listen to their suggestions and input to improve results and maximize patient satisfaction. Specialized as a general internist during residency.</p>
                  </div>
                   
                </div>
            </Tilt>
            
        </div>
    </>
  )
}

export default Back2
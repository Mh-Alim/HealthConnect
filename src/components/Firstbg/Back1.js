import React from 'react'
import './Back1.css'
import drImg from '../../images/bg1/drImg1.png'
import Tilt from 'react-parallax-tilt';
import shape from '../../images/bg1/shape.png'
import sq from '../../images/bg1/square.png'
import plus from '../../images/bg1/plus.png'


const Back1 = () => {
  return (
    <>
        <div className="bg1">
          <img src={shape} alt="back1"  />
          <div className="flexRow">
              <Tilt className='docImg'>
                  <img src={drImg} alt="DoctorImg" />
              </Tilt>
              <div className="bg1-txt1">
                <div className='txtCentre'>
                  <h1 className='inline'>Hey there, </h1><br />
                  <h2 className='inline'>I am your Doctor, Stephen Ramirez</h2><br />
                  <h4 className='inline'>Doctor of Medicine || Bachelor of Science in Biology</h4>
                </div>
                <div className="container">
                    <div className="btn" >Say Hii</div>
                </div>
              </div>
            <div className="square"><img src={sq} alt="" /></div>
            <div className="plus"><img src={plus} alt="" /></div>
          </div>

        </div>

    </>
  )
}

export default Back1
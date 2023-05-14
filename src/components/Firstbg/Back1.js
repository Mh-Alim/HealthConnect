import React, { useEffect } from 'react'
import './Back1.css'
import drImg from '../../images/bg1/drImg1.png'
import Tilt from 'react-parallax-tilt';
import shape from '../../images/bg1/shape.png'
import sq from '../../images/bg1/square.png'
import plus from '../../images/bg1/plus.png'
import { useLocation, useNavigate } from 'react-router-dom';


const Back1 = () => {
  const navigate = useNavigate();
  const location = useLocation();

  function getString(str) {
    let len = str.length
    let res;
    for (let i = 0; i < len; i++) {
      if (str[i] === '&') {
        res = str.substring(0, i);
        break;
      }
    }
    return res;
  }
  useEffect(() => {
    const state = location.search.substring(1);
    console.log(state);
    let s = getString(state)
    console.log("string",s);
    if (s === "payment-success") {
      navigate("/payment-success");
    }
  },[])
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
                    <div className="back-btn" >Say Hii</div>
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
import React from 'react'
import "./Appoint.css"
import mobImg from '../../images/workingProcess/mobile.png'
import mobWomen from '../../images/workingProcess/mobileWomen.png'


const Appoint = () => {
  return (
    <div id="Appoint">
        <div className="appoinForm">
            <div className="form">
                <form action="" method='POST'>
                  <label htmlFor="fname">Full Name : </label> <br />
                  <input type="text" id='fname'/>

                  <label htmlFor="mobNo"></label><br />
                  <input type="text" id='mobNo'/>

                  <label htmlFor="email"></label><br /> 
                  <input type="text" id='email'/>
                  <br />
                  <input type="submit" value="submit"/>

                </form>
            </div>
        </div>
        <div className="mobileAnimation">
              <div className="mobImg"><img src={mobImg} alt="" /></div>
              <div className="mobWomen"><img src={mobWomen} alt="" /></div>
        </div>
    </div>
  )
}

export default Appoint
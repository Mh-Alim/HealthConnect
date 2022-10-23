import React from 'react'
import "./List.css"
import userImg from "../../images/user.jpg"
const List = () => {
  return (
    <div id='AppointmentList'>
        <div className="innerList">
            
            <div className="userImg">
                <img src={userImg} alt="userImage" id='' />
                <div className="listText">
                    <p className='cp userEmail' >samsoon7789@gmail.com</p>
                    <p className='cp userName'>Alim Khan dhaih</p>
                    <p className='cp appointmentNo' >Appointment Number</p>
                </div>
            </div>
            <div className="userImg">
                <img src={userImg} alt="userImage" id='' />
                <div className="listText">
                    <p className='cp userEmail' >samsoon7789@gmail.com</p>
                    <p className='cp userName'>Alim Khan dhaih</p>
                    <p className='cp appointmentNo' >Appointment Number</p>
                </div>
            </div>
            <div className="userImg">
                <img src={userImg} alt="userImage" id='' />
                <div className="listText">
                    <p className='cp userEmail' >samsoon7789@gmail.com</p>
                    <p className='cp userName'>Alim Khan dhaih</p>
                    <p className='cp appointmentNo' >Appointment Number</p>
                </div>
            </div>
            <div className="userImg">
                <img src={userImg} alt="userImage" id='' />
                <div className="listText">
                    <p className='cp userEmail' >samsoon7789@gmail.com</p>
                    <p className='cp userName'>Alim Khan dhaih</p>
                    <p className='cp appointmentNo' >Appointment Number</p>
                </div>
            </div>
            <div className="userImg">
                <img src={userImg} alt="userImage" id='' />
                <div className="listText">
                    <p className='cp userEmail' >samsoon7789@gmail.com</p>
                    <p className='cp userName'>Alim Khan dhaih</p>
                    <p className='cp appointmentNo' >Appointment Number</p>
                </div>
            </div>
            
        </div>   
    </div>
  )
}

export default List
import React,{useState,useEffect} from 'react'
import "../Signup/Signup.css"

import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    // MDBCheckbox
  }
  from 'mdb-react-ui-kit';
import { NavLink, useNavigate } from 'react-router-dom';


const EditProfile = () => {
  const [userData, setUserData] = useState({name:"",email:"",phone:"",address:""});
  const navigate = useNavigate();


  const callFun = async () => {
    
    try{

      const res = await fetch("/api/editProfile",{
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      });
      
      if(!res.status === 200) throw new Error("User not found");
      const data = await res.json();
      setUserData({...userData,name:data.name, email : data.email, phone: data.phone})
  
    } 
    catch(err){
      console.log(err);
      navigate("/login");
    }
  }
  useEffect(() => {
    callFun();
  }, []);


  const handleClick = (e)=>{
    const name = e.target.name;
    const value = e.target.value;

    setUserData({...userData,[name]:value});
  }


  
  return (
    <>
        <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image ' >
        <div className='mask gradient-custom-3'></div>
        <MDBCard id='signup_card' className='m-5' >
            <MDBCardBody className='px-5'>
            <h2 className="signup-heading text-uppercase text-center mb-5"> Edit Profile</h2>
            <MDBInput wrapperClass='mb-4' label='Your Name' size='lg' name='name' id='form1' type='text' value={userData.name} onChange={handleClick} />
            <MDBInput wrapperClass='mb-4' label='Date of Birth' size='lg' name='dob' id='form2' type='date' onChange={handleClick} />
            <MDBInput wrapperClass='mb-4' label='Height(in cm)' size='lg' name='height' id='form2' type='number' onChange={handleClick} />
            <MDBInput wrapperClass='mb-4' label='weight(in Kg)' size='lg' name='weight' id='form2' type='number' onChange={handleClick} />
            <MDBInput wrapperClass='mb-4' label='Your Phone Number' name='phone' size='lg' id='form2' type='tel' value={userData.phone} onChange={handleClick}/>
            <MDBInput wrapperClass='mb-4' label='Your Email' size='lg' name='email' id='form2' type='email' value={userData.email} onChange={handleClick}/>
            <MDBInput wrapperClass='mb-4' label='Address' size='lg' name='address' id='form4' type='text' value={userData.address} onChange={handleClick}/>
            {/* <div className='d-flex flex-row justify-content-center mb-4'>
                <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I agree all statements in Terms of service' />
            </div> */}
            <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg'>Edit</MDBBtn>
            <p className='ml-4'>Go to <NavLink to="/profile">Previous</NavLink> page</p>
            </MDBCardBody>
        </MDBCard>
        </MDBContainer>
    </>
  )
}

export default EditProfile
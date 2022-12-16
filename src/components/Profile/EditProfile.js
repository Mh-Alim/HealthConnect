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
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();


  const callFun = async () => {
    
    try{

      const res = await fetch("/api/profile",{
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      });
      
      
      const resFromServerInJson = await res.json();
      console.log(resFromServerInJson)
      if(res.status === 401){
          window.alert(resFromServerInJson.message);
      }
      else if(!res.status === 200) throw new Error("User not found");
      setUserData(resFromServerInJson);
  
    } 
    catch(err){
      console.log(err);
      navigate("/login");
    }
  }
  useEffect(() => {
    callFun();
  }, []);


  const handleChange = (e)=>{
    const name = e.target.name;
    const value = e.target.value;

    setUserData({...userData,[name]:value});
  }


  const handleClick = async (e)=>{
    try{



      e.preventDefault();
      // email, password,
      const {name,phone,address,height,weight,dob} = userData;
      const res = await fetch("/api/editProfile", {
        method : "POST",
        headers: {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify({
          //,id,email, password
          name,phone,address,height,weight,dob
        })
      })

      // backend se i am getting data just check this line of code
      const serverResInJson = await res.json();
      console.log(serverResInJson);


      if(res.status === 401){
        window.alert(serverResInJson.message);
      }

      else if (res.status === 200){
        window.alert(serverResInJson.message);
        navigate("/profile");
      }



    }
    catch(err){
      console.log( " error in editProfile component handleClick function and error is "+ err);
    }
  }

  
  return (
    <>
        <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image ' >
        <div className='mask gradient-custom-3'></div>
        <MDBCard id='signup_card' className='m-5' >
            <MDBCardBody className='px-5'>
            <h2 className="signup-heading text-uppercase text-center mb-5"> Edit Profile</h2>
            <MDBInput wrapperClass='mb-4' label='Your Name' size='lg' name='name' id='form1' type='text' value={userData.name} onChange={handleChange} />
            <MDBInput wrapperClass='mb-4' label='Date of Birth' size='lg' name='dob' id='form2' type='date' onChange={handleChange} />
            <MDBInput wrapperClass='mb-4' label='Height(in cm)' size='lg' name='height' id='form2' type='number' onChange={handleChange} />
            <MDBInput wrapperClass='mb-4' label='weight(in Kg)' size='lg' name='weight' id='form2' type='number' onChange={handleChange} />
            <MDBInput wrapperClass='mb-4' label='Your Phone Number' name='phone' size='lg' id='form2' type='tel' value={userData.phone} onChange={handleChange}/>
            {/* <MDBInput wrapperclassName='mb-4' label='Your Email' size='lg' name='email' id='form2' type='email' value={userData.email}/> */}
            <MDBInput wrapperClass='mb-4' label='Address' size='lg' name='address' id='form4' type='text' value={userData.details ? userData.details.address ? userData.details.address : "" : ""} onChange={handleChange}/>
            {/* <div className='d-flex flex-row justify-content-center mb-4'>
                <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I agree all statements in Terms of service' />
            </div> */}
            <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg' type='submit' onClick={handleClick}>Edit</MDBBtn>
            <p className='ml-4'>Go to <NavLink to="/profile">Previous</NavLink> page</p>
            </MDBCardBody>
        </MDBCard>
        </MDBContainer>
    </>
  )
}

export default EditProfile
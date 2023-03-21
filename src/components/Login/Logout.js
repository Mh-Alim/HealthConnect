import React from 'react'
import { useEffect , useRef, useContext, } from 'react'
import { useNavigate } from 'react-router-dom'
import { userContext } from '../../App'
import { ToastCallError, ToastCallSuccess } from '../../ReactToast'

const Logout = () => {
    const navigate = useNavigate();
    const {state,dispatch} = useContext(userContext)

  const initial = useRef(false);
  const logoutCall = async() => {
    try{
        const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/logout`,{
          method: "GET",
          credentials : "include",
          headers: {
            'Accept' : "application/json",
            "Content-Type": "application/json",
          },
          credentials: 'include'
        })
  
        
        const data = await res.json();
        if(res.status !== 201){
            ToastCallError("You are not logged in yet");
        }
        else {
            dispatch({type:"USER",payload: false})
            ToastCallSuccess(data.message)
            navigate("/login");
        }
        
        console.log(data.message);
      }
      catch(err){
        console.log(err)
      }
}

  

useEffect(() => {
  if(!initial.current){
    initial.current=true;
    logoutCall();

  }
  
}, []);










  return (
    <div>
        Logout ho chuka h
    </div>
  )
}

export default Logout
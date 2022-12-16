import React from 'react'
import { useEffect , useRef} from 'react'


const Logout = () => {
    
    


  const initial = useRef(false);
  const logoutCall = async() => {
    try{
        const res = await fetch("/api/logout",{
          method: "GET",
          headers: {
            Accept : "application/json",
            "Content-Type": "application/json",
          },
          credentials: 'include'
        })
  
        
        const data = await res.json();
        if(res.status != 201){
            alert("You are not logged in yet");
        }
        else {
            alert(data.message)
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
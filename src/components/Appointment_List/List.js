import React,{useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom'
import "./List.css"
import userImg from "../../images/user.jpg"
const List = () => {
    var count = 1;
    const [user, setUser] = useState([{}]);
    const navigate = useNavigate();

    const makeList = async () => {
        try{

            const resFromServer = await fetch("/api/list",{
                method: "GET",
                headers: {
                    "Content-Type" : "application/json",
                }
                
                
            });
            // console.log(resFromServer);
            

            const resFromServerInJson = await resFromServer.json();
            console.log(resFromServerInJson);
            if(resFromServer.status == 401){
                window.alert(resFromServerInJson.message);
                navigate("/login");
            }

            setUser(resFromServerInJson);
            console.log(user);

        }
        catch(err){
            console.log(err);
            navigate("/login");
        }
        
    }


    

    let initial = true;
    useEffect(() => {
      if(initial){
        makeList();
        initial = false;
      }
    }, [])
    


  return (
    <div id='AppointmentList'>
        <div className="innerList">
            
           {
            user.map( (singleUser) => {
                return ( singleUser.status === "Progress" ?    <div className="userImg" key={singleUser._id}>
                    <img src={userImg} alt="userImage" id='' />
                    <div className="listText">
                        <p className='cp userEmail' > {singleUser.user.email ? singleUser.user.email : "loading" } </p>
                        <p className='cp userName'>{singleUser.user.details.name ? singleUser.user.details.name : "loading name"}</p>
                        <p className='cp appointmentNo'>{count++}</p>
                    </div>
                </div> : null);
            })
           }
            
            
            
        </div>   
    </div>
  )
}

export default List
import React,{useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom'
import "./List.css"
import userImg from "../../images/user.jpg"
const List = () => {

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
    useEffect(() => {
      makeList();
    }, [])
    


  return (
    <div id='AppointmentList'>
        <div className="innerList">
            
           {
            user.map( (singleUser,idx) => {
                return <div className="userImg">
                    <img src={userImg} alt="userImage" id='' />
                    <div className="listText">
                        <p className='cp userEmail' > {singleUser.email ? singleUser.email : "loading" } </p>
                        <p className='cp userName'>{singleUser.name ? singleUser.name : "loading name"}</p>
                        <p className='cp appointmentNo' >{idx+1}</p>
                    </div>
                </div>
            })
           }
            
            
            
        </div>   
    </div>
  )
}

export default List
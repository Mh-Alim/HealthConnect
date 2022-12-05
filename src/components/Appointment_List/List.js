import React,{useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom'
import "./List.css"
import userImg from "../../images/user.jpg"



const List = () => {
    var count = 1;

    const [logedInUser, setLogedInUser] = useState({});
    const [user, setUser] = useState([{}]);
    const navigate = useNavigate();

    const makeList = async () => {
        try{
            console.log("makeList");
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


    // only for admin
    const deleteListHandler = async (appointment_id)=> {
        const resFromServer = await fetch("/api/delList",{
            method : "POST",
            headers: {
            "Content-Type" : "application/json"
            },
            body : JSON.stringify({
                appointment_id
            })

        });

        const resInJson = await resFromServer.json();
        console.log(resInJson);
        alert(resInJson.message);
        
    }

    // checking user or admin

    const userOrAdmin = async ()=> {
        const resFromServer = await fetch("/api/logedInUser",{
            method: "GET",
            headers: {
                "Content-Type" : "application/json",
            }
            
            
        });
        const res = await resFromServer.json();
        setLogedInUser(res.user);
        console.log(res)
        console.log(logedInUser);
    
    }

    let initial = true;
    useEffect(() => {
      if(initial){
        makeList();
        userOrAdmin();
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
                        <p className='cp appointmentNo'>Appointment No. {count++}</p>
                        { (logedInUser.Role === 'admin') ? <p onClick={async() => {
                            await deleteListHandler(singleUser._id);
                            makeList();
                        }} id='deleteList' className='cp'><i   className="bi bi-bag-check" > </i></p> : null }
                        
                    </div>
                </div> : null);
            })
           }
            
            
            
        </div>   
    </div>
  )
}

export default List
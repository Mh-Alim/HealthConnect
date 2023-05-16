import React,{useEffect,useRef,useState,useCallback} from 'react'
import { useNavigate } from 'react-router-dom'
import "./List.css"
import userImg from "../../images/default_user.png"
import Search from './Search'
import AptList from './AptList'
import { ToastCallSuccess } from '../../ReactToast'



const List = () => {


    var count = 1;

    const [logedInUser, setLogedInUser] = useState({});
    const [user, setUser] = useState([{}]);
    const navigate = useNavigate();

    const makeList = useCallback( async () => {
        try{
            const resFromServer = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/list`,{
                method: "GET",
                credentials : "include",
                headers: {
                    "Content-Type" : "application/json",
                    'Accept': 'application/json'
                }
                
                
            });
            

            const resFromServerInJson = await resFromServer.json();
            if(resFromServer.status === 401){
                window.alert(resFromServerInJson.message);
                navigate("/login");
            }

            setUser(resFromServerInJson);

        }
        catch(err){
            console.log(err);
            navigate("/login");
        }
        
    },[navigate,user]);


    // only for admin
    const deleteListHandler = async (appointment_id)=> {
        const resFromServer = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/delList`,{
            method : "POST",
            credentials : "include",
            headers: {
            "Content-Type" : "application/json",
            'Accept': 'application/json'
            },
            body : JSON.stringify({
                appointment_id
            })

        });

        const resInJson = await resFromServer.json();
        ToastCallSuccess(resInJson.message);
        
    }

    // checking user or admin

    const userOrAdmin = useCallback( async ()=> {
        const resFromServer = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/logedInUser`,{
            method: "GET",
            credentials : "include",
            headers: {
                "Content-Type" : "application/json",
                'Accept': 'application/json'
            }
            
            
        });
        const res = await resFromServer.json();
        setLogedInUser(res.user);
        
    
    },[logedInUser]);


    // to removed reder twice
    let initial = useRef(true);
    useEffect(() => {
      if(initial.current === true){
        makeList();
        userOrAdmin();
        initial.current = false;
      }
    }, [makeList,userOrAdmin])
    


  return (

    <div className="innerList">
            
           {
            user.map( (singleUser) => {
                return ( singleUser.status==="Progress" ?    <div className="userImg" key={singleUser._id}>
                    <img src={userImg} alt="userImage" id='' />
                    <div className="listText">
                        <p className='cp userEmail' > {singleUser.user.email ? singleUser.user.email : "loading" } </p>
                        <p className='cp userName'>{singleUser.user.name ? singleUser.user.name : "loading name"}</p>
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
    
  )
}

export default List
import React, { useContext, useRef, useState, useCallback, useEffect } from 'react'
import { MDBInputGroup, MDBInput, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';
import { searchContext } from './AptList';
import userImg from "../../images/user.jpg"
import "./List.css"
import { useNavigate } from 'react-router-dom';
import { ToastCallSuccess } from '../../ReactToast';


const Search = () => {
    let cnt = 1;

    const {state,dispatch} = useContext(searchContext);
    const [searchedUser, setSearchedUser] = useState([{}]);
    const searchData = useRef("");
    const [logedInUser, setLogedInUser] = useState({});
    const [render, setRender] = useState(true);
    const navigate = useNavigate();

    console.log("search me render hua ya nhi ")
    const search = async(e)=>{
        e.preventDefault();
        const search_text = searchData.current.value;
  
       
  
        const res = await fetch("/api/search", {
          method : "POST",
          headers: {
            "Content-Type" : "application/json",
            'Accept': 'application/json'
          },
          body : JSON.stringify({
            search_text
          })
        })
        
        const jsonRes = await res.json();

        if(res.status === 200){
          dispatch({type:"SEARCH",payload: true});
          setSearchedUser(jsonRes.patients)
          console.log(searchedUser)
        }
        console.log(jsonRes);
       
        window.alert("searching");
    }

    // admin can delete user
    const deleteListHandler = async (appointment_id)=> {
      const resFromServer = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/delList`,{
          method : "POST",
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

  let initial = useRef(true);
    useEffect(() => {
      if(initial.current === true){
        userOrAdmin();
        initial.current = false;
      }
    }, [userOrAdmin])

  
  return (

    <div className='Search'>
        <div className ="input-group ">
            <input type="search" className ="form-control" placeholder="Search Email" ref={searchData} aria-label="Search" aria-describedby="search-addon" />
            <button type="button" id='searchBtn' className ="btn btn-outline-primary" onClick={search}>search</button>
        </div>
        <div className="searchResults innerList" >
            
           {
            searchedUser.map( (singleUser,i) => {
                return ( state && singleUser.user ?    <div className="userImg" key={singleUser._id}>
                    <img src={userImg} alt="userImage" id='' />
                    <div className="listText">
                        <p className='cp userEmail' > {singleUser.user.email ? singleUser.user.email : "loading" } </p>
                        <p className='cp userName'>{singleUser.user.name ? singleUser.user.name : "loading name"}</p>
                        <p className='cp appointmentNo'>Appointment No. {i+1}</p>
                        { (logedInUser.Role === 'admin') ? <p onClick={async() => {
                            await deleteListHandler(singleUser._id);
                            dispatch({type:"SEARCH",payload: null})
                            
                        }} id='deleteList' className='cp'><i   className="bi bi-bag-check" > </i></p> : null }
                        
                    </div>
                </div> : null);
            })
           }
            
            
            
        </div>
    </div>
  )
}

export default Search
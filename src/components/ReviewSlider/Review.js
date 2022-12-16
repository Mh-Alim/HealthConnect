import React,{useState,useRef,useEffect} from 'react'
import {useNavigate, useLocation} from "react-router-dom"
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBTextArea,
    MDBInput,
    MDBCheckbox
  }
  from 'mdb-react-ui-kit';
import { NavLink } from 'react-router-dom';
import "./Review.css"
import image from "../../images/user.jpg"

// card stars 

// review stars js


var starHtmlElem = [];
for(var i = 0;i<5;i++){
  starHtmlElem.push('fas fa-star');
}
let revRating = 0;
const reviewStar = ()=> {

  console.log("review star");
  
  const stars = document.querySelectorAll('.star')
  // console.log(stars);


  // var obj = [];

  // for(var i = 0;i<5;i++){
  //   console.log(i)
  //   obj.push(<i className="fas fa-star"></i>)
  // }
  
  // console.log(obj)
  function showRating(e) {
    let type = e.type;
    let starValue = this.starValue;
    if(type === 'click'){
      revRating = starValue;
    }
    // console.log(starValue);

    stars.forEach(function(elem,ind){
      if(type === 'click'){
        if(ind < starValue){
          elem.classList.add("orangeRev");
        }
        else {
          elem.classList.remove("orangeRev");
        }
      }

      if(type === 'mouseover'){
        if(ind < starValue){
          elem.classList.add("yellowRev");
        }
        else {
          elem.classList.remove("yellowRev");
        }
      }
      if(type === 'mouseout'){
          elem.classList.remove("yellowRev");
      }



    })
  }


  // main function
  for(var i = 0;i<stars.length;i++){
    stars[i].starValue = i+1;
    
    ["click","mouseover","mouseout"].forEach((elem)=>{
      stars[i].addEventListener(elem,showRating);
    })
  }

}

const Review = () => {
  const navigate = useNavigate();

  const [myEmail, setMyEmail] = useState('');
  const [users, setUsers] = useState([{}]);
  const reviewRef = useRef('');
  const [reviewName, setReviewName] = useState(true);
  const [vis, setVis] = useState("none")

  // just for button 
  const handleDisplay = () => {

    if(reviewName) setReviewName(false);
    else setReviewName(true);
    if(vis === "none") setVis("block");
    else setVis("none");
  }


// const getMyEmail = async() => {

// }

  // reviewStar();
let initial = true;
  useEffect(() => {
    if(initial) {
      reviewStar();
      // getMyEmail();
      initial = false;
    }
    
  }, [])
  
  

  // submit review 

  const submitReviewHandler = async (e) => {
    e.preventDefault();
    const review = reviewRef.current.value;
    const res = await fetch("/api/review",{
      method: "POST",
      headers: {
          "Content-Type" : "application/json",
      },
      body: JSON.stringify({
          review,revRating
      })
  })
// console.log("after res")
    const resFromServerInJson = await res.json();
    console.log(resFromServerInJson)
   let stars = document.querySelectorAll('.star');

   stars.forEach(function(elem,ind){
    if(ind < revRating) elem.classList.remove("orangeRev");
   })


    if(res.status === 200){
      reviewRef.current.value = '';
      setMyEmail(resFromServerInJson.email);
    }
    window.alert(resFromServerInJson.message);
  }





  // get request for reviews

    const userReviews = async () => {
      console.log("userReviews")
        try{

            const resFromServer = await fetch("/api/reviews",{
                method: "GET",
                headers: {
                    "Content-Type" : "application/json",
                }
                
                
            });
            // console.log(resFromServer);
            

            const resFromServerInJson = await resFromServer.json();
            console.log("Res from server")
            console.log(resFromServerInJson);
            setUsers(resFromServerInJson.user);
            // console.log(users)
            // window.alert(resFromServerInJson.message);
            // console.log(user);

        }
        catch(err){
            console.log(err);
            navigate("/login");
        }
        
    }
    let initial1 = true;
    useEffect(() => {
      if(initial1){
        userReviews();
        initial1 = false;
      }
      
    }, []);


  
  return (
    <div id="review">
      
        
        <div className='testimonials'>
          <div className="inner">
            <h1>Reviews</h1>
            <div className="border"></div>
            <MDBBtn color='secondary' className='mb-4 reviewHandleBtn gradient-custom-4' type='submit' onClick={handleDisplay}  size='lg' > { reviewName ? "Write Review": "close" }</MDBBtn>
        
          {/* give review  */}
            <MDBContainer id='for_pass_container' style={{display: vis}}  fluid className=' align-items-center ' >
              <MDBCard className='m-5' id='signup_card'>
                <MDBCardBody id='reviewStyle'  className='padd' >
                  {/* <MDBInput wrapperclassName='mb-4' label='Rating (0-5)' size='lg' inputRef={ratingRef}   name='rating' type='number'  /> */}
                  <div className="star-rating">
                    <ul className="stars">
                      <li className="star"><i className="fa fa-star"></i></li>
                      <li className="star"><i className="fa fa-star"></i></li>
                      <li className="star"><i className="fa fa-star"></i></li>
                      <li className="star"><i className="fa fa-star"></i></li>
                      <li className="star"><i className="fa fa-star"></i></li>
                    </ul>
                  </div>
                  
                  {/* <MDBInput wrapperclassName='mb-4' id='review'  label='Write Reveiw' inputRef={reviewRef} size='lg'  name='review' type='text'  /> */}
                  <MDBTextArea label='Message' contrast id='textAreaExample' className='mb-3' inputRef={reviewRef} rows={4} />
                  <MDBBtn className='mb-4 w-100 gradient-custom-4' type='submit' onClick={ async(e) => {
                    await submitReviewHandler(e);
                    userReviews();
                  }}  size='lg' >Submit Reivew</MDBBtn>
                </MDBCardBody>
                
              </MDBCard>
            </MDBContainer>


            <div className="review_row">
              {

                users.map((user)=>{
                 
                    return (
                      user.review ? 
                      <div className="review_col" key={user._id}>
                        <div className="testimonial">
                          <img src={image} alt="reviewImage" />
                          <div className="name">{user.user.name}</div>
                          <div className="stars">
                              {/* <i className="far fa-star"></i> for not filled stars */}
                              
                              {
                                starHtmlElem.map((el, i) => {
                                   return i < user.reviewRating ? <i className={el} key={i}></i> : <i className="far fa-star" key={i}></i>
                                })
                                
                              }
                            
                          </div>
  
  
                          <p>{ user.review }.</p>
                        </div>
                      </div> : null 
                    )
                })
              

              }
            </div>  



          </div>
        </div>
    </div>
  )
}

export default Review
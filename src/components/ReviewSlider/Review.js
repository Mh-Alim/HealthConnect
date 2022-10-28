import React,{useState,useRef,useEffect} from 'react'
import {useNavigate, useLocation} from "react-router-dom"
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox
  }
  from 'mdb-react-ui-kit';
import { NavLink } from 'react-router-dom';
import "./Review.css"


import image from "../../images/user.jpg"

const Review = () => {

  const reviewRef = useRef('');
  const ratingRef = useRef('');
  const [reviewName, setReviewName] = useState(true);
  const [vis, setVis] = useState("none")
  const handleDisplay = () => {

    if(reviewName) setReviewName(false);
    else setReviewName(true);
    if(vis === "none") setVis("block");
    else setVis("none");
  }



  // submit review 

  const submitReviewHandler = async (e) => {
    e.preventDefault();
    const review = reviewRef.current.value;
    const rating = ratingRef.current.value;

    const res = await fetch("/api/review",{
      method: "POST",
      headers: {
          "Content-Type" : "application/json",
      },
      body: JSON.stringify({
          review,rating
      })
  })
// console.log("after res")
    const resFromServerInJson = await res.json();

    
    window.alert(resFromServerInJson.message);
  }
  return (
    <div id="review">
      
        
        <div className='testimonials'>
          <div className="inner">
            <h1>Reviews</h1>
            <div className="border"></div>
            <MDBBtn className='mb-4 w-25 gradient-custom-4' type='submit' onClick={handleDisplay}  size='lg' > { reviewName ? "Write Review": "close" }</MDBBtn>
        
          {/* give review  */}
            <MDBContainer id='for_pass_container' style={{display: vis}}  fluid className=' align-items-center ' >
              <MDBCard className='m-5' id='signup_card'>
                <MDBCardBody className='padd' >
                  <MDBInput wrapperClass='mb-4' label='Rating (0-5)' size='lg' inputRef={ratingRef}   name='rating' type='number'  />
                  <MDBInput wrapperClass='mb-4' id='review'  label='Write Reveiw' inputRef={reviewRef} size='lg'  name='review' type='text'  />
                
                  <MDBBtn className='mb-4 w-100 gradient-custom-4' type='submit' onClick={submitReviewHandler}  size='lg' >Submit Reivew</MDBBtn>
                </MDBCardBody>
                
              </MDBCard>
            </MDBContainer>
            <div className="review_row">

             
              <div className="review_col">
                <div className="testimonial">
                  <img src={image} alt="reviewImage" />
                  <div className="name">Full Name</div>
                  <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                  </div>


                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum obcaecati dignissimos est, architecto eveniet minima explicabo perferendis omnis quam magni non accusantium atque laboriosam? Dicta sapiente saepe voluptas tempora ipsum ipsa harum praesentium deleniti sit perferendis laborum, reiciendis at optio.</p>

                </div>
              </div>
              <div className="review_col">
                <div className="testimonial">
                  <img src={image} alt="reviewImage" />
                  <div className="name">Full Name</div>
                  <div className="stars">
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                  </div>


                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum obcaecati dignissimos est, architecto eveniet minima explicabo perferendis omnis quam magni non accusantium atque laboriosam? Dicta sapiente saepe voluptas tempora ipsum ipsa harum praesentium deleniti sit perferendis laborum, reiciendis at optio.</p>

                </div>
              </div>
              <div className="review_col">
                <div className="testimonial">
                  <img src={image} alt="reviewImage" />
                  <div className="name">Full Name</div>
                  <div className="stars">
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                  </div>


                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum obcaecati dignissimos est, architecto eveniet minima explicabo perferendis omnis quam magni non accusantium atque laboriosam? Dicta sapiente saepe voluptas tempora ipsum ipsa harum praesentium deleniti sit perferendis laborum, reiciendis at optio.</p>

                </div>
              </div>
              <div className="review_col">
                <div className="testimonial">
                  <img src={image} alt="reviewImage" />
                  <div className="name">Full Name</div>
                  <div className="stars">
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                  </div>


                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum obcaecati dignissimos est, architecto eveniet minima explicabo perferendis omnis quam magni non accusantium atque laboriosam? Dicta sapiente saepe voluptas tempora ipsum ipsa harum praesentium deleniti sit perferendis laborum, reiciendis at optio.</p>

                </div>
              </div>
              <div className="review_col">
                <div className="testimonial">
                  <img src={image} alt="reviewImage" />
                  <div className="name">Full Name</div>
                  <div className="stars">
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                  </div>


                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum obcaecati dignissimos est, architecto eveniet minima explicabo perferendis omnis quam magni non accusantium atque laboriosam? Dicta sapiente saepe voluptas tempora ipsum ipsa harum praesentium deleniti sit perferendis laborum, reiciendis at optio.</p>

                </div>
              </div>
              <div className="review_col">
                <div className="testimonial">
                  <img src={image} alt="reviewImage" />
                  <div className="name">Full Name</div>
                  <div className="stars">
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                  </div>


                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum obcaecati dignissimos est, architecto eveniet minima explicabo perferendis omnis quam magni non accusantium atque laboriosam? Dicta sapiente saepe voluptas tempora ipsum ipsa harum praesentium deleniti sit perferendis laborum, reiciendis at optio.</p>

                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Review
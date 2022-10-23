import React from 'react'
import "./Review.css"
import { NavLink } from 'react-router-dom'
import image from "../../images/user.jpg"

const HomeReview = () => {
  return (
        <div id="review">
      
        
      <div className='testimonials'>
        <div className="inner">
          <h1 className='mf'>Reviews</h1>
          <div className="border"></div>
          <div className="review_row">
            <div className="review_col">
              <div className="testimonial pf">
                <img src={image} alt="reviewImage" />
                <div className="name">Full Name</div>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="far fa-star"></i>
                  <i className="far fa-star"></i>
                </div>


                <p className='review_para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum obcaecati dignissimos est, architecto eveniet minima explicabo perferendis omnis quam magni non accusantium atque laboriosam? Dicta sapiente saepe voluptas tempora ipsum ipsa harum praesentium deleniti sit perferendis laborum, reiciendis at optio.</p>

              </div>
            </div>
            <div className="review_col">
              <div className="testimonial pf">
                <img src={image} alt="reviewImage " />
                <div className="name">Full Name</div>
                <div className="stars">
                  <i className="far fa-star"></i>
                  <i className="far fa-star"></i>
                  <i className="far fa-star"></i>
                  <i className="far fa-star"></i>
                </div>


                <p className='review_para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum obcaecati dignissimos est, architecto eveniet minima explicabo perferendis omnis quam magni non accusantium atque laboriosam? Dicta sapiente saepe voluptas tempora ipsum ipsa harum praesentium deleniti sit perferendis laborum, reiciendis at optio.</p>

              </div>
            </div>
            <div className="review_col">
              <div className="testimonial pf">
                <img src={image} alt="reviewImage" />
                <div className="name">Full Name</div>
                <div className="stars">
                  <i className="far fa-star"></i>
                  <i className="far fa-star"></i>
                  <i className="far fa-star"></i>
                  <i className="far fa-star"></i>
                </div>


                <p className='review_para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum obcaecati dignissimos est, architecto eveniet minima explicabo perferendis omnis quam magni non accusantium atque laboriosam? Dicta sapiente saepe voluptas tempora ipsum ipsa harum praesentium deleniti sit perferendis laborum, reiciendis at optio.</p>

              </div>
            </div>
            
            
            
          </div>
        </div>
      <p className='pf'>wanna see more Reviews go to <NavLink to='/review' className="underline"> Review  </NavLink> section</p>
      </div>
  </div>
  )
}

export default HomeReview
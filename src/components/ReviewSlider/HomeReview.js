import React from "react";
import "./Review.css";
import { NavLink } from "react-router-dom";
import image from "../../images/default_user.png";

const HomeReview = () => {
  return (
    <div id="review">
      <div className="testimonials">
        <div className="inner">
          <h1 className="mf">Reviews</h1>
          <div className="border"></div>
          <div className="review_row">
            <div className="review_col">
              <div className="testimonial pf">
                <img src={image} alt="reviewImage" />
                <div className="name">Alim Khan</div>
                <div className="stars">
                  <i className="fas fa-stsar"></i>
                  <i className="fas fa-star"></i>
                  <i className="far fa-star"></i>
                  <i className="far fa-star"></i>
                </div>

                <p className="review_para">
                  This website is amazing! It's so easy to book appointments and
                  the payment process is quick and hassle-free. I love how I can
                  see all my appointments in one place and leave reviews to help
                  others. Highly recommend!
                </p>
              </div>
            </div>
            <div className="review_col">
              <div className="testimonial pf">
                <img src={image} alt="reviewImage " />
                <div className="name">Mukul</div>
                <div className="stars">
                  <i className="far fa-star"></i>
                  <i className="far fa-star"></i>
                  <i className="far fa-star"></i>
                  <i className="far fa-star"></i>
                </div>

                <p className="review_para">
                  "I recently used this website to book an appointment at a
                  clinic and I was blown away by how user-friendly it was. The
                  appointment form was straightforward and I received a
                  confirmation email right away. Plus, the option to leave a
                  review is a great way to give feedback and help others make
                  informed decisions. Kudos to the team behind this!
                </p>
              </div>
            </div>
            <div className="review_col">
              <div className="testimonial pf">
                <img src={image} alt="reviewImage" />
                <div className="name">Lakshman</div>
                <div className="stars">
                  <i className="far fa-star"></i>
                  <i className="far fa-star"></i>
                  <i className="far fa-star"></i>
                  <i className="far fa-star"></i>
                </div>

                <p className="review_para">
                  I can't say enough good things about this website. From start
                  to finish, the process of booking an appointment and making a
                  payment was seamless. I also appreciated the ability to see
                  other people's reviews of the clinic before making my own
                  appointment. This website has definitely made my life easier
                  and I will be using it again in the future!
                </p>
              </div>
            </div>
          </div>
        </div>
        <p className="pf">
          wanna see more Reviews go to{" "}
          <NavLink to="/review" className="underline">
            {" "}
            Review{" "}
          </NavLink>{" "}
          section
        </p>
      </div>
    </div>
  );
};

export default HomeReview;

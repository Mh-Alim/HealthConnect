import './App.css';
import Back1 from './components/Firstbg/Back1';
import Navbar from './components/Navbar/Navbar';
import Back2 from './components/SecBg/Back2';
import WorkingProcess from './components/WorkingProcess/WorkingProcess';
import {Route,Routes} from "react-router-dom"
import Appoint from './components/AppointmentForm/Appoint';
// import Footer from './components/Footer/Footer';
import Signup from './components/Signup/Signup.js';
import Login from './components/Login/Login';
import Error from './components/ErrorPage/Error';
import Review from './components/ReviewSlider/Review';
import HomeReview from './components/ReviewSlider/HomeReview';
import Profile from './components/Profile/Profile';
import List from './components/Appointment_List/List';
import EditProfile from './components/Profile/EditProfile';
import ForgotPassword from './components/Forgot_Password/ForgotPassword';
import OTP from './components/Forgot_Password/OTP';
import ResetPassword from './components/Forgot_Password/ResetPassword';
import Logout from './components/Login/Logout';

function App() {
  return (
    <>

              
            
            {/* <Back1 />
            <Back2 />
            <WorkingProcess/> */}

              <Navbar/>
              <Routes>
                <Route exact path='/' element={
                <><Back1 /> <Back2 /> <WorkingProcess />  <Appoint /> <HomeReview/> </>} 
                /> 
                <Route exact path='/Home' element = {<Back1 />} /> 
                <Route exact path='/about' element = {<Back2 />} /> 
                <Route exact path='/workProcess' element = {<WorkingProcess />} /> 
                <Route exact path='/signup' element = { <Signup /> } /> 
                <Route exact path='/appointment' element = { <Appoint /> } /> 
                <Route exact path='/login' element = { <Login />  } />
                <Route exact path='/review' element = { <Review />  } />
                <Route exact path='/profile' element = { <Profile />  } />
                <Route exact path='/lists' element = { <List />  } />
                <Route exact path='/editprofile' element = { <EditProfile />  } />
                <Route exact path='/forgot_password' element = { <ForgotPassword />  } />
                <Route exact path='/reset-password' element = { <ResetPassword />  } />
                <Route exact path='/otp' element = { <OTP />  } />
                <Route exact path='/logout' element = { <Logout />  } />
                <Route element= {<Error/>} />
              </Routes>
              {/* <Review /> */}
    
              {/* <Footer /> */}
    </>
  );
}

export default App;

import './App.css';
import Back1 from './components/Firstbg/Back1';
import Navbar from './components/Navbar/Navbar';
import Back2 from './components/SecBg/Back2';
import WorkingProcess from './components/WorkingProcess/WorkingProcess';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Appoint from './components/AppointmentForm/Appoint';
function App() {
  return (
    <>
        <BrowserRouter>

              
            <Navbar/>
            {/* <Back1 />
            <Back2 />
            <WorkingProcess/> */}
              <Routes>
                <Route exact path='/' element={<><Back1 /> <Back2 /> <WorkingProcess /> <Appoint /> </>} /> 
                <Route exact path='/Home' element = {<Back1 />} /> 
                <Route exact path='/about' element = {<Back2 />} /> 
                <Route exact path='/workProcess' element = {<WorkingProcess />} /> 
              </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import './index.css';
// import './dist/css/mdb.css';
// mdb css
import App from './App';

// for bootstrap icon 
import "bootstrap-icons/font/bootstrap-icons.css";

// mdb icon imports
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
// import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);


// reportWebVitals();

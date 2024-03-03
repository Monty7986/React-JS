import React, { useState } from 'react'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import Alert from './components/Alert';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import About1 from './components/Monty';
// import './App.css';

function App(props) {
  const [mode, setMode] = useState('light');

  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 3000);
  }

  const toggle = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#055160';
      showAlert("Dark Mode Has Been Enabled", "info");
      document.title = "Monty Js - Dark Mode";
      // setInterval(() => {
      //   document.title = "Install Monty Js Now";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "There is Bug In App";
      // }, 1500);
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Has Been Enabled", "info");
      document.title = "Monty Js - Light Mode";
    }
  }
  return (
    <>
      {/* <Router> */}
      <Navbar title="React Js" mode={mode} toggle={toggle} />
      <Alert alert={alert} />
        <div className="container">
          <TextForm showAlert={showAlert} heading="Enter Text Here" mode={mode} />
          {/* <Routes>

      
          </Routes>
          <Routes>

            <Route path="/anything" element={<About1 />} />
          </Routes> */}
        </div >
      {/* </Router > */}
    </>
  );
}



export default App;

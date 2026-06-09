//import logo from './logo.svg';
import Navbar from './CustomComponents/Navbar';
import CustomForm from './CustomComponents/CustomForm';
import About from './CustomComponents/About';
import React, { useState } from 'react';
import Alert from './CustomComponents/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#19196e';
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";

    }
  };
  return (
    <>
      <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} aboutText="About" />
      <Alert alert={alert} />
      <div className="container my-3" >

        <Routes>
          <Route path="/about" element={<About mode={mode} />} />
          <Route path="/" element={<CustomForm showAlert={showAlert} heading="Enter the text to Analyze below" mode={mode} />} />
        </Routes>
        {/* <About/> */}

{/*         <CustomForm showAlert={showAlert} heading="Enter the text to Analyze below" mode={mode} />
 */}      </div>
    </Router >
    </>
  );
}

export default App;

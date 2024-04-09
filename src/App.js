import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Route,
  Routes
  // Link
} from "react-router-dom";





function App() {

  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type,

    })
    setTimeout(() => {
      setAlert(null);
    }, 2*1000);
  }

  const toggleMode = ()=>{

    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode has been enabled", "success");
      // document.title = "TextUtils - Dark Mode"
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      // document.title = "TextUtils - Light Mode"

    }
  }

  return (
    <>
      <Router>

        <Navbar title = "TextUtils" mode = {mode} toggleMode={toggleMode}/>
        <Alert alert = {alert}/>
        <div className="container my-3">
          {/* We always use exect path to determine the correct path of the component*/}
          <Routes>
            <Route exect path="/about" element={<About mode={mode} />} />
            <Route exect path="/" element={<Textform showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Remove extra spaces" mode={mode} />} />
          </Routes>

        </div>

      </Router>


    </>
  );
}

//   return (
//     <>
//         <Navbar title = "TextUtils" mode = {mode} toggleMode={toggleMode}/>
//         <Alert alert = {alert}/>
//         <div className="container my-3">
//             <Textform showAlert={showAlert} heading = "Enter the Text to analyze below" mode = {mode}/>
//               {/* <About/> */}
//         </div>
//     </>
//   );

export default App;

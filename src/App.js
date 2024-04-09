import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
// import About from './components/About';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";





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

  // return (
  //   <>
  //     <Router>
  //       <Navbar title = "TextUtils" mode = {mode} toggleMode={toggleMode}/>
  //       <Alert alert = {alert}/>
  //       <div className="container my-3">

  //         <Switch>
  //           <Route path = "/about">
  //             <About/>
  //           </Route>

  //           <Route path="/">
  //           <Textform showAlert={showAlert} heading = "Enter the Text to analyze below" mode = {mode}/>
  //           </Route>

  //         </Switch>
  //       </div>
  //     </Router>


  //   </>
  // );
  return (
    <>
        <Navbar title = "TextUtils" mode = {mode} toggleMode={toggleMode}/>
        <Alert alert = {alert}/>
        <div className="container my-3">
            <Textform showAlert={showAlert} heading = "Enter the Text to analyze below" mode = {mode}/>
              {/* <About/> */}
        </div>
    </>
  );
}

export default App;

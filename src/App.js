// import logo from './logo.svg';
// import './App.css';
import { useState } from 'react';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setalert] = useState(null);

  const showalert= (message,type) =>{
    setalert({
      msg : message,
      type: type
    })
    setTimeout(()=>{
      setalert(null);
    },2000);
  }

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showalert("Dark Mode enabled", "success");
      document.title="My-App- Dark Mode";

      // 2 second alert message on title
      // setInterval(() => {
      //   document.title="Install this app";
      // }, 2000);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showalert("Light Mode enabled", "success");
      document.title="My App-Light mode";
    }
  }

  return (
    <>
      <Router> 
        <Navbar title="My App" mode={mode} toggleMode={toggleMode}/>
        
        <div className="container my-3"><Alert alert={alert}/></div>
        <Switch>
          <Route exact path="/about">
            <About mode={mode}/>
          </Route>
          
          <Route exact path="/">
            <div className="container my-3">
              <TextForm heading="Enter the text for analysis below" textalert={showalert} mode={mode}/>
            </div>
          </Route>
        </Switch>

       
        
        

      </Router>
    </>
  );
}

export default App;

// React matches partial path
// for exact match use 'exact'
// used above to match { <Route exact path="/about"> }
// import logo from './logo.svg';
// import './App.css';
import { useState } from 'react';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

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
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showalert("Light Mode enabled", "success");
    }
  }

  return (
    <>
      <Navbar title="My App" mode={mode} toggleMode={toggleMode}/>
      
      <div className="container my-3"><Alert alert={alert}/></div>
      
      <div className="container my-3">
        <TextForm heading="Enter the text for analysis below" textalert={showalert} mode={mode}/>
      </div>
      
      <About mode={mode}/>

      
    </>
  );
}

export default App;

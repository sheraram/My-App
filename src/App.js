// import logo from './logo.svg';
// import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      
      <Navbar title="My App"/>
      {/* <Navbar/> */}

      <div className="container my-3">
        <TextForm heading="Enter the text for analysis below"/>
      </div>
      
      <About/>
    </>
  );
}

export default App;

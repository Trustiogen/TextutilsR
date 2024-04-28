
import React, {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
// import About from './components/About';
// import { Routes,Route} from "react-router-dom";


function App() {
  const[mode, setMode] = useState('light');
  const toggleMode =() =>{
    if (mode ==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='#21375d';
    }
    else
    { 
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  
    }
  return (
      <>
      
        <Navbar title = "TextUtils" mode= {mode} toggleMode={toggleMode}/>
        <div className="container my-3" >
        <Textform heading = "Enter the text to Analyse" mode= {mode} toggleMode={toggleMode} />
        {/* <Routes>
          <Route path="/about" element ={<About/>}>
          </Route>
          <Route path="/" element ={<Textform heading = "Enter the text to Analyse" mode= {mode} toggleMode={toggleMode} />}>
          </Route> 
          
        </Routes> */}
        
        </div>
      
        </>    
  );
}

export default App;

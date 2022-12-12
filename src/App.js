import React, { useState } from 'react';
import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
function App() {
  const [mode, setMode] = useState('light') ;  
 

  function toggleMode () {
  if(mode === 'light'){
    setMode('#213363')
    document.body.style.backgroundColor = '#213363';
    document.body.style.color ='white';
  }
  else{
    setMode(  'light');
    document.body.style.backgroundColor = 'white';
    document.body.style.color ='black';
  }
  
  }
  return (
    <>

    <Navbar title= "Text Utils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
     {/* <Navbar /> */}
    <Alert/>
    <TextForm heading = "Enter your text to analyze below"/>
    {/* <About id="change"/> */}
    </>

    
  );
}

export default App;

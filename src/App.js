import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React from 'react';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor="#343a40";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor="white";
    }
  }

  return (
    <>
      <Navbar title="Textify" aboutText="About us" mode={mode} toggleMode={toggleMode}/>
      
      {//for default props: <Navbar/>
      }
      <div className="container my-3"> <TextForm heading="Enter text to be analyzed" mode={mode}/> </div>
      {/*<About/>*/}
    </>
  );
}

export default App;

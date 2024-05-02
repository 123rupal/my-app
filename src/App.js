import './App.css';
import Alert from './components/Alert';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React from 'react';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');
  const [alert,setAlert]= useState(null);

  const showAlert=(message,type)=>{
    setAlert({
        msg:message,
        type:type
      })
    setTimeout(()=>{
        setAlert(null);
    },2000)
  }


  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor="#343a40";
      showAlert("Dark Mode enabled.","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor="white";
      showAlert("Light Mode enabled.","success");
    }
  }

  return (
    <>
      <Navbar title="Textify" aboutText="About us" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      {//for default props: <Navbar/>
      }
      <div className="container my-3"> <TextForm heading="Enter text to be analyzed" mode={mode}/> </div>
      {/*<About/>*/}
    </>
  );
}

export default App;

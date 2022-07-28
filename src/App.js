import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';

function App() {
  const [Mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message , type)=>{
     setAlert({
      msg: message,
      type: type
     })

     setTimeout(() => {
      setAlert(null);
     }, 1200);
  }
  const toggleMode = ()=>{
    if(Mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor='black';
      showAlert("Dark mode has been enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
    }
  }
  return (
    <>
      <Navbar title="Text_Utils" mode={Mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze below" mode={Mode}/>
        <About/>
      </div>
    </>
  );
}

export default App;
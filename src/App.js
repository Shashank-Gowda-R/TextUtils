import React, { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import TextForm from './Components/TextForm';
// import About from './Components/About';

const App = () => {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = '#f2f2f2'
    } else {
      setMode('dark');
      document.body.style.backgroundColor = '#042743'
    }
  }
  let title = 'TextUtils';
  let nav = ['Home', 'About', 'Contact']
  let heading = 'Enter the text to analyze';
  return (
    <>
      <Navbar title={title} nav={nav} mode={mode} toggleMode={toggleMode} />
      <div className="container my-5">
        <TextForm heading={heading} mode={mode} />
        {/* <About /> */}
      </div>
    </>
  )
}

export default App;
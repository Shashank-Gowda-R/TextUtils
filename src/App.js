import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import TextForm from './Components/TextForm';

const App = () => {
  let title = 'TextUtils';
  let nav = ['Home', 'About', 'Contact']
  let heading = 'Enter the text to analyze';
  return (
    <>
      <Navbar title={title} nav={nav} />
      {/* <Navbar /> */}
      <div className="container my-5">
        <TextForm heading={heading} />
      </div>
    </>
  )
}

export default App;
import React, { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import About from './Components/About';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }

  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = '#f2f2f2';
      showAlert("Light Mode Enabled", "success");
      document.title = 'TextUtils - Home(Light Mode)'
    } else {
      setMode('dark');
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark Mode Enabled", "success");
      document.title = 'TextUtils - Home(Dark Mode)'
    }
  }

  let title = 'TextUtils';
  let nav = ['Home', 'About', 'Contact']
  let heading = 'Enter the text to analyze';
  return (
    <>
      <Router>
        <Navbar title={title} nav={nav} mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route exact path='/about' >
              <About mode={mode}/>
            </Route>
            <Route exact path='/'>
              <TextForm heading={heading} mode={mode} showAlert={showAlert} />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  )
}

export default App;
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Spotifylogin from './componenets/Spotifylogin';
import React, {useState, useEffect } from 'react';
// import Main from "./componenets/Main.js"
import Login from "./componenets/Logins/Login.js"
import axios from 'axios';

function App() {
  return (
    <div className="App">
      <Login/>
    </div>
  );
}

export default App;

import './App.css';
import 'semantic-ui-css/semantic.min.css'
import React, {useState, useEffect } from 'react';
import Login from "./componenets/Login.js"
import axios from 'axios';

function App() {
  return (
    <div className="App">
      <Login/>
    </div>
  );
}

export default App;

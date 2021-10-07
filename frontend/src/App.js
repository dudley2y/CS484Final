import './App.css';
import 'semantic-ui-css/semantic.min.css';
import React from 'react';
import Login from "./componenets/Login.js";
import AuthSpotify from './componenets/AuthSpotify.js';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <Login/>
          </Route>
          <Route path="/spotify">
            <AuthSpotify/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

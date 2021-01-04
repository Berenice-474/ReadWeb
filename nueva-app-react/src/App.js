import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import Home from './Componentes/Home';


function App() {
  return (
    <React.Fragment>
    <div className="App">
    <Router>
      
      <Switch>
        <Route exact path="/" component={Home}/>
    
      </Switch>
    </Router>
     
    </div>
    </React.Fragment>
  );
}

export default App;

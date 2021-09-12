import React from "react";
import "./App.css";
import Home from './pages/Home';
import Read from './pages/Read';
import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  return (
      <Router>
    <div className="App">
      <Route exact path="/">
        <Home/>
      </Route>
      <Route exact path="/read">
        <Read/>
      </Route>
    </div>
    </Router>
  );
}

export default App;

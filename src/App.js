import React from "react";
import "./App.css";
import Home from './pages/Home';
import Read from './pages/Read';
import Part1 from './pages/Part1';
import Intro from './pages/Intro';

import Chapter1 from './pages/Pt1/Chapter1';
import Chapter2 from './pages/Pt1/Chapter2';
import Chapter3 from './pages/Pt1/Chapter3';
import Chapter4 from './pages/Pt1/Chapter4';

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
      <Route exact path="/part1">
        <Part1/>
      </Route>
      <Route exact path="/intro">
        <Intro/>
      </Route>

      <Route exact path="/part1/chapter1">
        <Chapter1/>
      </Route>
      <Route exact path="/part1/chapter2">
        <Chapter2/>
      </Route>
      <Route exact path="/part1/chapter3">
        <Chapter3/>
      </Route>
      <Route exact path="/part1/chapter4">
        <Chapter4/>
      </Route>



    </div>
    </Router>
  );
}

export default App;

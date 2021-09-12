import React from "react";
import "./App.css";
import Home from './pages/Home';
import Read from './pages/Read';
import Intro from './pages/Intro';

import Part1 from './pages/Part1';
import Part2 from './pages/Part2';

import Chapter1 from './pages/Pt1/Chapter1';
import Chapter2 from './pages/Pt1/Chapter2';
import Chapter3 from './pages/Pt1/Chapter3';
import Chapter4 from './pages/Pt1/Chapter4';
import Chapter5 from './pages/Pt1/Chapter5';
import Chapter6 from './pages/Pt1/Chapter6';
import Chapter7 from './pages/Pt1/Chapter7';
import Chapter8 from './pages/Pt1/Chapter8';
import Chapter9 from './pages/Pt1/Chapter9';

import Chapter10 from './pages/Pt2/Chapter10';

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
      <Route exact path="/part2">
        <Part2/>
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
      <Route exact path="/part1/chapter5">
        <Chapter5/>
      </Route>
      <Route exact path="/part1/chapter6">
        <Chapter6/>
      </Route>
      <Route exact path="/part1/chapter7">
        <Chapter7/>
      </Route>
      <Route exact path="/part1/chapter8">
        <Chapter8/>
      </Route>
      <Route exact path="/part1/chapter9">
        <Chapter9/>
      </Route>

      <Route exact path="/part2/chapter10">
        <Chapter10/>
      </Route>



    </div>
    </Router>
  );
}

export default App;

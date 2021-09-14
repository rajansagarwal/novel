import React from "react";
import "./App.css";
import Home from './pages/Home';
import Read from './pages/Read';
import Intro from './pages/Intro';
import Finish from './pages/Finish';

import Part1 from './pages/Part1';
import Part2 from './pages/Part2';
import Part3 from './pages/Part3';

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
import Chapter11 from './pages/Pt2/Chapter11';
import Chapter12 from './pages/Pt2/Chapter12';
import Chapter13 from './pages/Pt2/Chapter13';
import Chapter14 from './pages/Pt2/Chapter14';
import Chapter15 from './pages/Pt2/Chapter15';
import Chapter16 from './pages/Pt2/Chapter16';
import Chapter17 from './pages/Pt2/Chapter17';
import Chapter18 from './pages/Pt2/Chapter18';
import Chapter19 from './pages/Pt2/Chapter19';
import Chapter20 from './pages/Pt2/Chapter20';
import Chapter21 from './pages/Pt2/Chapter21';
import Chapter22 from './pages/Pt2/Chapter22';

import Chapter23 from './pages/Pt3/Chapter23';
import Chapter24 from './pages/Pt3/Chapter24';
import Chapter25 from './pages/Pt3/Chapter25';
import Chapter26 from './pages/Pt3/Chapter26';
import Chapter27 from './pages/Pt3/Chapter27';
import Chapter28 from './pages/Pt3/Chapter28';
import Chapter29 from './pages/Pt3/Chapter29';

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
      <Route exact path="/part3">
        <Part3/>
      </Route>
      <Route exact path="/intro">
        <Intro/>
      </Route>
      <Route exact path="/finish">
        <Finish/>
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
      <Route exact path="/part2/chapter11">
        <Chapter11/>
      </Route>
      <Route exact path="/part2/chapter12">
        <Chapter12/>
      </Route>
      <Route exact path="/part2/chapter13">
        <Chapter13/>
      </Route>
      <Route exact path="/part2/chapter14">
        <Chapter14/>
      </Route>
      <Route exact path="/part2/chapter15">
        <Chapter15/>
      </Route>
      <Route exact path="/part2/chapter16">
        <Chapter16/>
      </Route>
      <Route exact path="/part2/chapter17">
        <Chapter17/>
      </Route>
      <Route exact path="/part2/chapter18">
        <Chapter18/>
      </Route>
      <Route exact path="/part2/chapter19">
        <Chapter19/>
      </Route>
      <Route exact path="/part2/chapter20">
        <Chapter20/>
      </Route>
      <Route exact path="/part2/chapter21">
        <Chapter21/>
      </Route>
      <Route exact path="/part2/chapter22">
        <Chapter22/>
      </Route>

      <Route exact path="/part3/chapter23">
        <Chapter23/>
      </Route>
      <Route exact path="/part3/chapter24">
        <Chapter24/>
      </Route>
      <Route exact path="/part3/chapter25">
        <Chapter25/>
      </Route>
      <Route exact path="/part3/chapter26">
        <Chapter26/>
      </Route>
      <Route exact path="/part3/chapter27">
        <Chapter27/>
      </Route>
      <Route exact path="/part3/chapter28">
        <Chapter28/>
      </Route>
      <Route exact path="/part3/chapter29">
        <Chapter29/>
      </Route>



    </div>
    </Router>
  );
}

export default App;

import React from "react";
import { Container, Row, Col } from "react-grid-system";
import "../App.css";
import { Link } from 'react-router-dom';

export default function Part1() {
  return (
    <div className="App">

      <Container>
        <header className="App-header">
          <Col sm={12}>
            <h2 className="explorehead">Part 1</h2>
            <p className="p-manifesto" style={{textAlign: 'center'}}><i>Part 1 tells the story of Ryan, his family and a few key people in his life.</i></p>
          </Col>
          <Row>
          <Col sm={2} className="nomobile"></Col>
          <Col sm={3}>


          <p><Link to="/intro" className="roundedcorner">Back to Novel Intro</Link></p>
          </Col>
          <Col sm={3}></Col>
          <Col sm={3}>

          <p><Link to="/part1/chapter1" className="roundedcorner">Go To Chapter 1</Link></p>
          </Col>
          <Col sm={2}></Col>
          </Row>
        </header>
      </Container>
    </div>
  );
}

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
          </Col>
          <Row>
            <Col sm={2}></Col>
            <Col sm={8}>
              <p className="p-manifesto">
                <i>Part 1 tells the story of Ryan, his family and a few key people in his life. </i>
                <br/>
             
             <br/>
             <Link to="/part1/chapter1" className="roundedcorner">Chapter 1</Link>
              </p>
            </Col>
            <Col sm={2}></Col>
          </Row>
          
        </header>
      </Container>
    </div>
  );
}

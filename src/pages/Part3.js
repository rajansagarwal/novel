import React from "react";
import { Container, Row, Col } from "react-grid-system";
import "../App.css";
import { Link } from 'react-router-dom';

export default function Part3() {
  return (
    <div className="App" style={{overflow: 'hidden'}}>

      <Container>
        <header className="App-header">
          <Col sm={12}>
            <h2 className="explorehead">Part 3</h2>
            <p className="p-manifesto" style={{textAlign: 'center'}}><i>Time flies, and his story returns after receiving his law degree. This is a new step in his life, and Ryan is ready to make change.</i></p>
          </Col>
          <Row>
          <Col sm={2} className="nomobile"></Col>
          <Col sm={3}>


          <p><Link to="/part2/chapter22" className="roundedcorner">Back to Chapter 22</Link></p>
          </Col>
          <Col sm={3}></Col>
          <Col sm={3}>

          <p><Link to="/part3/chapter23" className="roundedcorner">Go To Chapter 23</Link></p>
          </Col>
          <Col sm={2}></Col>
          </Row>
          
        </header>
      </Container>
    </div>
  );
}

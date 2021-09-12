import React from "react";
import { Container, Row, Col } from "react-grid-system";
import "../App.css";
import { Link } from 'react-router-dom';

export default function Part2() {
  return (
    <div className="App" style={{overflow: 'hidden'}}>

      <Container>
        <header className="App-header">
          <Col sm={12}>
            <h2 className="explorehead">Part 2</h2>
          </Col>
          <Row>
            <Col sm={2}></Col>
            <Col sm={8}>
              <p className="p-manifesto">
                <i>With this newfound knowledge, Ryan makes friends and makes a difference at his high school.</i>
                <br/>
             
             <br/>
             <Link to="/part2/chapter10" className="roundedcorner">Go to Part 2</Link>
              </p>
            </Col>
            <Col sm={2}></Col>
          </Row>
          
        </header>
      </Container>
    </div>
  );
}

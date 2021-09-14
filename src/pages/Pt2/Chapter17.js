import React from "react";
import { Container, Row, Col } from "react-grid-system";
import "./components.css";
import { Link } from 'react-router-dom';

export default function Chapter17() {
  return (
    <div className="App">

      <Container>
        <header className="App-header">
          <Col sm={12}>
            <h2 className="explorehead">Amelia Anderson</h2>
          </Col>
          <Row>
          <Col sm={2} className="nomobile"></Col>
          <Col sm={3}>


          <p><Link to="/part2/chapter16" className="roundedcorner">Back to Chapter 16</Link></p>
          </Col>
          <Col sm={3}></Col>
          <Col sm={3}>

          <p><Link to="/part2/chapter18" className="roundedcorner">Go To Chapter 18</Link></p>
          </Col>
          <Col sm={2} className="nomobile"></Col>
          </Row>
          <Row>
            <Col sm={2}></Col>
            <Col sm={8}>
              <p className="p-manifesto">
                  <i>
              In the vast darkness of the night<br/>
Who prevails is the strongest knight<br/>
Who's sorrows become strength<br/>
Who's possibilities find infinite length<br/><br/>

Strong, fast and brave on the inside<br/>
Awaiting for his spirit to take on<br/>
He tries so hard, but he remains lonely<br/>
His journey continues to go on<br/><br/>

The armour of life pushes him down<br/>
He doesn't know what to do<br/>
He faced drawbacks throughout his life<br/>
Until he met someone new



</i>

             
              </p>
            </Col>
            <Col sm={2}></Col>
          </Row>
          
          <br/><br/>
          
        </header>
      </Container>
    </div>
  );
}

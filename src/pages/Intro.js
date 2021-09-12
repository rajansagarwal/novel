import React from "react";
import { Container, Row, Col } from "react-grid-system";
import "../App.css";
import { Link } from 'react-router-dom';

export default function Intro() {
  return (
    <div className="App">

      <Container>
        <header className="App-header">
          <Col sm={12}>
            <h2 className="explorehead">Novel Introduction</h2>
          </Col>
          <Row>
            <Col sm={2}></Col>
            <Col sm={8}>
              <p className="p-manifesto">
              This novel is classified as fiction. The characters and events in the novel are not meant to be taken as depicted.<br/><br/> © Rajan Agarwal 2021, All Rights Reserved
                <br/><br/>
                <Link to="/part1" className="roundedcorner">Go ToPart 1</Link><br/>
             <br/>
             My name is Rajan Agarwal. I am a 16 year old in Ontario interested in social change. When writing this novel, I found inspiration and support from a wide variety of sources. Writing a novel is not as scary as the tales depict it to be, but it requires imagination and determination. In my spare time, you will either find me preparing a speech, writing code vigorously or working on a side project that I will over-promote for no reason!<br/><br/>
             
             The inspiration behind the novel revolves around awareness. Autism is not a small issue, as a matter of fact, it is one of the most prominent disorders on our planet. When I was younger, I was never truly taught about the impact and root of autism - when someone tried to teach it, opinions and stereotypes flooded the room, which unjustified the importance of this topic. My intentions with this novel were to subtly, yet impactfully mention and describe the cause and impact on Autism, and how <b>it's not a disability, but rather a different ability.</b><br/><br/>

              </p>
            </Col>
            <Col sm={2}></Col>
          </Row>
          
        </header>
      </Container>
    </div>
  );
}

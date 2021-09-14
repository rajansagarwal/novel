import React from "react";
import { Container, Row, Col } from "react-grid-system";
import "./components.css";
import { Link } from 'react-router-dom';

export default function Chapter16() {
  return (
    <div className="App">

      <Container>
        <header className="App-header">
          <Col sm={12}>
            <h2 className="explorehead">Ryan Williams</h2>
          </Col>
          <Row>
          <Col sm={2} className="nomobile"></Col>
          <Col sm={3}>


          <p><Link to="/part2/chapter15" className="roundedcorner">Back to Chapter 15</Link></p>
          </Col>
          <Col sm={3}></Col>
          <Col sm={3}>

          <p><Link to="/part2/chapter17" className="roundedcorner">Go To Chapter 17</Link></p>
          </Col>
          <Col sm={2} className="nomobile"></Col>
          </Row>
          <Row>
            <Col sm={2}></Col>
            <Col sm={8}>
              <p className="p-manifesto">
              I'm not sure what to take from that. Amelia is really nice, but why did she suddenly come and approach me? Did her parents tell her to do something?<br/><br/>
    Anyways, the next day, the same thing happened. She stayed with her friends for about 20-30 minutes, and as soon as they left, she came to sit with me. Every day, it was the same, "Hey Ryan!" with the same upbeat high-pitch voice.<br/><br/>
    At first, I thought it was just her trying to be nice, but it happened every day. One thing I like to do is analyze data and, well, find patterns. Looking at what happens here, I would definitely say that her friends don't want to see her here. Looks like I'm officially a commodity.<br/><br/>
    Eventually, it's Monday, which means I have to make my decision. But first, I need to talk with Amelia and see what's going on.<br/>
    "Hey Ryan"<br/>
I stare at her for a while and then finally decide how to phrase it.<br/>
    "I noticed that you only come over here as soon as your friends leave."<br/>
    "Oh yeah.. nothing too crazy."<br/>
    "Do you not want them to know that you sit with me?"<br/>
    "Why would you say that?"<br/>
    "It just feels like you're embarrassed to sit with me."<br/>
    "If I was so embarrassed, why would I sit with you in the most filled room in the entire school. Look around, look at how many people are here!"<br/>
    "Wow… ok, I guess you are fine then."<br/>
    "I'm glad you approve."<br/><br/>
Well, that was not nice… but at least she isn't using me. I think I'm going to keep on trying out school. I mean, the workload is fine, and I guess I have a friend now. If I got one this quickly, then who knows how many I'll get by the end of the year! <br/>
    "I'm sorry. I'm just paranoid."<br/>
    "Don't be sorry. You had every right to wonder."<br/>
    "Thanks"    <br/>
    "So I'll see you tomorrow? Math class? Or are you going to be leaving?"<br/>
    "You know what? I think I'm going to try this out.”<br/><br/>

Amelia is amazing.




             
              </p>
            </Col>
            <Col sm={2}></Col>
          </Row>
          <Row>
          <Col sm={2} className="nomobile"></Col>
          <Col sm={3}>


          <p><Link to="/part2/chapter15" className="roundedcorner">Back to Chapter 15</Link></p>
          </Col>
          <Col sm={3}></Col>
          <Col sm={3}>

          <p><Link to="/part2/chapter17" className="roundedcorner">Go To Chapter 17</Link></p>
          </Col>
          <Col sm={2} className="nomobile"></Col>
          </Row>
          <br/><br/>
          
        </header>
      </Container>
    </div>
  );
}

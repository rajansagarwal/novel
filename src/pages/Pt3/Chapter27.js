import React from "react";
import { Container, Row, Col } from "react-grid-system";
import "./components.css";
import { Link } from 'react-router-dom';

export default function Chapter27() {
  return (
    <div className="App">

      <Container>
        <header className="App-header">
          <Col sm={12}>
            <h2 className="explorehead">Andrew Nguyen</h2>
          </Col>
          <Row>
          <Col sm={2} className="nomobile"></Col>
          <Col sm={3}>


          <p><Link to="/part3/chapter26" className="roundedcorner">Back to Chapter 26</Link></p>
          </Col>
          <Col sm={3}></Col>
          <Col sm={3}>

          <p><Link to="/part3/chapter28" className="roundedcorner">Go To Chapter 28</Link></p>
          </Col>
          <Col sm={2} className="nomobile"></Col>
          </Row>
          <Row>
            <Col sm={2}></Col>
            <Col sm={8}>
              <p className="p-manifesto">
              It’s been a while since I’ve spoken to Ryan. I mean, we have the occasional interaction in the office, but ever since I’ve been getting quite a few cases, he has been a bit distant. However, this all changed once I received a bit of news.<br/><br/>
    “Andrew, how are you?”<br/>
    “Doing just fine, Mr. Johansen. Yourself?”<br/>
    “Just great. Do you know why I called you in here?”<br/>
    “No, sir.”<br/>
    “It’s because I want you to do a case except for this time a little differently.”<br/>
    “Did I do something wrong last time?”<br/>
    “No, of course not. I want you to do a case with Ryan. The two of you will lead the case together, and then you can pick who represents the defendant in the end.”<br/>
    “Thank you for the opportunity. Are you sure he needs my assistance?”<br/><br/>
After saying this, his face changes from relaxed to more of a tense mood. <br/>
    “You and I both know that he shouldn’t take his first case by himself.”<br/>
    “Why can’t he? How is he different from either of us?”<br/>
    “Well,” after a deep pause, he recollects his thoughts and tries to avoid the situation, “never mind, don’t worry.”<br/>
    “No. Continue”<br/>
    “Think about it this way. Ryan is going to do a case, and you are going to help him.”<br/>
    “Alright, we can make that work then.”<br/>
    “Excellent. I’ll email you all the details of the case. Just head back to your desk, and it will all be there.”<br/>
    “Thank you.”<br/><br/>
As I return to my desk, I download all the files and start analyzing the case. As I turn to my left, however, I notice Ryan just standing there. <br/>
    “Hi, Ryan. I just got the details for the case.”<br/>
    “Hello. So did I.”<br/>
    “You ready?”<br/>
    “Very. Except for one part… the defendant doesn’t deserve to win.”<br/>
    “What? You just got the details of the case.”<br/>
    “Well, he doesn’t deserve it, so how can I be his lawyer?”<br/>
    “Ryan. Sit down”<br/><br/>
He brings his chair over and sits right next to me.<br/>
    “I haven’t read the case, but what I do know is that our job is to be a good lawyer. It doesn’t matter whether the person is guilty or not. You need to prove to the world that he is not guilty, no matter the scenario.”<br/>
    “But it doesn’t feel right.”<br/>
    “When you become a lawyer, this is what you have to do. Taking risks and advocating for those who need a lawyer during times of despair. The justice system needs two sides; we are one of them that defends those who need defending. You signed up for this, and now you need to do what is right. Got it?”<br/>
    After a simple nod, we head right on to work. Left and right, we throw ideas off of each other and prepare for the worst. Well, that probably wasn’t the best way of saying that, but the phrase means that we are getting ready for everything. In Ryan’s words: We need to be ready for every single possibility. <br/><br/>
    
Considering these words, we brought up every single argument. We took this to the point where we pretended to be the Government and argued this side of the case. Roleplay like this or pure preparation, we finally knew that we were ready. We finally accomplished that feeling where you could hear motivational music playing in the background like in the movies. To be completely honest, that is a very good feeling.<br/><br/>

    It has been 2 months, and what we know is astonishing. We have everything prepared, and there is no way the Government will be able to beat us. In the case, there was a 27-year-old man accused of theft. It was a jewelry store just around the corner where we work, and he broke in with a hammer. Even though he didn’t admit to anything, we know he did it, but there are so many facts that show that he may not have. He has a legitimate alibi that he could use, we have relatives as witnesses, and there was nothing in the case to indicate that he was there. He was only caught after the store owner recalled a man's face with a mask on, which we find to be both impressive and odd. <br/><br/>
    The only thing that they can use is his criminal record, which from my experience, judges love. However, we have a pretty strong argument that we’ve been working on for a while if and when that comes up. Things are really going to go well. <br/><br/>

He barely used my help; it was all him. 
      
              </p>
            </Col>
            <Col sm={2}></Col>
          </Row>
          <Row>
          <Col sm={2} className="nomobile"></Col>
          <Col sm={3}>


          <p><Link to="/part3/chapter26" className="roundedcorner">Back to Chapter 26</Link></p>
          </Col>
          <Col sm={3}></Col>
          <Col sm={3}>

          <p><Link to="/part3/chapter28" className="roundedcorner">Go To Chapter 28</Link></p>
          </Col>
          <Col sm={2} className="nomobile"></Col>
          </Row>
          <br/><br/>
          
        </header>
      </Container>
    </div>
  );
}

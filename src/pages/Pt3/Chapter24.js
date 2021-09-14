import React from "react";
import { Container, Row, Col } from "react-grid-system";
import "./components.css";
import { Link } from 'react-router-dom';

export default function Chapter24() {
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


          <p><Link to="/part3/chapter23" className="roundedcorner">Back to Chapter 23</Link></p>
          </Col>
          <Col sm={3}></Col>
          <Col sm={3}>

          <p><Link to="/part3/chapter25" className="roundedcorner">Go To Chapter 25</Link></p>
          </Col>
          <Col sm={2} className="nomobile"></Col>
          </Row>
          <Row>
            <Col sm={2}></Col>
            <Col sm={8}>
              <p className="p-manifesto">
              It’s my second week here, and we have gotten nothing to do. They call it analyzing previous cases' works, but it’s literally doing the paperwork for higher-ranked lawyers. I think this is just their way of convincing us it's an inspiring experience to enhance our learning, but it’s obviously not. <br/><br/>
    Today, however, I was beyond surprised to see Ryan. I mean, Mr. Johansen told me that a challenged person would be coming in, but I honestly knew nothing about him. He wanted us to make him feel welcome, but his stern voice made his feelings sound forced. Anyways, I’m glad I met Ryan because he seems like a nice person (or at least not how Mr. Johansen portrayed him.<br/><br/> 
    I don’t understand the big fuss about having someone different in an office. He is passionate about the law and has skills, so wouldn’t he fit right in? I have a cousin who is autistic, however not very functional. He struggles daily to thrive, and so everyone doubts him continuously. Whenever we go out in public together, we have so much fun, but why do they stare so much? They look, then look away, then look again and finally stare in a straight whisper to one another. It disgusts me.<br/><br/>
    I guess I just appreciate Ryan, given my past. My cousin never got to experience anything remotely close to this, so I guess I feel proud.<br/>
    “So, Ryan. What made you interested in law?”<br/>
Just as I ask this question, it feels like he remembers everything from his past and what lead up to this moment.<br/>
    “Opportunity and speaking.”<br/>
    “I love that answer… with myself. It was mostly my parent’s influence. I didn’t want to go to medical school, so they said the law would be the most suitable alternative. I don’t hate it, but pursuing my dream would have been better."<br/>
    “What is your dream?”<br/>
    “Music. All instruments. It just feels right, you know?”<br/>
    “Well, I don’t know. But I think if you like it, you should go after this. That’s what I was taught”<br/>
    “Well, is there something else you’re passionate about?”<br/>
    “No. I want to be a lawyer.”<br/>
    “Well, I’m glad you are doing what you enjoy.”<br/><br/>
As I continue with my work, I repetitively read through the same cases trying to find inspiration, but it’s all the same. I just flip through pages, write some stuff and then enter the information into the database. I’m desperately waiting for something interesting. <br/>
    After about 3 hours, I finish the first set of things to do and look at the time. 11:56. <br/>
    “Hey Ryan, you want to get lunch?”<br/>
    “It’s ok I packed lunch.”<br/>
    “You sure? You can just bring it and eat there.”<br/>
    “Ok”<br/><br/>
As we head on over, I notice that he seems less confident. Something has changed.<br/>
    “So, how do you like your first day?”<br/>
“It's ok. I was hoping for more, but as you said, it’s a long process. I’m willing to wait. I don’t want to let anything get in the way.”<br/><br/>
    Saying that put a smile on my face. <br/>
“That is so nice to hear. So where are you from?”<br/>
    “Ottawa”<br/>
    “Yes, of course, Ottawa, but where in Ottawa?”<br/>
    “Near the parliament.”<br/>
    “Oh really! I’m from New York but decided to come to Canada to get a job. You can’t go wrong with travelling”. I let out a little chuckle to help him be more relaxed<br/>
    I’m glad that I’ve gotten to know Ryan. He has lots of potential and passion. Plus, he is brilliant, based on what Mr. Johansen said. <br/><br/>

He may revolutionize this profession, and I want to be there to watch him thrive. 
    





             
              </p>
            </Col>
            <Col sm={2}></Col>
          </Row>
          <Row>
          <Col sm={2} className="nomobile"></Col>
          <Col sm={3}>


          <p><Link to="/part3/chapter23" className="roundedcorner">Back to Chapter 23</Link></p>
          </Col>
          <Col sm={3}></Col>
          <Col sm={3}>

          <p><Link to="/part3/chapter25" className="roundedcorner">Go To Chapter 25</Link></p>
          </Col>
          <Col sm={2} className="nomobile"></Col>
          </Row>
          <br/><br/>
          
        </header>
      </Container>
    </div>
  );
}

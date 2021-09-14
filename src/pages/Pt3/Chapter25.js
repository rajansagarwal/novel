import React from "react";
import { Container, Row, Col } from "react-grid-system";
import "./components.css";
import { Link } from 'react-router-dom';

export default function Chapter25() {
  return (
    <div className="App">

      <Container>
        <header className="App-header">
          <Col sm={12}>
            <h2 className="explorehead">August Johansen</h2>
          </Col>
          <Row>
          <Col sm={2} className="nomobile"></Col>
          <Col sm={3}>


          <p><Link to="/part3/chapter24" className="roundedcorner">Back to Chapter 24</Link></p>
          </Col>
          <Col sm={3}></Col>
          <Col sm={3}>

          <p><Link to="/part3/chapter26" className="roundedcorner">Go To Chapter 26</Link></p>
          </Col>
          <Col sm={2} className="nomobile"></Col>
          </Row>
          <Row>
            <Col sm={2}></Col>
            <Col sm={8}>
              <p className="p-manifesto">
              Ryan has been here for a few days now, and I’m not really sure I want to give him a case any time soon. You see, we got some bad PR last week, and I realized that we needed to make some changes. There was one time where I saw the headline: Johansen Professional Group Reported To Hire Only White Employees. Like seriously? Since then, it has been my utmost objective to hire a more diverse set of employees. I hired Dalya (an African American woman), Andrew (a Vietnamese man), and then I noticed Ryan, who is autistic. I really think that one would stand out and really add to the diversity of the firm. I’m going to publish something soon to get the word out because I need to stop any more bad press. <br/><br/>
    Here’s the thing, though. I’m not sure if Ryan is right for this firm. He has the skills, but if things go south, I don’t want to be responsible. He said he has Asperger’s, which means he should be functional enough to spend 8 years in university. But still, he’s autistic, which means he can’t do what a normal person can do. During the interview to get the position, he wouldn’t stop stuttering… and the long pauses were unbearable. But I just had to hire him to push the publicity over the edge.<br/><br/>
    I’m just not so sure how he will be in court. Like a desk job would probably be more suitable, don’t you think? But as long as he keeps it on the low and does his job well, I think it will be alright. To my surprise, however, I see Ryan come into my office.<br/><br/>
    “Hi Mr. Johansen”<br/>
    “Hi, Ryan. How have the past few days been?”<br/>
    “Fine. I made a friend.”<br/>
    “That’s amazing! Who?”<br/>
    “Andrew. We went to lunch together and talked a lot”<br/>
    “Well, that’s great.”<br/><br/>
So he came to my office to tell me about Andrew. That feels beyond unnecessary. <br/>
    “So, how can I help you?”<br/>
    “I want to do more.”<br/>
    “But it’s only been 3 days. You need to adapt first.”<br/>
    “I have adapted. I read everything. I don’t think I’m ready for a case yet, but I’m ready to do more.”<br/>
    “Hmm. Let’s see, perhaps you can sit in on a case. I’ll have you go and shadow one of our lawyers for the experience. How does that sound?”<br/>
    “That sounds amazing, thank you.”    <br/>
    “However, if you really want to, then I’m going to need you to do some more independent learning. You aren’t ready for that, but I’m confident that in about a month, this will all happen. Are you in?”<br/>
    “Yes. Thank you”<br/>
    “And Ryan, before you go, tell me,”<br/>
He simply nods and tries to hide his excitement.<br/>
    "How confident are you in yourself?”<br/><br/>
    “I don’t understand.”<br/>
    “Do you think that you will be able to actually manage a case?”<br/>
I don’t think he knows what I’m trying to imply.<br/>
    “Are you saying that because I have Asperger’s, I can’t do a case?”<br/>
    “No, no, no, I’m just asking how you feel.”<br/>
    “If it’s up to me, then I would say without a doubt.”<br/>
    “Well, then that is great. You can see yourself out now.”<br/>
As he heads out, it feels like he is way too overconfident. My google search said that people with Aspergers would figure out cases quicker, so I guess this could help me. We have to wait and see now. See what is going to happen. <br/><br/>

Will society’s expectations trample on his goals, or will the underdog find himself triumphant?

    





             
              </p>
            </Col>
            <Col sm={2}></Col>
          </Row>
          <Row>
          <Col sm={2} className="nomobile"></Col>
          <Col sm={3}>


          <p><Link to="/part3/chapter24" className="roundedcorner">Back to Chapter 24</Link></p>
          </Col>
          <Col sm={3}></Col>
          <Col sm={3}>

          <p><Link to="/part3/chapter26" className="roundedcorner">Go To Chapter 26</Link></p>
          </Col>
          <Col sm={2} className="nomobile"></Col>
          </Row>
          <br/><br/>
          
        </header>
      </Container>
    </div>
  );
}

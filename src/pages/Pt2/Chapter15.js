import React from "react";
import { Container, Row, Col } from "react-grid-system";
import "./components.css";
import { Link } from 'react-router-dom';

export default function Chapter15() {
  return (
    <div className="App">

      <Container>
        <header className="App-header">
          <Col sm={12}>
            <h2 className="explorehead">Mr. Garcia</h2>
          </Col>
          <Row>
          <Col sm={2} className="nomobile"></Col>
          <Col sm={3}>


          <p><Link to="/part2/chapter14" className="roundedcorner">Back to Chapter 14</Link></p>
          </Col>
          <Col sm={3}></Col>
          <Col sm={3}>

          <p><Link to="/part2/chapter16" className="roundedcorner">Go To Chapter 16</Link></p>
          </Col>
          <Col sm={2} className="nomobile"></Col>
          </Row>
          <Row>
            <Col sm={2}></Col>
            <Col sm={8}>
              <p className="p-manifesto">
              To be completely honest, I like the first day of school. After I spend a few weeks working on the course content, this is my day to get everything together and rest.
    I am a political science and history teacher at the school, which means I have three classes per day… and might say this is a lot of marking. However, the students are really nice and hard working.<br/><br/>
    A couple of weeks before the first day, however, I was informed that a kid named Ryan, who had autism, would be in my class. This is what I don't understand. The quality of education has come down so low that a kid that can't even speak has to be in my class. Like who was in charge of this decision? 
    After my first two classes, I head on over to the teacher's lounge. I don't have duty today, so that means I can actually take a chill pill. Not many people are in the teacher's lounge, but I want to start up some conversation.<br/><br/>
    "So did y'all hear about that autistic kid coming into the program?"<br/>
That immediately caught Ms. Patterson's attention… and her tone was not pleasing whatsoever.<br/>
    "What do you mean?"<br/>
    "If he can't keep up with the class, why should he be here?"<br/>
    "Have you had a class with him yet?"<br/>
    "Well, not yet, but I know what I need to know."<br/><br/>
Ok. It's official. She is mad.<br/>
    "Well, you shouldn't base your opinions on misinformation, or whatever goes on up there."<br/><br/>
That's it. Too far. <br/>
    "So tell me, how is he in your class?"<br/>
    "He is a delight. A bit shy, but who isn't?"<br/>
    "So he doesn't act like a normal student?"<br/>
    "I never said that. He is brilliant and eager to learn. You will see in the last period."<br/>
    "I highly doubt that"<br/><br/>
Now, she brings in her irate voice.<br/>
    "You know what, if you've got a problem, you can take it up with Ms. Stark. I'm done with dealing with people like you!"<br/>
    "Are you talking about my race?"<br/>
    "Obviously not. You very clearly know what I mean. Now, if you wouldn't mind, I would like to have a peaceful, discriminatory-less lunch."<br/>
Well, that was odd and violent. I guess not everyone has the same opinion. <br/><br/>

I'll just have to see for myself.



             
              </p>
            </Col>
            <Col sm={2}></Col>
          </Row>
          <Row>
          <Col sm={2} className="nomobile"></Col>
          <Col sm={3}>


          <p><Link to="/part2/chapter14" className="roundedcorner">Back to Chapter 14</Link></p>
          </Col>
          <Col sm={3}></Col>
          <Col sm={3}>

          <p><Link to="/part2/chapter16" className="roundedcorner">Go To Chapter 16</Link></p>
          </Col>
          <Col sm={2} className="nomobile"></Col>
          </Row>
          <br/><br/>
          
        </header>
      </Container>
    </div>
  );
}

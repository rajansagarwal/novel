import React from "react";
import { Container, Row, Col } from "react-grid-system";
import "./components.css";
import { Link } from 'react-router-dom';

export default function Chapter6() {
  return (
    <div className="App">

      <Container>
        <header className="App-header">
          <Col sm={12}>
            <h2 className="explorehead">Paul Williams</h2>
          </Col>
          <Row>
          <Col sm={2} className="nomobile"></Col>
          <Col sm={3}>


          <p><Link to="/part1/chapter5" className="roundedcorner">Back to Chapter 5</Link></p>
          </Col>
          <Col sm={3}></Col>
          <Col sm={3}>

          <p><Link to="/part1/chapter7" className="roundedcorner">Go To Chapter 7</Link></p>
          </Col>
          <Col sm={2}></Col>
          </Row>
          <Row>
            <Col sm={2}></Col>
            <Col sm={8}>
              <p className="p-manifesto">
              What was that? I've been in many meetings in my life, and every time I have a pretty good idea of what I'm getting into. I don't want to sound like a mean father, but I don't want him to do this. I just don't know if he's ready. 
I hear Ryan close the door behind me and look directly at Ms. Stark. <br/><br/>
"What were you thinking?"<br/>
"Excuse me?"<br/>
"Ryan is a young, autistic boy. He won't be able to handle it."<br/>
"His teachers were very impressed with him this year. He is highly functional and will be fine."<br/>
"Maybe he will, maybe he won't. But it just doesn't make sense for you to bring this to him so suddenly."<br/>
"As you can see by his reaction, he is perfectly fine. In fact, he seems excited."<br/>
She is right. This is probably the first time I've ever seen him excited for something. Could this be good for him?<br/>
"That still doesn't matter. What if something happens, like he has a meltdown. Or if he can't make any friends?"<br/><br/>
"We have spoken to a few students, and they are willing to spend some time with him to acclimate him to the mainstream."<br/>
"You have random students to become fake friends?"<br/>
"It's not like that"<br/>
What was she thinking? How could she do that to my son!?<br/>
"Then what is it like!?"<br/><br/>
She takes a deep breath and then looks at the door.<br/>
"You saw your son's reaction. You know how much this will mean to him. He's ready."<br/>
Now that I think of it, he might be. He loved his chemistry classes, and he's been good at home. <br/>
"You know what, we can try it out."<br/>
"That's amazing to hear."<br/>
"I'm going to talk to Ryan, see if we can sort this out."<br/>
A subtle smile appears on her face.<br/>
"I'm glad to hear. I'm quite sure the papers will love to write about him."<br/>
"Excuse me?"<br/><br/>
"Well, I think people would want to read about him. A child with Asperger's going into the mainstream program will change the way society sees autism!"<br/><br/>
    She sounds optimistic, but I sense my voice getting angrier and angrier. <br/>
"Let me get this right. You are using my son for the little publicity stunt you have going on?"<br/>
"Of course not!"<br/>
"You know what!? I was considering this. But now, I know the truth. That's it; I'm leaving."<br/>
"Mr. Williams- wait!"<br/>
I quickly grab my jacket and hat and storm out of the office.<br/>
"Ryan, we're leaving."<br/>
"But-"<br/><br/>


"We're. Going."


<br/>
             <br/>
             
              </p>
            </Col>
            <Col sm={2}></Col>
          </Row>
          <Row>
          <Col sm={2}></Col>
          <Col sm={3}>


          <p><Link to="/part1/chapter5" className="roundedcorner">Back to Chapter 5</Link></p>
          </Col>
          <Col sm={3}></Col>
          <Col sm={3}>

          <p><Link to="/part1/chapter7" className="roundedcorner">Go To Chapter 7</Link></p>
          </Col>
          <Col sm={2}></Col>
          </Row>
          <br/><br/>
          
        </header>
      </Container>
    </div>
  );
}

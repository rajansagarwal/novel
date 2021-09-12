import React from "react";
import { Container, Row, Col } from "react-grid-system";
import "./components.css";
import { Link } from 'react-router-dom';

export default function Chapter9() {
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


          <p><Link to="/part1/chapter8" className="roundedcorner">Back to Chapter 8</Link></p>
          </Col>
          <Col sm={3}></Col>
          <Col sm={3}>

          <p><Link to="/part2" className="roundedcorner">Go To Part 2</Link></p>
          </Col>
          <Col sm={2}></Col>
          </Row>
          <Row>
            <Col sm={2}></Col>
            <Col sm={8}>
              <p className="p-manifesto">
              I feel like the worst father ever. I should never have done any of these things without asking first. It is my life, though. At the moment, things are at an all-time low. I've got a 12-year-old boy new to the world chasing after a 17-year-old autistic child in the scary streets. I have to go after them. <br/><br/>
I grab my phone and shoes and quickly head out the door. I have no idea where I'm going, so I quickly run left and look around. He would probably lead to where there are more people, right? Think Paul. What would Bobby do? If I can find Bobby first, we can probably get a better idea of where Ryan is. <br/><br/>
I start running down to the main road. I'm probably too late. I find myself at the intersection of the incident. I take a seat on the bench, the very left one, and stare out to the road. One tear, following the next, building up pain and regret. My life is over. I feel like running onto the road in the head-on traffic, but something is holding me back—some random sense of safety. I close my eyes, face down to the sidewalk with tears running faster than a cheetah chasing its prey. I ask myself the burning question of life: <br/><br/>Why?<br/><br/>
Not running onto the road was the best decision of my life, considering what would happen next. After about 30 minutes of sitting and waiting, I thought it was all over. Then, to my surprise, I hear a voice next to me, filling my heart with joy. The smile on my face is one to remember.<br/><br/>
"Dad?"<br/>
It was Bobby! <br/>
"Bobby! Ryan! Oh my!"<br/><br/>
Without hesitation, I run towards him and hug both of them tightly.<br/><br/>
"Don't ever do that again. You don't understand how worried I was"<br/>
"Sorry. I knew where Ryan would be, so I had to come before he would leave quickly."<br/>
"Where was he?"<br/>
"In this exact intersection. Sitting on the bench, in that exact seat."<br/>
"Actually?"<br/>
That's where I was sitting...<br/><br/>
"How did you know?"<br/>
"He knows his way around town, but this would be the only place that he remembers clearly, and he wouldn't risk going someplace else, no matter how mad he was"<br/>
"Bobby, thank you so much."<br/><br/>
Tears keep flowing, and he hugs me tightly back.<br/><br/>
"Come on, let's go back home."<br/>
As we arrive at our apartment, we all sit on the couch together.<br/>
"I'm sorry, guys. I really am. Please don't ever do that again. I thought my life was over. I couldn't risk losing all three of you, especially after the incident."<br/>
"I understand, dad"<br/><br/>
Ryan just looks over to me and nods.<br/>
"And Ryan, so that you know. I'll call the woman and tell her that this won't work out."<br/>
"No, dad. It's okay. We can sort things out later. I'm glad to be home."<br/>
"Really? Thank you so much. You don't know what this means to me."<br/>
"Change can be good."<br/>
I start crying again as I hug them more and more. Dumpling jumps onto the couch as well and joins in with the joy.<br/>
"I promise I'm going to be better. Tell me anything, and I'll make sure to do it. This made me realize; we only live once. Something could have happened to you both, and I'm not sure what I would have done."<br/>
"You don't need to do anything. You're perfect. Right, Ryan?"<br/><br/>
He nods and adds a subtle smile to his face.<br/>
"I love you, Ryan. I love you, Bobby."<br/>
"I love you, Dad," says Bobby. <br/>
Then, to my surprise, Ryan says something for the first time in his life. He has never said this to me before.<br/><br/>
"I love you"<br/><br/>
I start smiling and crying all over again. I quickly get up and head towards the computer.<br/>
"Dad, where are you going?"<br/>
"Well, I want to get started on planning for Ryan's first day in September."<br/>
"You really mean it?"<br/>
"Ryan. Today has taught me that it's important to do what's right. You are going to thrive in anything you do, and this is something you are passionate about. What do you say?"<br/>
"Yes!"<br/><br/>

"That high school doesn't know what's coming."










<br/>
             <br/>
             
              </p>
            </Col>
            <Col sm={2}></Col>
          </Row>
          <Row>
          <Col sm={2}></Col>
          <Col sm={3}>


          <p><Link to="/part1/chapter8" className="roundedcorner">Back to Chapter 8</Link></p>
          </Col>
          <Col sm={3}></Col>
          <Col sm={3}>

          <p><Link to="/part2" className="roundedcorner">Go To Part 2</Link></p>
          </Col>
          <Col sm={2}></Col>
          </Row>
          <br/><br/>
          
        </header>
      </Container>
    </div>
  );
}

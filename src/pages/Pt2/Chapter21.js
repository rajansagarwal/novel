import React from "react";
import { Container, Row, Col } from "react-grid-system";
import "./components.css";
import { Link } from 'react-router-dom';

export default function Chapter21() {
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


          <p><Link to="/part2/chapter20" className="roundedcorner">Back to Chapter 20</Link></p>
          </Col>
          <Col sm={3}></Col>
          <Col sm={3}>

          <p><Link to="/part2/chapter22" className="roundedcorner">Go To Chapter 22</Link></p>
          </Col>
          <Col sm={2} className="nomobile"></Col>
          </Row>
          <Row>
            <Col sm={2}></Col>
            <Col sm={8}>
              <p className="p-manifesto">
              It's raining outside. I know there's no way my mood can change the weather, but I think Mother Earth knows that I'm bored. Studies show that halfway through a semester is the worst time possible. Well, there isn't actually a study… I'm just saying this based on experience. It's too early to get into anything interesting but too late to be hopeful of the end. 
    However, I am glad that today we are going to be having our first debate. Rather than teaching the lessons or having discussions, I can now see the students' capabilities and determine who has potential. <br/><br/>
    As the students start piling in, I organize the preparation sheets for their preparation. Consisting of an introduction, three key points, a conclusion and a rebuttal, I think this will help organize their thoughts. I place one on each desk and await their interest. After attendance and daily announcements finish, I reveal to them today's agenda. 
    "So you may be wondering what is on your desk. Don't worry; it's not a pop quiz. But go ahead and turn them over."<br/><br/>
    The loud noise of students vigorously flipping through pages is a bit annoying. However, their surprise and curiosity make up for it.
    "Today, we will be doing some debates! We've had many lessons and discussions, so I thought that this might be a good treat. The plan is that we have a few topics, and then people go against each other to compete on their topic. I have printed out a list of topics for you all, so please browse through them. When you are ready, please just come to my desk, and I will assign you the question and which side. Have fun!"<br/><br/>
    Immediately, a group of students, Ryan included, head to my desk eager to talk. <br/><br/>
    "Hi Mr. Garcia"<br/>
    "Hi, David. So, what topic do you want to do?"<br/>
    "The one about climate change, number 8."<br/>
    "Alright. And proposition or against?"<br/>
    "Proposition please"<br/>
    "Alright, next"<br/><br/>
A repeat of that is basically what happened for about 5 or 6 students. But then, finally, it was Ryan's turn. I guess you could say I'm interested in seeing which topic he picks.<br/>
    "Hey, Ryan. What's the topic going to be for you?"<br/>
    "Number 3."<br/>
    "Proposition or opposition?"<br/>
    "Opposition"<br/>
Wait, why did he choose the one about legal driving ages? I would have expected him to choose something more general, like the voting system. <br/><br/>
    As we wrap up the choices, I give them 15 minutes to prepare their arguments, and then we would start the 4-minute debates where they each present their thoughts. As we head in order, the first one was quite bland. While listening, I'm preparing feedback for them just to have a record of my thoughts. The first two go by, discussing Animal Testing and Plastic Bags, filled with statistics and political views, but none of them really stood out. <br/><br/>
    Next was Ryan, with the topic of, The minimum driving age should be reduced to 14, and I'm not quite sure why he chose it. But this should be interesting. <br/>
    The propositional speaker, Abdul, spoke about how kids today are more responsible and how they should be exposed to these kinds of opportunities. I think that was the best way to approach it, given that it's a complicated topic, but he stuttered a lot. I think he knew what he was talking about but didn't know how to say it. Given that it doesn't count for grades, it was pretty good. But what I was really waiting for was Ryan's speech.<br/><br/>
    "Thank you, Abdul. Now can we have Ryan perform his speech?"<br/>
    After a quick nod, he stands up and takes a deep breath. To my surprise, however, he stands there for about a minute, trying to develop his thoughts.<br/>
    "Ryan? Are you ready?"<br/>
He stares at me, takes one more deep breath and nods. <br/>
    "Get started whenever you're ready."<br/>
    "Good afternoon, everybody. Statistics show the structure of the brain consists of a Frontal, Parietal, Occipital and Temporal Lobe. The frontal lobe, it is understood that it is not fully developed by your mid-20s. This means that someone's decision-making and thought process is much more effective as an adult than it would be as a teenager. So scientifically, the lower the age, the worse the decisions will be, proving my opponent's point wrong."<br/><br/>
    This is going really well. If someone were to describe what I'm feeling right now, I would most definitely be surprised. I was just expecting some random response. <br/>
    "Decision-making is important. 10 years ago, I lost my mother to a car crash, which shows how important the stop decisions are. Deciding as such would cost the lives of the citizens of Ottawa."<br/><br/>

Wow, maybe I misread him.



             
              </p>
            </Col>
            <Col sm={2}></Col>
          </Row>
          <Row>
          <Col sm={2} className="nomobile"></Col>
          <Col sm={3}>


          <p><Link to="/part2/chapter20" className="roundedcorner">Back to Chapter 20</Link></p>
          </Col>
          <Col sm={3}></Col>
          <Col sm={3}>

          <p><Link to="/part2/chapter22" className="roundedcorner">Go To Chapter 22</Link></p>
          </Col>
          <Col sm={2} className="nomobile"></Col>
          </Row>
          <br/><br/>
          
        </header>
      </Container>
    </div>
  );
}

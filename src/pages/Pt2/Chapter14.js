import React from "react";
import { Container, Row, Col } from "react-grid-system";
import "./components.css";
import { Link } from 'react-router-dom';

export default function Chapter14() {
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


          <p><Link to="/part2/chapter13" className="roundedcorner">Back to Chapter 13</Link></p>
          </Col>
          <Col sm={3}></Col>
          <Col sm={3}>

          <p><Link to="/part2/chapter15" className="roundedcorner">Go To Chapter 15</Link></p>
          </Col>
          <Col sm={2} className="nomobile"></Col>
          </Row>
          <Row>
            <Col sm={2}></Col>
            <Col sm={8}>
              <p className="p-manifesto">
              We are doing an introduction activity. It's Grade 12; we already know each other, but that's just what we do. But on a more important note, this morning, my mom said there would be a kid with autism in my class today. I really don't know what to expect; I'm looking around, trying to find who Ryan is.    <br/><br/>
    "How about you, Ryan?"<br/>
Jackpot. I look over and see an uncomfortable and shy kid about to give a response. He seems nice. I'm glad he's in the mainstream program. He tells us about his dog Dumpling. That is downright adorable. <br/><br/>But then, the teacher ruined it by saying something entirely random and irrelevant. <br/><br/>
    "In case all of you didn't know, Ryan has autism."<br/><br/>
Well, that was awkward to say. I'm pretty sure all of the parents told their kids and that Ryan was uncomfortable enough. Thanks for stating the obvious. 
    Classes were fun. During the lunch break, I meet up with my friends, and we chat about everything from summer, which is truly fun. During the break, I notice Ryan sitting by himself with his nose in a book, but I guess that's just his style.
    After my third-period class, I start to get tired. I get back that sense of why I don't like school. Can't we just do it online? Anyways, as I'm heading downstairs to my next class, I overhear something… that I wish I hadn't. Just as I was going down a few steps, I see this group of guys walking up to Ryan, alone, and hearing one of the jerks say something terrible and hurtful.<br/><br/>
    "My mom said there would be a kid with autism in my class. Just so you know, I don't work with freaks."<br/><br/>
Who would say something like that?! I look back and see Ryan just standing there, hurt. I want to say something, but I probably shouldn't. 
    I couldn't stop thinking about that—the audacity of that kid. The next day, I see him sitting in the cafeteria by himself, intensely reading a book. I would love to go over, but I'm hanging out with my friends. <br/><br/>
    "Amelia"<br/>
    "Yeah?"<br/>
    "Stop staring at the autistic kid."<br/>
    "I'm not."<br/>
    "Why do you care about that kid."<br/>
    "I don't."<br/><br/>
Why would I say that? I'm no better than that other kid. I should say something, but I don't want to lose my friends already on the second day. 
    A couple of days pass by, and I see him in the same spot, reading the same book. My friends just left, so you know what? I'm going to go and talk to him.
    Slowly, I head on over to him as people stare with disgust. As I come closer, he notices me.<br/><br/>
    "You can take the chair no-one is using it."<br/>
    "Haha, no, I'm not taking it."<br/>
    "Then why are you here."<br/>
    "Well, I thought you might want someone to sit with."<br/><br/>
He looks shocked. I'm just not sure if it's a good or bad reaction.<br/>
    "Can I sit down?"<br/>
He gives me a quick nod and immediately goes right back into his book.<br/>
    "So… your name is Ryan, right?"<br/>
    "Yeah"<br/>
    "I'm Amelia."<br/><br/>
He just sits there, unknowingly. I come all the way here, and he doesn't even bother to look. <br/>
    "You know… some people would say hello back."    <br/>
That gets his attention.<br/>
    "I'm sorry. Not many people talk to me."<br/>
    "I see. So tell me about you."<br/>
    "I have a dog, I like Chemistry, and I have a brother."<br/>
    "That sounds amazing."<br/>
    "How about you?"<br/>
Oh wow. He asked a question. I didn't think he would.<br/>
    "Well, I like to write and play the piano."<br/>
    "Nice"<br/>
Suddenly the bell rings. <br/><br/>
    "Time flies when you're having fun! Am I right?"<br/>
    "I guess. See you later."<br/>
    "Bye!"<br/>
I think that went well. I think this is going to be nice! <br/><br/>

He's a boy with potential and smarts, stuck inside the body of Ryan.


             
              </p>
            </Col>
            <Col sm={2}></Col>
          </Row>
          <Row>
          <Col sm={2} className="nomobile"></Col>
          <Col sm={3}>


          <p><Link to="/part2/chapter13" className="roundedcorner">Back to Chapter 13</Link></p>
          </Col>
          <Col sm={3}></Col>
          <Col sm={3}>

          <p><Link to="/part2/chapter15" className="roundedcorner">Go To Chapter 15</Link></p>
          </Col>
          <Col sm={2} className="nomobile"></Col>
          </Row>
          <br/><br/>
          
        </header>
      </Container>
    </div>
  );
}

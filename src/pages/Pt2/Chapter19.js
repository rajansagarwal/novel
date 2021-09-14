import React from "react";
import { Container, Row, Col } from "react-grid-system";
import "./components.css";
import { Link } from 'react-router-dom';

export default function Chapter19() {
  return (
    <div className="App">

      <Container>
        <header className="App-header">
          <Col sm={12}>
            <h2 className="explorehead">Elliot Parks</h2>
          </Col>
          <Row>
          <Col sm={2} className="nomobile"></Col>
          <Col sm={3}>


          <p><Link to="/part2/chapter18" className="roundedcorner">Back to Chapter 18</Link></p>
          </Col>
          <Col sm={3}></Col>
          <Col sm={3}>

          <p><Link to="/part2/chapter20" className="roundedcorner">Go To Chapter 20</Link></p>
          </Col>
          <Col sm={2} className="nomobile"></Col>
          </Row>
          <Row>
            <Col sm={2}></Col>
            <Col sm={8}>
              <p className="p-manifesto">
              Here's the thing. I don't really know anything about autism, so I'm really not sure what to say. All-day, I thought of what I said, but I can't let anyone know how I feel. I have a reputation to maintain, you know?
    It's been a few days, and every time after English that I walk by him, he slowly stops and goes to the wall. The feeling that I am that person making an autistic child scared is painful. How low can one's integrity go? I need to make it right, but I see my friends in the distance. I don't say anything and just walk forward.<br/><br/>
    "Hey look at that kid's face- he's so scared of you."<br/>
    "Haha, I know, right!"<br/>
    "Alright, I have a test, so I gotta head out."<br/>
    "See ya later."<br/><br/>
Why would I say that? The bell is about to go, and I lose sight of Ryan. I'll try again tomorrow. I can't have this weight on me.
    It's the next day, and I've decided how I want to do it. I'll just approach him at lunch! He's always in the library or cafeteria, so hopefully, it's not too hard to find him. I just want to make sure my friends don't see me. 
    Do you know the saying time flies when you're having fun? Well, this morning felt like the longest of them all. My hands are sweaty, and I can't even pay attention. I'm just so nervous about what's about to come. <br/><br/>
    But then, in the end, I'm just an average person. How am I supposed to know about autism? Literally, all I know is that they are all the same. Struggle to talk, to move and doing the other average human things. Like aren't they classified as disabled? In general, I think I can speak on behalf of most of the kids in which we really don't know what to expect. I just guess society isn't ready for such a large change.
    Eventually, it's lunchtime which means I need to find him. I first check the library, where I was disappointed not to see him. I swear I saw him here the other day. For that matter, he might be in the cafeteria.
    As I head on over to the cafeteria, I look around, watching people run around, scream at the top of their lungs and eat aggressively. Are these humans or barbarians? As I continue this search, I find him sitting in the back corner alone. Looking left and right, I make sure no one sees me and head on over to him. As soon as I approach him, he looks at me with worry and fear. After a few seconds, he starts to pack his things and gets up.<br/><br/>    
    "No, no, no, it's ok, you don't have to. I'm not trying to be mean. Please, sit down."<br/>
Extremely confused, he doesn't really know what to ask me. <br/>
    "Do you need anything?"<br/>
    "No… I just came here to apologize."<br/><br/>
His face calmed down a little bit, but the confusion was still at large.<br/>
    "I really feel bad about what I said."<br/>
    "You called me a freak."<br/>
    "I know. And it was terrible."<br/>
    "Well, I didn't like it."<br/>
    "And you have every right not to."<br/><br/>
I had a feeling this was going nowhere, so I sit down and act very heartfelt. By showing empathy, I think he will forgive me.<br/>
    "I have a question."<br/>
    "Yeah, of course."<br/>
After a long pause, he asks the question that I wish he hadn't.<br/>
    "Why?"<br/>
    "It's a long story."<br/>
    "We have 36 minutes left. I think we have time."<br/>
    "Ok fine."<br/><br/>
How am I supposed to tell him about my friends? I don't see a way out of this, so I inhale deeply and hope that my next few words fix things. <br/>
    "My friends… are different. They don't understand why you have autism and enjoy bullying people. They don't know what you're going through. But for that matter, neither do I. I just don't want any hard feelings."<br/>
    "But why did you say that to me?"<br/>
    "Well… my friends don't like you, and I want them to like me. They told me to say something mean, so I did. I feel terrible. I've been thinking about it all this time."<br/>
    "That doesn't make sense. You do things for people to like you?"<br/>
    "Yeah… and I apologize deeply. I just hope we can be friends."<br/>
    "You promise not to do anything else?"<br/>
    "You have my word."<br/>
    "Alright, I guess…" <br/>
You know what, he's just like everyone else. Sure, he's a bit introverted, but technically everyone is a little bit. <br/><br/>

I'm just glad that he forgave me.




             
              </p>
            </Col>
            <Col sm={2}></Col>
          </Row>
          <Row>
          <Col sm={2} className="nomobile"></Col>
          <Col sm={3}>


          <p><Link to="/part2/chapter18" className="roundedcorner">Back to Chapter 18</Link></p>
          </Col>
          <Col sm={3}></Col>
          <Col sm={3}>

          <p><Link to="/part2/chapter20" className="roundedcorner">Go To Chapter 20</Link></p>
          </Col>
          <Col sm={2} className="nomobile"></Col>
          </Row>
          <br/><br/>
          
        </header>
      </Container>
    </div>
  );
}

import React from "react";
import { Container, Row, Col } from "react-grid-system";
import "./components.css";
import { Link } from 'react-router-dom';

export default function Chapter13() {
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


          <p><Link to="/part2/chapter12" className="roundedcorner">Back to Chapter 12</Link></p>
          </Col>
          <Col sm={3}></Col>
          <Col sm={3}>

          <p><Link to="/part2/chapter14" className="roundedcorner">Go To Chapter 14</Link></p>
          </Col>
          <Col sm={2} className="nomobile"></Col>
          </Row>
          <Row>
            <Col sm={2}></Col>
            <Col sm={8}>
              <p className="p-manifesto">
              I hate the first day of school. The students always suck up to the teachers to try and make a good impression. It doesn't really bother me that much, but it pains me to see people pretending to be someone else. However, all of this is nothing compared to what my mom told me.<br/><br/>
    "So, honey."<br/>
    "Yeah, mom?"<br/>
    "There is something I have to tell you about your classes. When do you have English this year?"<br/>
    "3rd Period, with Ms. Patterson."<br/>
    "So what's going to happen, there is going to be, a different kid with you."<br/>
    "Different, what do you mean?"<br/><br/>
    "Well, he has something called autism."<br/>
    "I know what that is. He's allowed?"<br/>
    "Well, yeah."<br/>
    "Why? Why is he coming? Why is he in my class?"<br/>
    "That's just how it is. But don't let it bother you."<br/><br/>
Wow. Not what I was expecting. I don't understand. Someone that was born with a weird defect has to be associated with me. I don't want to say anything to my mom because she is nice, caring and loves me.<br/>
    "Alright. We're going to be late."<br/><br/>
As we arrive at the school, I go through the whole morning sequence with the introductions and tiredness; this reminds me that summer is over. Oh, the joys of school. However, all I could really think of was that kid I was going to see in 3rd period. What was he going to be like? What does he look like?<br/>
    Eventually, we arrive at lunch, and I finally get to meet up with my friends. They are the only escape I have from my house, and it feels like forever. I have to find a way to get them to like me even more.<br/><br/>
    "Hey, man! How was your summer?"<br/>
    "It was ok. How 'bout you?"<br/>
    "It was pretty good. Did you hear about that autistic guy?"<br/>
What? Did he just say that? Ok, I'm confused. Is he saying something mean or informative?<br/>
    "Yeah, my mom said something."<br/>
    "Why would they let something like this happen. He doesn't belong here."<br/><br/>
Oh, I see. He's being a jerk.<br/>
    "Yeah, definitely. What were they thinking? I have a class with him, so that should be painful."<br/>
I have no clue what I just said. Why did I say it was painful? What is wrong with me?<br/><br/>
    Sooner or later, I hear the bell ring. It's time for class. I would just like to say for the record; I have nothing against the kid. I just don't want to be that guy that is different from the group. I want just to fit in. <br/>
    As I head into the class, I notice him. He looks, the same. Shy, but the same. I'm not sure what I was worried about. I noticed though that he doesn't talk, but when he does, he keeps it concise. 
    After class ends, I meet up with my friends. As we are heading to our next class, things change when I hear what they say. <br/><br/>
    "Hey, Elliot. What do you think of that kid?"<br/>
    "I think he's fine."<br/>
    "Oooh, looks like somebody likes the weirdo."<br/>
Seriously guys?<br/>
    "Nah, I don't- why would you think that?"<br/>
    "Because it's true. If it isn't, prove it."<br/>
    "You know what. Fine"<br/><br/>
Quickly, I see him heading for the stairs. Just as we arrive, I go right towards him and say a few words that I will never forget.<br/>
    "My mom said there would be a kid with autism in my class. Just so you know, I don't work with freaks."<br/>
    "Haha, that was amazing, Elliot. I knew you would come through."<br/>
    After passing him, I look back and see the look on his face. He seems sad and upset. It must be tough, it's his first day.<br/><br/>
    "Serves him right. A kid with autism shouldn't be here with us."<br/>
    For some reason, I like the kid. I don't know his name or anything about him. But he feels like the kind of guy that would not pressure me into bullying another innocent person. Of course, I'm not going to risk my friendships just because of what I feel. 
    I remember what I said earlier today: it pains me to see people pretending to be someone else.<br/><br/>

It looks like I am my own worst enemy.

             
              </p>
            </Col>
            <Col sm={2}></Col>
          </Row>
          <Row>
          <Col sm={2} className="nomobile"></Col>
          <Col sm={3}>


          <p><Link to="/part2/chapter12" className="roundedcorner">Back to Chapter 12</Link></p>
          </Col>
          <Col sm={3}></Col>
          <Col sm={3}>

          <p><Link to="/part2/chapter14" className="roundedcorner">Go To Chapter 14</Link></p>
          </Col>
          <Col sm={2} className="nomobile"></Col>
          </Row>
          <br/><br/>
          
        </header>
      </Container>
    </div>
  );
}

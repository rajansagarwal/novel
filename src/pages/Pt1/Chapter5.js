import React from "react";
import { Container, Row, Col } from "react-grid-system";
import "./components.css";
import { Link } from 'react-router-dom';

export default function Chapter5() {
  return (
    <div className="App">

      <Container>
        <header className="App-header">
          <Col sm={12}>
            <h2 className="explorehead">Connie Stark</h2>
          </Col>
          <Row>
          <Col sm={2} className="nomobile"></Col>
          <Col sm={3}>


          <p><Link to="/part1/chapter4" className="roundedcorner">Back to Chapter 4</Link></p>
          </Col>
          <Col sm={3}></Col>
          <Col sm={3}>

          <p><Link to="/part1/chapter6" className="roundedcorner">Go To Chapter 6</Link></p>
          </Col>
          <Col sm={2}></Col>
          </Row>
          <Row>
            <Col sm={2}></Col>
            <Col sm={8}>
              <p className="p-manifesto">
              This morning was a bit tiring: the same routine each day. I'm glad I'm meeting with Ryan today though, I like him. He's intelligent and very friendly, which is why I'm excited to share the big news.
Suddenly, I hear the door knock. Perfect timing. It's the secretary letting me know that Ryan and his father are here. <br/><br/>
"Come on in!"
I see Ryan's father open the door. He has a deep smile on his face, with passionate and optimistic eyes. Following right behind him is Ryan, acting a bit shy and awkward. One thing I learned in college is always to give a warm welcome. So immediately, in a soft tone, I greet them into the office.<br/><br/>
"Please, sit down. How are you doing today, Mr. Williams?"<br/>
"Oh, just fine!"<br/>
"And you, Ryan?"<br/>
"Okay."<br/>
"That's just wonderful!"<br/>
And that's how it's done.<br/><br/>
"So you're probably wondering why I arranged this meeting."<br/>
"Definitely. I know as much as Ryan knows."<br/>
I can't wait to see the look on their faces.<br/><br/>
"I've got some big news! You know how you have been going to some mainstream classes for the past while? Well, your teachers have said nothing but amazing things. They said it was a pleasure to have you in their class."<br/>
Paul quickly jumps in, "So you called a meeting just to tell us his progress."<br/>
"Not quite. As you probably know, the semester is coming to an end, meaning Ryan will be heading into Grade 12. This meeting is about putting Ryan in the mainstream… full-time."<br/><br/>
Their faces are in awe. However, I'm not sure if it's good or bad. That would be a pretty key detail. 
After about 15 seconds, Ryan's face turned into a subtle smile while his father gave a bit of an angry aura. That's very surprising because I thought it would be the other way around. <br/><br/>
Still processing this information, his father replies, "So he will be with the other kids all the time?"<br/>
"That's the plan. It would be for just one semester, though. Nothing too heavy."<br/>
At this moment, I think Ryan finally understood what I was saying. <br/><br/>
"So… I finally got to leave the special-ed class?"<br/>
"Ryan! Don't say that!"<br/>
"What did I do?"<br/>
"That wasn't very nice."<br/>
"It's true, though!"<br/><br/>
Quickly, Mr. Williams looks over to me and apologizes. <br/>
"I'm so sorry, Ms. Stark. I don't know why he said that"<br/>
"No worries. I think I know what he's trying to say"<br/>
"And Ryan, what do we say?"<br/>
"I'm sorry… I'm just excited. I didn't know this was an option. I like the chemistry class."<br/>
"Absolutely nothing to worry about. I'm just glad you're enjoying it."<br/><br/>
"So how would it work specifically?"<br/>
"Well, you would have four classes. I have them right here. Give me a second."<br/><br/>
I check my desk drawer and pull out a folder of student information. After scrolling through the list, I find his name and hand him a student timetable. <br/>
"You see, your four courses are Math, Chemistry, English and Political Science. These are the only courses that we could get for you."<br/>
"I don't like English and Political Science."<br/>
"Well, it was this or Physical education, so I thought this would be the better option."<br/><br/>
Suddenly, his father chirps in, "Excuse me? Don't I get a say in this?"<br/>
"I thought this would be good for me? Wouldn't it be better if I was to be around different kids?"<br/>
"Yeah, of course. But it's going to be hard. I'm not sure if you're ready for that kind of jump."<br/>
"I'm doing this!"<br/>
"Ryan, could you please wait in the office. I would like to speak with Ms. Stark very quickly."<br/>
"Why? But I thought this was our meeting"<br/>
"No buts."<br/>
Very slowly, Ryan gets up and waits in the office. <br/><br/>I thought I was doing a good thing for him?

<br/>
             <br/>
             
              </p>
            </Col>
            <Col sm={2}></Col>
          </Row>
          <Row>
          <Col sm={2}></Col>
          <Col sm={3}>


          <p><Link to="/part1/chapter4" className="roundedcorner">Back to Chapter 4</Link></p>
          </Col>
          <Col sm={3}></Col>
          <Col sm={3}>

          <p><Link to="/part1/chapter6" className="roundedcorner">Go To Chapter 6</Link></p>
          </Col>
          <Col sm={2}></Col>
          </Row>
          <br/><br/>
          
        </header>
      </Container>
    </div>
  );
}

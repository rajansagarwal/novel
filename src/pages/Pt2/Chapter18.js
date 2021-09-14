import React from "react";
import { Container, Row, Col } from "react-grid-system";
import "./components.css";
import { Link } from 'react-router-dom';

export default function Chapter18() {
  return (
    <div className="App">

      <Container>
        <header className="App-header">
          <Col sm={12}>
            <h2 className="explorehead">Ryan Williams</h2>
          </Col>
          <Row>
          <Col sm={2} className="nomobile"></Col>
          <Col sm={3}>


          <p><Link to="/part2/chapter17" className="roundedcorner">Back to Chapter 17</Link></p>
          </Col>
          <Col sm={3}></Col>
          <Col sm={3}>

          <p><Link to="/part2/chapter19" className="roundedcorner">Go To Chapter 19</Link></p>
          </Col>
          <Col sm={2} className="nomobile"></Col>
          </Row>
          <Row>
            <Col sm={2}></Col>
            <Col sm={8}>
              <p className="p-manifesto">
              "How has school been? It's been over a week-“<br/><br/>
I haven't spoken with Ryan that much. He is still a bit upset, but I think he's feeling better. <br/>
    "Fine"<br/>
    "How are your classes."<br/>
    "I'm doing well."<br/>
    "Well, that's always good. What is your favourite class."<br/>
    "Chemistry. No doubt"<br/>
    "What about Political Science"<br/>
    "I'm still not sure what it's about. The teacher hasn't assigned any work yet. To quote him, he said, 'The first few weeks are a standard introduction, and then the real juice comes.' What does he mean by juice?"<br/>
    "Oh. That must be referring to the more interesting content; he seems excited to teach."<br/>
    "Maybe"<br/><br/>
It seems Ryan is not mad at me anymore… Maybe I should try and make a conversation to get his attention?<br/>
    "So why do you love chemistry?"<br/>
    "It's logical."<br/>
    "Do you love chemistry? Or does it just make sense?"<br/>
    "I guess it just makes sense."<br/><br/>
After he says this, though, he looks as if he wants to say something else. He turns out of his chair, looks at me and starts thinking. To the ordinary person, you would think that he is sitting in his chair and just thinking, but when you look into his eyes, you see a whole world of information. It takes him a few minutes before he answers.<br/><br/>
    "I can see them."<br/>
    "What can you see?"<br/>
    "The structure. How they work. How they combine. It all makes sense in my head. When I see a problem, I immerse myself in a new world and figure out how everything works. I want to be able to take information and think about it my way."<br/>
    "And what is your way?"<br/>
    "A way, where anything can be seen through anyone's eyes. It doesn't make sense, but it works."<br/>
    "You know what they say? Don't fix what ain't broke."<br/><br/>
I got a nice smile out of him, so I'm glad that he isn't furious at me anymore. But on a more important note, that was beautiful. I'm not sure if he's actually passionate about it, but he does love what he's doing.<br/>
    "So when you grow up, do you want to pursue chemistry?"<br/>
    "I don't know what I want to do when I grow up. I have my schedule, and I follow my schedule. The future comes when the future comes."<br/>
I'm not sure if he knows this, but he should pursue speaking. Think about it, a child with Asperger's public speaking. <br/><br/>

It would be incredible.




             
              </p>
            </Col>
            <Col sm={2}></Col>
          </Row>
          <Row>
          <Col sm={2} className="nomobile"></Col>
          <Col sm={3}>


          <p><Link to="/part2/chapter17" className="roundedcorner">Back to Chapter 17</Link></p>
          </Col>
          <Col sm={3}></Col>
          <Col sm={3}>

          <p><Link to="/part2/chapter19" className="roundedcorner">Go To Chapter 19</Link></p>
          </Col>
          <Col sm={2} className="nomobile"></Col>
          </Row>
          <br/><br/>
          
        </header>
      </Container>
    </div>
  );
}

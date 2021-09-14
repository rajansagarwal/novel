import React from "react";
import { Container, Row, Col } from "react-grid-system";
import "./components.css";
import { Link } from 'react-router-dom';

export default function Chapter23() {
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


          <p><Link to="/part3" className="roundedcorner">Back to Part 3</Link></p>
          </Col>
          <Col sm={3}></Col>
          <Col sm={3}>

          <p><Link to="/part3/chapter24" className="roundedcorner">Go To Chapter 24</Link></p>
          </Col>
          <Col sm={2} className="nomobile"></Col>
          </Row>
          <Row>
            <Col sm={2}></Col>
            <Col sm={8}>
              <p className="p-manifesto">
              It’s my first day on the job. Everywhere I applied, I got turned down. I can’t be sure whether it was because of Asperger’s or if I wasn’t the right material, but what I do know is that I am beyond grateful for my education. Think about it. I’m officially a lawyer. The feeble high school boy who could barely speak is now on the side of justice. Crazy, right?<br/><br/>
    This morning was one of reflection. About 9ish years ago, I was living at home and going to high school. But now, I am officially a graduate from the University of Ottawa with my JD. Not to be cocky or anything, but do you know how many articles have been written about me? I’m technically a part of a revolution. Truthfully, I’m just glad because I never believed I could do it.<br/><br/>
    The most common question I get asked is, “what inspired you to study law?” I tell them about the opportunities and mindset that high school gave me. However, the truth lies within the fact that I want to fit in. Getting a normal job has always been my goal, but I realized that I’m not normal. I should be able to go outside the box and get a job that no one would have expected.<br/><br/>
    Today, however, I am going to have my first day at the firm. This was the 7th job I applied to, and I think they saw that I would have some potential. It's about 10 past 6 right now, so a quick shower and breakfast should be fine before my 7:14 bus. I don’t trust cars, and I probably won’t for a while, so I better not miss it. After about 55 minutes, I find myself halfway to the building. This is a big moment for me: defining the future one bus stop at a time. <br/><br/>
    As I walk towards the building, I reflect on what brought me here. My father believed in me, the school giving me the opportunity, little Dumpling giving me love, Amelia befriending me, Mr. Garcia for showing me this path and everyone else during that time. I take a deep breath and open the doors preparing to revolutionize the world or just get through the day.<br/><br/>
    As I walk inside, I quickly refer to the building map that my boss, Mr. Johansen, gave me. According to this, my desk is on the 13th floor in aisle 7. Slowly, I head on over to the elevator, alongside another man, but I’m shocked to notice that 13 is already pressed. <br/><br/>
    “Are you heading to 13?”<br/>
    “Yeah. Where are you headed?”<br/>
    “Same. Aisle 7”<br/>
    “Aisle 4. Interesting”<br/><br/>
Well, would you look at that? I’m meeting new people by the minute!<br/>
    “Oh, how could I forget. I’m Andrew. And you are?”<br/>
    “Ryan Williams”<br/>
    “Hey. First day?”<br/>
    “Yeah. You?”<br/>
    “Nope. It’s my second week, but I guess you could still say I’m a newbie, haha.”<br/><br/>
As we reach the floor, I head to my desk and take in the moment. <br/>
    “You realize we don’t get any good cases? Nothing too special.”<br/>
    “Well, this is my first job ever, and you might have noticed that I have Aspergers… so I guess this just feels like it’s a big moment!”<br/>
    “Oh wow! I didn’t even notice. You want to become a prosecutor?”<br/>
    “I think so, I mean, definitely.”<br/><br/>
As I sit down, I rearrange my desk perfectly, just as planned from home and organize my files as they should be.<br/>
    “Well, it’s a long process. It takes trust to get your first case. They just want us doing paperwork and analysis until then.”<br/>
It’s going to be a lot of work. My dad even told me that no one would believe that I could do it. He said I could quit if it became too difficult. But to be honest, this is a challenge that I want to take part in. I’m ready.<br/><br/>
    

“You know what? I think I’m going to be just fine.”




             
              </p>
            </Col>
            <Col sm={2}></Col>
          </Row>
          <Row>
          <Col sm={2} className="nomobile"></Col>
          <Col sm={3}>


          <p><Link to="/part3" className="roundedcorner">Back to Part 3</Link></p>
          </Col>
          <Col sm={3}></Col>
          <Col sm={3}>

          <p><Link to="/part3/chapter24" className="roundedcorner">Go To Chapter 24</Link></p>
          </Col>
          <Col sm={2} className="nomobile"></Col>
          </Row>
          <br/><br/>
          
        </header>
      </Container>
    </div>
  );
}

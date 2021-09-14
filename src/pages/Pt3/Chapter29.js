import React from "react";
import { Container, Row, Col } from "react-grid-system";
import "./components.css";
import { Link } from 'react-router-dom';

export default function Chapter29() {
  return (
    <div className="App">

      <Container>
        <header className="App-header">
          <Col sm={12}>
            <h2 className="explorehead">The United Star</h2>
          </Col>
          <Row>
          <Col sm={2} className="nomobile"></Col>
          <Col sm={3}>


          <p><Link to="/part3/chapter28" className="roundedcorner">Back to Chapter 28</Link></p>
          </Col>
          <Col sm={3}></Col>
          <Col sm={3}>

          <p><Link to="/finish" className="roundedcorner">Go To Book Finish</Link></p>
          </Col>
          <Col sm={2} className="nomobile"></Col>
          </Row>
          <Row>
            <Col sm={2}></Col>
            <Col sm={8}>
              <p className="p-manifesto">
              Marchello Trivino<br/>
Date of Publication: July 15, 2024<br/><br/>

    On this day, we commemorate change. Change in the way we live, change in the judicial system and a shift in our society. Just yesterday, the Ontario Provincial Court passed a verdict on an ordinary case. However, the defendant’s lawyer Mr. Ryan Williams is quite the opposite of ordinary. <br/><br/>

    Mr. Williams is an individual with Autism, or Asperger’s, to be quite exact. As a very highly-functioning individual, he made it his objective since being a little boy to change the world. During our interview, he explained how, “Having autism is like a rock. It can be annoying and hard sometimes, but it’s just a tiny small obstacle in the hill of life”. Through his work at the Johansen Professional Group, he has been an inspiration to not only his coworkers but the society around him. <br/><br/>

    Born and raised in downtown Ottawa, Ryan brings pride to his family, including his father, brother and adorable dog. Mr. Williams explained how the people around him during his childhood forever changed his future. He would like to bring acknowledgement to his high school Political Science teacher and principal, his good friend Amelia from Grade 12 and most importantly, his father and brother, who helped him during tough times. He also announced how he wanted to dedicate this case to his mother, who faced an unfortunate passing during his youth.<br/><br/>

    In retrospect, there have been several historical landmarks that have revolutionized law. Many link its birth to nearly 3000 BC with the first actual court case, the first African American lawyer in 1844, the first female lawyer in 1922 and now the first autistic advocate. Today, in 2024, we commemorate the brave and revolutionary actions of Mr. Ryan Williams, who has changed the world for the better. Each day, individuals from around the planet can create new beginnings and change the way society runs. <br/><br/>

Today, history has been rewritten for the better. What’s next?


      
              </p>
            </Col>
            <Col sm={2}></Col>
          </Row>
          <Row>
          <Col sm={2} className="nomobile"></Col>
          <Col sm={3}>


          <p><Link to="/part3/chapter28" className="roundedcorner">Back to Chapter 28</Link></p>
          </Col>
          <Col sm={3}></Col>
          <Col sm={3}>

          <p><Link to="/part3/chapter29" className="roundedcorner">Go To Book Finish</Link></p>
          </Col>
          <Col sm={2} className="nomobile"></Col>
          </Row>
          <br/><br/>
          
        </header>
      </Container>
    </div>
  );
}

import React from "react";
import { Container, Row, Col } from "react-grid-system";
import "./components.css";
import { Link } from 'react-router-dom';

export default function Chapter20() {
  return (
    <div className="App">

      <Container>
        <header className="App-header">
          <Col sm={12}>
            <h2 className="explorehead">Autism: A History</h2>
          </Col>
          <Row>
          <Col sm={2} className="nomobile"></Col>
          <Col sm={3}>


          <p><Link to="/part2/chapter19" className="roundedcorner">Back to Chapter 19</Link></p>
          </Col>
          <Col sm={3}></Col>
          <Col sm={3}>

          <p><Link to="/part2/chapter21" className="roundedcorner">Go To Chapter 21</Link></p>
          </Col>
          <Col sm={2} className="nomobile"></Col>
          </Row>
          <Row>
            <Col sm={2}></Col>
            <Col sm={8}>
              <p className="p-manifesto">
              Autism is an increasing issue in society with its rapid rise in global awareness. However, at the moment, perspectives about the condition are still ignorant, and individuals are treated by the mainstream using outdated information. They are often seen as incapable and need to be separated from the main population. Ryan is treated differently by his father, teachers and peers who doubt he can acclimatize and thrive in a new and challenging environment. <br/><br/>
    But first, what is autism? As per the definition by the Centres for Disease Control and Prevention, "Autism spectrum disorder (ASD) is a developmental disability that can cause significant social, communication and behavioural challenges." Going back to the year 1940, a man named Hans Asperger was analyzing and observing "abnormal" children's behaviours. These children were actually experiencing symptoms of ASD syndrome; however, no one really knew what that was at the time. As such behaviours became more common, this became a common research topic adopted by scientists such as Leo Kanner. These children were considered burdens to their families, and finding the root cause was of high importance.<br/><br/>
    Over time, the diagnosis of Autism was developed, known to be a 'from-birth diagnosis. The word developed from the Latin root: <i>autos</i>, which means to "withdraw from oneself."<br/><br/>
    However, people eventually realized that not everyone with autism is the same. Some are highly functional, and others require lots of help. This was the birth of the concept: Aspergers. Named after one of the original discoverers, Asperger's syndrome identifies an autistic person who is highly functional. This was a significant change in the societal perspective of Autism. Asperger's was later introduced into the American Psychiatric Association, revolutionizing how we see this condition.<br/><br/>
    All around the world, people are advocating for the rights of those with autism, and those afflicted are slowly and slowly becoming more relevant in society. However, stories like Ryan's are not as common, and changes would recognize forward growth in global understanding.



             
              </p>
            </Col>
            <Col sm={2}></Col>
          </Row>
          <Row>
          <Col sm={2} className="nomobile"></Col>
          <Col sm={3}>


          <p><Link to="/part2/chapter19" className="roundedcorner">Back to Chapter 19</Link></p>
          </Col>
          <Col sm={3}></Col>
          <Col sm={3}>

          <p><Link to="/part2/chapter21" className="roundedcorner">Go To Chapter 21</Link></p>
          </Col>
          <Col sm={2} className="nomobile"></Col>
          </Row>
          <br/><br/>
          
        </header>
      </Container>
    </div>
  );
}

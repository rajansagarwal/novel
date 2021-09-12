import React from "react";
import { Container, Row, Col } from "react-grid-system";
import "../App.css";
import { Link } from 'react-router-dom';

export default function Read() {
  return (
    <div className="App">

      <Container>
        <header className="App-header">
          <Col sm={12}>
            <h2 className="explorehead">An Interactive Reading Experience</h2>
          </Col>
          <Row>
            <Col sm={2}></Col>
            <Col sm={8}>
              <p className="p-manifesto">
                Just want to read the novel plain and simple? Check out the <a href="https://google.com">Standard PDF Document.</a>
                <br/>
             <br/>
             If you're still reading this, I am so glad you stayed! As you continue on this website, you will be introduced to the novel in full, receive continuous updates to the novel and have a more comfortable experience<br/>
             <br/>
             <Link to="/">Let's dive right in.</Link>
              </p>
            </Col>
            <Col sm={2}></Col>
          </Row>
          <Row>
            <Col sm={2}></Col>
            <Col sm={8}>
              <h5 className="manifesto linkheader" style={{fontSize: '25px'}}>Table of Contents</h5>
              <p className="p-manifesto" style={{fontSize: '20px'}}>
                <ul>
                    <li>Novel Introduction</li>
                    <li>Part 1
                        <ol>
                            <li>Ryan Williams</li>
                            <li>Bobby Williams</li>
                            <li>Paul Williams</li>
                            <li>Ryan Williams</li>
                            <li>Connie Starke</li>
                            <li>Paul Williams</li>
                            <li>Ryan Williams</li>
                            <li>Bobby Williams</li>
                            <li>Paul Williams</li>
                        </ol>
                    </li>

                    <li>Part 2</li>
                        <ol>
                                <li>Ryan Williams</li>
                                <li>Connie Stark</li>
                                <li>Ryan Williams</li>
                                <li>Elliot Parks</li>
                                <li>Amelia Anderson</li>
                                <li>Ms. Garcia</li>
                                <li>Ryan Williams</li>
                                <li>Amelia Anderson</li>
                                <li>Paul Williams</li>
                                <li>Elliot Parks</li>
                                <li>Autism: A History</li>
                                <li>Mr. Garcia</li>
                                <li>Ryan Williams</li>
                            </ol>

                    <li>Part 3
                            <ol>
                                <li>Ryan Williams</li>
                                <li>Andrew Nguyen</li>
                                <li>August Johansen</li>
                                <li>Ryan Williams</li>
                                <li>Andrew Nguyen</li>
                                <li>Ryan Williams</li>
                                <li>The United Star: An Article</li>
                            </ol>
                        
                    </li>
                </ul>
              </p>
            </Col>
            <Col sm={2}></Col>
          </Row>
        </header>
      </Container>
    </div>
  );
}

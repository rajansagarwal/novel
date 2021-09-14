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
                Just want to read the novel plain and simple? Check out the <a href="https://drive.google.com/file/d/1mjfooNxMTl1R9im_zjTfimJRWx3zJ_sI/view?usp=sharing">Standard PDF Document.</a>
                <br/>
             <br/>
             If you're still reading this, I am so glad you stayed! As you continue on this website, you will be introduced to the novel in full, receive continuous updates and have a more comfortable experience!<br/>
             <br/>
             Now, please note that this novel is made for 8-13 year olds. If you are older than 13, this novel may be at more of a basic level. In turn, if you are under 8 years old, the grammar and format of this novel might be too complex.<br/><br/>
             <Link to="/intro" className="roundedcorner">Let's dive right in.</Link>
              </p>
            </Col>
            <Col sm={2}></Col>
          </Row>
          <Row>
              
            <Col sm={2}></Col>
            <Col sm={8}>
            <hr className="solid" />
              <h6 className="p-manifesto" style={{fontSize: '25px'}}>
                  
                 <b>Table of Contents</b>
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
              </h6>
            </Col>
            <Col sm={2}></Col>
          </Row>
        </header>
      </Container>
    </div>
  );
}

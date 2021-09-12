import React from "react";
import { Container, Row, Col } from "react-grid-system";
import "../App.css";
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="App">

      <Container>
        <header className="App-header">
          <Col sm={12}>
            <h2 className="explorehead">Breaking Barriers</h2>
          </Col>
          <Row>
            <Col sm={2}></Col>
            <Col sm={8}>
              <h5 className="manifesto linkheader">A Novel About Hope</h5>
              <p className="p-manifesto">
                Breaking Barriers is a novel targeted to raise awareness about autism, from a more gentle stance. In this approach, it was my primary objective to introduce the topic in a familiar, friendly and relatively simple manner. This book is meant for <b>8-13 year olds</b>, with grammar tailored towards complex readers, and content meant for those interested in learning more about autism. The novel features Ryan, an autistic teenager in Ottawa and his journey to become a lawyer in the 21st-century. As he <i>breaks the barriers</i> of societal norms, he builds friendships and new skills along the way.
             
             <br/>
             <br/>
             <Link to="/read">Read The Novel Here</Link> - An Interactive Reading Experience<br/>
              </p>
            </Col>
            <Col sm={2}></Col>
          </Row>
          <Row>
            <Col sm={2}></Col>
            <Col sm={8}>
              <h5 className="manifesto linkheader">Summary</h5>
              <p className="p-manifesto">
                Autism is rarely taught, and when it is, the content is subject to stereotypes and opinions. Ryan Williams, a 17 year old in Ottawa, aims to overcome these social norms during his experience in high school and working in a law practice. His story begins in high school, where Ryan feels out of place in the special-ed class. A special meeting with the principal turns things around, providing him with an eye-opening opportunity in his senior year. Things go well, and Ryan is invited to study law in university. As time flies, his story continues at a law practice, where he is mentored and doubted by a variety of passionate and out-of-the-ordinary coworkers. His story is inspiring to many, but does it last?
              </p>
            </Col>
            <Col sm={2}></Col>
          </Row>
          <Row>
            <Col sm={2}></Col>
            <Col sm={8}>
            <img src="https://cloud-16c6pal7a-hack-club-bot.vercel.app/0bookpost.png" width="100%" alt="book cover in diagonal and repetitive design"/>
              <h5 className="manifesto linkheader">About The Author</h5>
              <p className="p-manifesto">
                My name is <a href="https://heyrajan.com">Rajan Agarwal.</a> I am a 16
                year old in Ontario interested in social change. When writing this novel, I found inspiration and support from a wide variety of sources. Writing a novel is not as scary as the tales depict it to be, but it requires imagination and determination. In my spare time, you will either find me preparing a speech, writing code vigorously or working on a side project that I will over-promote for no reason!
              </p>
            </Col>
            <Col sm={2}></Col>
          </Row>
          <Row>
            <Col sm={2}></Col>
            <Col sm={8}>
              <h5 className="manifesto linkheader">Novel Guide</h5>
              <p className="p-manifesto">
                This novel is meant for children aged 8-13. The content of the novel is friendly, and the syntax is tailored towards a younger age category. The novel is broken down into 3 parts, each occuring in different time frames and revolving around different people. The structure of the novel is such that each chapter is in a different perspective, as indicated as the name of the chapter. The purpose was to share multiple perspectives and give reasoning to decisions made throughout the novel.
              </p>
            </Col>
            <Col sm={2}></Col>
          </Row>
          <Row>
            <Col sm={2}></Col>
            <Col sm={8}>
            
              <h5 className="manifesto linkheader">Get In Touch</h5>
              <p className="p-manifesto">
                I would love to get in touch about, well, anything! Visit{" "}
                <a href="https://heyrajan.com">heyrajan.com</a> to learn more.
                <br />
                <br />
                <hr className="solid" />
                <br /> "Having autism is like a rock. It can be annoying and hard sometimes, but it’s just a tiny small obstacle in the hill of life" - Ryan Williams
              </p>
            </Col>
            <Col sm={2}></Col>
          </Row>
        </header>
      </Container>
    </div>
  );
}

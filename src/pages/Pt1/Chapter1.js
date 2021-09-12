import React from "react";
import { Container, Row, Col } from "react-grid-system";
import "./components.css";
import { Link } from 'react-router-dom';

export default function Chapter1() {
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


          <p><Link to="/intro" className="roundedcorner">Back to Intro</Link></p>
          </Col>
          <Col sm={3}></Col>
          <Col sm={3}>

          <p><Link to="/part1/chapter2" className="roundedcorner">Go To Chapter 2</Link></p>
          </Col>
          <Col sm={2} className="nomobile"></Col>
          </Row>
          <Row>
            <Col sm={2}></Col>
            <Col sm={8}>
              <p className="p-manifesto">
                "Hey. Wake up"<br/><br/>
Slowly, I open my eyes, only to see my dad smiling over my bed. As I fall back into a deep stretch, I look at the time. 7:03 AM. <br/><br/>
    "Dad. It's the weekend. Why so early-"<br/> 
I get cut off by a deep yawn, lasting what felt like hours. My dad breaks the sleepy environment with his enthusiastic tone. <br/><br/>
      "Let's go Ryan. Get up. You won't regret it."<br/><br/>
Gradually, I lift myself out of bed. I hear the birds chirping like a summer melody, the sound of wind in the rustling trees. I open my window and feel the fresh air blowing in my face. After waking myself up, I walk over to the kitchen, heading straight for the cupboard. As I pour myself a quick bowl of cereal, I await the reasoning for this early excitement with my father. My brother, Bobby, is waiting on the couch, quite confused as well.<br/><br/>
    "Well, boys. I got a little something. Now, I know it will be a bit of work, but I know you will love it!"<br/><br/>
    {'  '}"What is it! What is it! What is it!" Bobby exclaims. <br/>{'  '}
In a tired and anxious voice, I reply, "Someone's finally awake."<br/><br/>
My dad, filled with excitement, bends down to get something.<br/>
    "Introducing our new little buddy."<br/><br/>
He picks up a soft little brown and black puppy. This is, by far, the cutest thing I have ever seen. The tiny little paws are waving in the air—the small little wet nose. The tiny ears are flopping around. The tiny tail wagging uncontrollably. <br/><br/>Without hesitation, my brother yells, "Oh. My. God. It's a dog!"
    "Can I touch it? Can I hold him? Can I have him?"<br/>
    "Yes, yes, you can.” <br/><br/>
Myself, I’m still processing this. I mean, they know that I can't take care of him myself. I take a very long pause, trying to recollect my thoughts. I look over at Bobby, playing and running around with the puppy. He picks him up and cradles him like a newborn baby. Seeing Bobby like this, I knew I couldn't do this to him. He hasn't been this happy in quite a long time.
    "How are we supposed to take care of him?"<br/><br/>
    Dad looks over. The mood shifts quickly with this blunt statement.
"Well," I take another pause. "Of course, Bobby is young, so that will be difficult. With mom gone as well, I don’t see how this would be possible.”<br/><br/>
We share a few pauses. Back and forth, more thoughts flow by the second.
    "And of course, you know I can't."<br/><br/>
   "You are highly functional and will be very successful! Don't tell yourself that!”<br/>
    “Just as a recap, you are leaving an autistic boy and a child alone with a dog?”<br/><br/>
The pauses become longer with each thought.
    "But on a more important note, how did you afford this dog? He seems too beautiful to be free."<br/><br/>
    "That is a question I do know the answer to. A coworker from my old job got one, but after a couple of weeks, it was too much to handle."<br/><br/>
    "And you don't think that says something for itself."<br/><br/>
    "Well, it was such a beautiful dog that I had to take in."<br/><br/>
Bobby overhears a few words and chimes in, "Before making a verdict, come hold him."<br/><br/>
    My dad looks at him, confused.
    "Where did you learn that word?"<br/><br/>
    "I saw it on a commercial. But that doesn't matter. Just come!"<br/><br/>
Very slowly, I walk over to the couch. When I say slowly, I mean exceptionally slowly. My hands are shaking, and my thoughts are going crazy. What if it jumps? What if it barks? What if it bites? 
    "Nope. This is definitely not happening"<br/><br/>
I run back. Well, walk quickly, but it's the thought that counts. My dad blocks me and whispers into my ear. 
    "Leap of faith."<br/><br/>
Even though I am in no mood to listen to his advice, I turn around, walk to the couch and sit down. 
    "Alright," I took a very long pause. I'm ready."<br/><br/>
Bobby slowly takes the puppy and places him on my lap. Well, what do you know? Nothing happened. I gently bring up my hands and stroke his fur very gently. A feeling of positive energy flows through me. I look over to my brother and dad and then back at the dog.
<br/><br/>
"Welcome to the family."<br/>
             <br/>
             
              </p>
            </Col>
            <Col sm={2}></Col>
          </Row>
          <Row>
          <Col sm={2}></Col>
          <Col sm={3}>


          <p><Link to="/intro" className="roundedcorner">Back to Intro</Link></p>
          </Col>
          <Col sm={3}></Col>
          <Col sm={3}>

          <p><Link to="/part1/chapter2" className="roundedcorner">Go To Chapter 2</Link></p>
          </Col>
          <Col sm={2}></Col>
          </Row>
          <br/><br/>
          
        </header>
      </Container>
    </div>
  );
}

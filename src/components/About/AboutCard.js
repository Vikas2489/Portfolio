import React from 'react';
import Card from 'react-bootstrap/Card';
import { ImPointRight } from 'react-icons/im';

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: 'justify' }}>
            Hi Everyone, I am <span className="purple">Vikas Kumar </span>
            from <span className="purple"> Delhi, India.</span>
            <br />
            Experienced full-stack developer with 1.9 years of expertise in the MERN Stack has demonstrated a strong ability to design and implement successful e-commerce platforms. I have worked on two significant projects: Modulus Sell and Modulus Buy, which cater to the B2B market, and Cayroshop, a B2C platform. Notably, they played a pivotal role in leading the team responsible for building the company's e-commerce website.
         
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Working Out
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
          </ul>

          <p style={{ color: 'rgb(155 126 172)' }}>
            "Strive to think out of the box and build it"{' '}
          </p>
          <footer className="blockquote-footer">Vikas Kumar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

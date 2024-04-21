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
            I'm a software developer at Modulus Seventeen with 1.3 years of
            experience. I've built a product that simplifies distribution for
            shopkeepers and distributors, offering them a user-friendly
            platforms.
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

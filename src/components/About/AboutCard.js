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
            With 1.9 years of experience as a full-stack developer specializing
            in the MERN stack (MongoDB, Express.js, React.js, andNode.js), I
            have built e-commerce platforms for two major projects : Modulus
            Sell and Modulus Buy, which simplify distribution for shopkeepers
            and distributors. Additionally, I completed a freelance project
            developing an e-commerce website, leading the team responsible for
            its creation.
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

import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Vikas Kumar </span>
            from <span className="purple"> Delhi, India.</span>
            <br />
            Experienced Full-Stack Developer with 2.5+ years of expertise in
            MERN stack technologies (MongoDB, Express.js, React.js, Node.js).
            Demonstrated success in delivering scalable e-commerce platforms and
            enterprise- grade solutions for both B2B and B2C markets. Proven
            leader with experience managing cross-functional development teams
            to build distribution platforms and consumer-facing applications.
            Currently developing CRM systems, admin dashboards, and real estate
            websites using React.js and Next.js while optimizing application
            performance and implementing GSAP animations to enhance user
            experience.
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
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to think out of the box and build it"{" "}
          </p>
          <footer className="blockquote-footer">Vikas Kumar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

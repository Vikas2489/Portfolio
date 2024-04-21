import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';
import githubBattle from '../../Assets/Projects/github-battle.png';
import flexor from '../../Assets/Projects/flexor.png';
import blogApp from '../../Assets/Projects/blog.png';
import chatify from '../../Assets/Projects/chatify.png';
import quizApp from '../../Assets/Projects/quiz-app.png';
import shoppingCart from '../../Assets/Projects/shopping-cart.png';

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: 'white' }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blogApp}
              isBlog={false}
              title="Blog App"
              description="Built a comprehensive blog app with user-friendly features like registration, login, and easy article management. Implemented advanced options like liking/unliking posts and following/unfollowing users. Used ReactJS for the frontend, ExpressJS and NodeJS for the backend, and MongoDB for the database. Styled with TailwindCSS for a sleek design. Note: The app uses a free database, which might have occasional response delays."
              // ghLink=
              demoLink="https://blog-app-5ebm.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              // ghLink=
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shoppingCart}
              isBlog={false}
              title="Shopping App"
              description="Developed a shopping app featuring advanced search, price filtering and sorting functionalities. Users enjoy seamless checkout and a clear view of total prices. Utilized ReactJS and TailwindCSS for a modern and intuitive interface."
              // ghLink=
              demoLink="https://guileless-swan-3e45bb.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={githubBattle}
              isBlog={false}
              title="Github Battle"
              description="Armed with React.js proficiency, adept state management skills, and the ability to implement dynamic light and dark mode functionality using Tailwind CSS, I'm well-equipped to tackle any GitHub battle head-on"
              // ghLink=
              demoLink="https://github-battle-eight.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={flexor}
              isBlog={false}
              title="Flexor"
              description="Developed a responsive static website featuring Home and Blog pages, showcasing precision in design."
              demoLink="https://vikas2489.github.io/Checkpoint-4-HTML-CSS-/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quizApp}
              isBlog={false}
              title="Quiz App"
              description="Made a quiz app with react js and added local storage support."
              // ghLink=
              demoLink="https://quiz-app-azure-two.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

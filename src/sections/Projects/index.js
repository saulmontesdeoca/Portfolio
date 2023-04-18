import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectItem from "../../components/ProjectItem";

const Projects = () => {
  var projects = [
    {
      title: "bookworms.",
      githubLink: "https://github.com/saulmontesdeoca/bookworms",
      description:
        "book social network that enables users to create, share, " +
        "and explore personalized bookshelves and follow friends." +
        "full-stack web app built with react, flask, mongodb," +
        "redis, docker, and kubernetes.",
      techList: ["⚛️ react", "🚀 flask", "🐵 mongodb", "🐳 docker"],
      imgSrc: "images/bookworms.png",
    },
  ];
  return (
    <section id="projects">
      <Container className="py-100">
        <Row>
          <Col sm={12} md={6}>
            <Row>
              <h2 className="section-subtitle">projects</h2>
            </Row>
          </Col>
          <Col sm={12} md={6} />
        </Row>
        <Row className="justify-content-around mt-5">
          <Col>
            <ul className="project-list">
              {/* <li className="project-item">
                <div className="project-content">
                  <div>
                    <p class="project-overline">featured project</p>
                    <h3 class="project-title">
                      <a
                        href="https://halcyon-theme.netlify.com/"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        bookworms.
                      </a>
                    </h3>
                    <div class="project-description">
                      <p>
                        book social network that enables users to create, share,
                        and explore personalized bookshelves and follow friends.
                        full-stack web app built with react, flask, mongodb,
                        redis, docker, and kubernetes.
                      </p>
                    </div>
                    <div class="project-tech-list">
                      <Chip
                        className="m-1"
                        label="👾 javascript"
                        color="secondary"
                        variant="outlined"
                        style={{ fontFamily: "Courier" }}
                        onClick={() => {}}
                      />
                      <Chip
                        className="m-1"
                        label="🐍 python"
                        color="secondary"
                        variant="outlined"
                        style={{ fontFamily: "Courier" }}
                        onClick={() => {}}
                      />
                      <Chip
                        className="m-1"
                        label="⚛️ react"
                        color="secondary"
                        variant="outlined"
                        style={{ fontFamily: "Courier" }}
                        onClick={() => {}}
                      />
                      <Chip
                        className="m-1"
                        label="🚀 flask"
                        color="secondary"
                        variant="outlined"
                        style={{ fontFamily: "Courier" }}
                        onClick={() => {}}
                      />
                      <Chip
                        className="m-1"
                        label="📊 dash"
                        color="secondary"
                        variant="outlined"
                        style={{ fontFamily: "Courier" }}
                        onClick={() => {}}
                      />
                      <Chip
                        className="m-1"
                        label="🐳 docker"
                        color="secondary"
                        variant="outlined"
                        style={{ fontFamily: "Courier" }}
                        onClick={() => {}}
                      />
                    </div>
                    <div class="project-links">
                      <a
                        href="https://github.com/bchiang7/halcyon-site"
                        aria-label="GitHub Link"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          role="img"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-github"
                        >
                          <title>GitHub</title>
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                      </a>
                      <a
                        href="https://halcyon-theme.netlify.com/"
                        aria-label="External Link"
                        class="external"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          role="img"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-external-link"
                        >
                          <title>External Link</title>
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="project-image">
                  <a
                    href="https://halcyon-theme.netlify.com/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <div className="img-wrapper">
                      <div style={{ display: "block", maxWidth: "700px" }}>
                        <img alt="bookworms" src="images/bookworms.png" />
                      </div>
                    </div>
                  </a>
                </div>
              </li> */}
              {projects.map((project) => (
                <ProjectItem project={project} />
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;

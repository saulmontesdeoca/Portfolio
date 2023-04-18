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
    {
      title: "spotime",
      githubLink: "https://github.com/MLH-Fellowship/spotify-web-app",
      description:
        "Web application that revolutionizes the way users discover music, by recommending playlists based on their current facial expression and favorite music genres on Spotify. Allows users to play recommended playlists directly within the Spotify app, as well as add them to their library, and see in a user-friendly interface a summary of users' top songs, artists, and playlists.",
      techList: ["🚪 nginx", "🐳 docker", "⚛️ react", "🚀 flask"],
      imgSrc: "images/spotime.png",
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

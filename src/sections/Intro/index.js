import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const Intro = () => {
  return (
    <section
      style={{ minHeight: "100vh" }}
      className="vertical-center-container"
    >
      <Container fluid className="vertical-center">
        <Row className="mb-4">
          <Col md={12}>
            <span className="light-color" style={{ fontFamily: "Courier" }}>
              hi, my name is
            </span>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <h2 className="m-0 fn-font">saul</h2>
          </Col>
          <Col md={12}>
            <span className="m-0 ln-font">montes de oca</span>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <h2
              className="mt-2 mb-3 subtitle-font"
              style={{ color: "rgb(138, 147, 173)" }}
            >
              i'm a software neurosurgeon 👾
            </h2>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <p
              className="text-wrap f-20"
              style={{ maxWidth: "540px", color: "rgb(138, 147, 173)" }}
            >
              i consider myself to have a passion for bringing ideas to life
              through lines of code. whether it's creating innovative apps,
              building interactive websites, or developing cutting-edge software
              solutions, i'm all about building cool stuff that makes a
              difference.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Intro;

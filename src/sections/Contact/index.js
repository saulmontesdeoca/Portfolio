import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "@mui/material/Button";

const Contact = () => {
  return (
    <section id="contact">
      <Container className="py-200">
        <Row className="justify-content-around">
          <Col xs={10} className="text-center">
            <span className="light-color" style={{ fontFamily: "Courier" }}>
              wanna reach out?
            </span>
            <h2>let's chat</h2>
            <p
              className="text-wrap f-20"
              style={{ color: "rgb(138, 147, 173)" }}
            >
              although i'm not on the hunt for new opportunities at the moment,
              i'm always open to making new connections and hearing about
              exciting projects. whether you have a question, a collaboration
              idea, or just want to say hi, don't hesitate to reach out! i'll
              make sure to get back to you as soon as possible.
            </p>
            <a href="mailto:saulmdomtz@gmail.com">
              <Button
                style={{ textTransform: "lowercase", fontFamily: "Courier" }}
                variant="outlined"
              >
                drop me a line!
              </Button>
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;

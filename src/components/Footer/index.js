import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <div id="footer">
      <Container className="mb-3">
        <Row className="justify-content-around">
          <Col xs={10} className="text-center">
            <span
              className="light-grey-color"
              style={{
                fontFamily: "Courier",
                fontSize: "clamp(12px, 9vw, 12px)",
              }}
            >
              buit by{" "}
              <a
                href="https://github.com/saulmontesdeoca"
                rel="noreferrer"
                target="_blank"
              >
                me
              </a>{" "}
              <br />
              design inspo by{" "}
              <a
                href="https://github.com/bchiang7/v4"
                rel="noreferrer"
                target="_blank"
              >
                brittany chang
              </a>
            </span>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;

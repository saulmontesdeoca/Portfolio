import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import VerticalTab from "../../components/VerticalTab";

function debounce(fn, ms) {
  let timer;
  return (_) => {
    clearTimeout(timer);
    timer = setTimeout((_) => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

const Experience = () => {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }, 500);

    window.addEventListener("resize", debouncedHandleResize);

    return (_) => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  }, []);
  return (
    <section id="experience">
      <Container className="py-100 ml-5 mr-5">
        <Row>
          <Col sm={12} md={6}>
            <Row>
              <h2 className="section-subtitle">experience</h2>
            </Row>
          </Col>
          <Col sm={12} md={6} />
        </Row>
        <Row className="justify-content-around mt-5">
          <Col>
            {dimensions && dimensions.width < 850 ? (
              <VerticalTab size="sm" />
            ) : (
              <VerticalTab size="md" />
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Experience;

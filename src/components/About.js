import React from "react";
import "./About.scss";
import { Row, Col } from "react-bootstrap";

const About = () => {
  return (
    <div className="about">
      <Row>
        <Col className="title">
          <h1>About Meetup</h1>
        </Col>
      </Row>
      <Row>
        <Col className="content">
          <p>
            Come and meet other developers in the Javascript and it's library in
            the Greater Jakarta area
          </p>
          <p>Twitter: @JakartaJS</p>
        </Col>
      </Row>
    </div>
  );
};

export default About;

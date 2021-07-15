import React from "react";
import "./NextMeet.scss";
import { Container, Row, Col } from "react-bootstrap";

const NextMeet = () => {
  return (
    <div className="meetup">
      <Row>
        <Col className="title">
          <h1>Next Meetup</h1>
        </Col>
      </Row>
      <Row>
        <Container fluid>
          <h6>Awesome meetup and event</h6>
          <p>25 January 2019</p>
          <h6>Hello, JavaScript & Node.js Ninjas!</h6>
          <h6>
            The meetup format will contain some short stories and technical
            talks.
          </h6>
          <br />
          <h6>
            Remember to Bring a photo ID to get trough the building security
          </h6>
          <h6>. . . . .</h6>
          <h6>See you there</h6>
          <h6>Best, JakartaJS Organizer</h6>
        </Container>
      </Row>
    </div>
  );
};

export default NextMeet;

import React, { useState, useEffect } from "react";
import "./Hero.scss";
import { Container, Row, Col } from "react-bootstrap";
import logoHacktiv8 from "../assets/logo_hacktiv8.jpg";

const Hero = () => {
  const [users, setUsers] = useState({});
  const [location, setLocation] = useState({});

  useEffect(() => {
    fetch("https://swapi.dev/api/people/1")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  });

  useEffect(() => {
    fetch("https://swapi.dev/api/planets/1/")
      .then((res) => res.json())
      .then((data) => setLocation(data));
  });

  return (
    <div className="hero">
      <Container fluid>
        <Row>
          <Col md={2}>
            <img src={logoHacktiv8} alt="" />
          </Col>
          <Col>
            <h2>Hacktiv8 Meetup</h2>
            <Row>
              <Col md={1}>
                <h6>Location</h6>
                <h6>Members</h6>
                <h6>Organizer</h6>
              </Col>
              <Col md={2}>
                <h6>{location.name}</h6>
                <h6>{users.height}</h6>
                <h6>{users.name}</h6>
              </Col>
            </Row>
            <button>Join Us</button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;

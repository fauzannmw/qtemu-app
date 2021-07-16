import React, { useState, useEffect } from "react";
// import "./Hero.scss";
import "./Hero.css";
import { Container, Row, Col, Image } from "react-bootstrap";
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
    <Container fluid className="mt-3">
      <div className="hero" style={{ width: "90%", margin: "0 auto" }}>
        <Row>
          <Col lg={2}>
            {/* <img src={logoHacktiv8} alt="" /> */}
            <Image src={logoHacktiv8} fluid />
          </Col>
          <Col lg={10}>
            <h1>Hacktiv8 Meetup</h1>
          </Col>
        </Row>
      </div>
    </Container>
    // <div className="hero">
    //   <Row>
    //     <Container fluid>
    //       <Row>
    //         <Col md={2}>
    //           <img src={logoHacktiv8} alt="" />
    //         </Col>
    //         <Col>
    //           <h2>Hacktiv8 Meetup</h2>
    //           <Row>
    //             <Col md={1}>
    //               <h6>Location</h6>
    //               <h6>Members</h6>
    //               <h6>Organizer</h6>
    //             </Col>
    //             <Col md={2}>
    //               <h6>{location.name}</h6>
    //               <h6>{users.height}</h6>
    //               <h6>{users.name}</h6>
    //             </Col>
    //           </Row>
    //           <button>Join Us</button>
    //         </Col>
    //       </Row>
    //     </Container>
    //   </Row>
    // </div>
  );
};

export default Hero;

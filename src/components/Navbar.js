import React from "react";
import "./Navbar.scss";
import { Navbar, Nav } from "react-bootstrap";

const topNav = () => {
  return (
    <Navbar expand="lg" style={{ color: "#fff" }}>
      <Navbar.Brand href="/">QTemu</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link className="mx-2" href="/">
            Create Meetup
          </Nav.Link>
          <Nav.Link className="mx-2" href="/">
            Explore
          </Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          <Nav.Link className="mx-2" href="/">
            Login
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default topNav;

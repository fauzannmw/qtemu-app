import React, { useState, useEffect } from "react";
import "./Member.scss";
import { Container, Row, Col } from "react-bootstrap";
import logoHacktiv8 from "../assets/logo_hacktiv8.jpg";

const Member = () => {
  const [users, setUsers] = useState({});
  const [visible, setVisible] = useState(1);
  const [show, setShow] = useState(false);

  useEffect(() => {
    fetch("https://swapi.dev/api/people")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  });

  const showMoreItems = () => {
    if (!show) {
      setVisible(users.length);
      setShow(true);
    } else {
      setVisible(1);
      setShow(false);
    }
  };

  return (
    <div className="member">
      <Row>
        <Col className="title">
          <h1>Members</h1>
        </Col>
        <Col className="d-flex justify-content-end">
          {show ? (
            <a onClick={showMoreItems}>See all</a>
          ) : (
            <a onClick={showMoreItems}>Show less</a>
          )}
        </Col>
      </Row>
      {users.results &&
        users.results.slice(0, visible).map((user, idx) => (
          <Row key={user} style={{ marginBottom: "20px" }}>
            <Container fluid>
              <Row>
                <Col xs={6} md={1}>
                  <img src={logoHacktiv8} alt="" />
                </Col>
                <Col xs={6} md={11}>
                  <Row>
                    <h5>{user.name}</h5>
                  </Row>
                  <Row>
                    <Col md={2}>
                      <h6>Gender : {user.gender}</h6>
                    </Col>
                    <Col>
                      <h6>{user.length - idx} Others.</h6>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </Row>
        ))}
    </div>
  );
};

export default Member;

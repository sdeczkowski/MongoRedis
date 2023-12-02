import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./css/Homepage.css";
import Particles from "../components/Particle";
import { Database, DatabaseFill } from "react-bootstrap-icons";

function Homepage() {
  return (
    <Row className="bg-dark">
      <Col
        md={6}
        className="d-flex bg-dark text-light flex-direction-column align-items-center justify-content-center ">
        <div>
          <h1>Todos</h1>
          <p>Wybierz baze:</p>
          <LinkContainer to="/TodopageMongo">
            <Button variant="success">
              Mongo DB <Database size={25} />
              <i className="fas fa-comments home-message-icon"></i>
            </Button>
          </LinkContainer>
          <p></p>
          <LinkContainer to="/TodopageRedis">
            <Button variant="danger">
              Redis <DatabaseFill size={25} />
              <i className="fas fa-comments home-message-icon"></i>
            </Button>
          </LinkContainer>
        </div>
      </Col>
      <Col md={6} className="home__bg ">
        <Particles />
      </Col>
    </Row>
  );
}

export default Homepage;

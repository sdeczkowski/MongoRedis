import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Clipboard2Check } from "react-bootstrap-icons";
import "../pages/css/Navi.css";

function Navi() {
  return (
    <Navbar className="text-white navi__bg" expand="lg">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>
            <Clipboard2Check style={{ color: "white" }} size={50} />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto"></Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navi;

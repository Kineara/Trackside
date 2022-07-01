import React from "react";
import { Outlet, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {LinkContainer} from "react-router-bootstrap";

function Navigation() {
  return (
    <Navbar bg="light">
      <Navbar.Brand>F1 Trackr</Navbar.Brand>
      <Container>
        <Nav variant="tabs" defaultActiveKey="/home">
          <LinkContainer to="/"><Nav.Link>Home</Nav.Link></LinkContainer>
          <LinkContainer to="/results"><Nav.Link>Results</Nav.Link></LinkContainer>
          <LinkContainer to="/schedule"><Nav.Link>Schedule</Nav.Link></LinkContainer>
        </Nav>
        <Outlet />
      </Container>
    </Navbar>
  );
}

export default Navigation;

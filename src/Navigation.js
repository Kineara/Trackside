import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {LinkContainer} from "react-router-bootstrap";

function Navigation() {
  return (
    <Navbar bg="light">
      <Navbar.Brand>F1 Trackr</Navbar.Brand>
      <div>
        <Nav variant="tabs" defaultActiveKey="/home">
          <LinkContainer to="/"><Nav.Link>Home</Nav.Link></LinkContainer>
          <LinkContainer to="/drivers"><Nav.Link>Drivers</Nav.Link></LinkContainer>
          <LinkContainer to="/schedule"><Nav.Link>Schedule</Nav.Link></LinkContainer>
          <LinkContainer to="/results"><Nav.Link>Results</Nav.Link></LinkContainer>
        </Nav>
        
      </div>
    </Navbar>
  );
}

export default Navigation;

import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {LinkContainer} from "react-router-bootstrap";

function Navigation() {
  return (
    <Navbar bg="light">
      <Navbar.Brand>Trackside</Navbar.Brand>
      <div>
        <Nav variant="tabs" defaultActiveKey="/home">
          <LinkContainer to="/home"><Nav.Link>Home</Nav.Link></LinkContainer>
          <LinkContainer to="/drivers"><Nav.Link>Drivers</Nav.Link></LinkContainer>
          <LinkContainer to="/schedule"><Nav.Link>Schedule</Nav.Link></LinkContainer>
          <LinkContainer to="/results"><Nav.Link>Results</Nav.Link></LinkContainer>
          <LinkContainer to="/watchlist"><Nav.Link>WatchList</Nav.Link></LinkContainer>
        </Nav>
        
      </div>
    </Navbar>
  );
}

export default Navigation;

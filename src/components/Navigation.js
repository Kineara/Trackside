import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function Navigation() {
  return (
    <Navbar bg="light">
      <Navbar.Brand>Trackside</Navbar.Brand>
      <div>
        <Nav variant="tabs">
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/drivers">
            <Nav.Link>Drivers</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/schedule">
            <Nav.Link>Schedule</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/results">
            <Nav.Link>Results</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/watchlist">
            <Nav.Link>WatchList</Nav.Link>
          </LinkContainer>
        </Nav>
      </div>
    </Navbar>
  );
}

export default Navigation;

import React from "react";
import Navigation from "../Navigation";
import { Outlet } from "react-router-dom";
import Container from "react-bootstrap/Container";

function StatsPage() {
  return (
    <Container>
      <Navigation />
      <Outlet />
    </Container>
  );
}

export default StatsPage;

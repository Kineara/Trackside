import React from "react";
import { Outlet } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navigation from "../components/Navigation";

function StatsPage() {
  return (
    <Container>
      <Navigation />
      <Outlet />
    </Container>
  );
}

export default StatsPage;

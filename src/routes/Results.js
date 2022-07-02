import React from "react";
import Container from "react-bootstrap/Container";
import Accordion from "react-bootstrap/Accordion";
import ResultsFilter from "../ResultsFilter";

function Results({ pastEvents }) {
  return (
    <Container>
      <ResultsFilter />
    </Container>
  );
}

export default Results;

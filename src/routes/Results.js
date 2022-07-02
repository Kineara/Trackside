import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Accordion from "react-bootstrap/Accordion";
import ResultsFilter from "../ResultsFilter";

function Results() {
    const [formSelectedSeason, setFormSelectedSeason] = useState("Select a season");
    const [formSelectedType, setFormSelectedType] = useState("races");
    console.log(formSelectedType);

function getResultsHandler(event) {
    event.preventDefault();
    fetch("http://localhost:3004/schedule")
        .then(r => r.json())
        .then(data => console.log(data));
}

function seasonChangeHandler(event) {
    setFormSelectedSeason(event.target.value);
}

function radioChangeHandler(event) {
    setFormSelectedType(event.target.value);
}


  return (
    <Container>
      <ResultsFilter seasonSelection={formSelectedSeason} radioSelection={formSelectedType} getResultsHandler={getResultsHandler} seasonChangeHandler={seasonChangeHandler} radioChangeHandler={radioChangeHandler}/>
    </Container>
  );
}

export default Results;
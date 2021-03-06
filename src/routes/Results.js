import React, { useState } from "react";
import { Container, Table } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import ResultsFilter from "../components/ResultsFilter";

function Results({ seasonYears }) {
  const [formSelectedSeason, setFormSelectedSeason] =
    useState("Select a season");
  const [formSelectedType, setFormSelectedType] = useState("drivers");
  const [retrievedData, setRetrievedData] = useState([]);

  function getResultsHandler(event) {
    // Fetch data with selected form options from external API,
    // parse it to convert to JSX, and store in state
    event.preventDefault();

    const url = `https://v1.formula-1.api-sports.io/rankings/${formSelectedType}?season=${formSelectedSeason}`;

    fetch(url, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "api-formula-1.p.rapidapi.com",
        "x-rapidapi-key": "257203434be51bc7c354b3d3db85c138",
      },
    })
      .then((r) => r.json())
      .then((data) => setRetrievedData(parseRetrievedData(data.response)))
      .catch((err) => console.log(err));
  }

  function seasonChangeHandler(event) {
    setFormSelectedSeason(event.target.value);
  }

  function radioChangeHandler(event) {
    setFormSelectedType(event.target.value);
  }

  function parseRetrievedData(fetchedData) {
    switch (formSelectedType) {
      case "teams":
        const teamsData = fetchedData.map((data) => {
          return (
            <tr key={uuidv4()}>
              <td>{data.position}</td>
              <td>{data.team.name}</td>
              <td>{data.points}</td>
            </tr>
          );
        });
        return (
          <>
            <h3>Constructor's Championship Standings</h3>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Position</th>
                  <th>Team Name</th>
                  <th>Points</th>
                </tr>
              </thead>
              <tbody>{teamsData}</tbody>
            </Table>
          </>
        );

      case "drivers":
        const driversData = fetchedData.map((data) => {
          return (
            <tr key={uuidv4()}>
              <td>{data.position}</td>
              <td>{data.driver.name}</td>
              <td>{data.team.name}</td>
              <td>{data.points}</td>
            </tr>
          );
        });
        return (
          <>
            <h3>Driver's Championship Standings</h3>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Position</th>
                  <th>Driver Name</th>
                  <th>Team Name</th>
                  <th>Points</th>
                </tr>
              </thead>
              <tbody>{driversData}</tbody>
            </Table>
          </>
        );

      default:
        return null;
    }
  }

  return (
    <Container>
      <ResultsFilter
        seasonYears={seasonYears}
        seasonSelection={formSelectedSeason}
        radioSelection={formSelectedType}
        getResultsHandler={getResultsHandler}
        seasonChangeHandler={seasonChangeHandler}
        radioChangeHandler={radioChangeHandler}
      />
      {retrievedData}
    </Container>
  );
}

export default Results;

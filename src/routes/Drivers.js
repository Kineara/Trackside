import React, { useState } from "react";
import { Container, Accordion } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import DriversFilter from "../components/DriversFilter";
import TeamAccordion from "../components/TeamAccordion";

function Drivers({ seasonYears }) {
  const [drivers, setDrivers] = useState([]);
  const [filterSeason, setFilterSeason] = useState("Select a season");

  function getDriversHandler(event) {
    event.preventDefault();

    const url = `https://v1.formula-1.api-sports.io/rankings/drivers?season=${filterSeason}`;

    fetch(url, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "api-formula-1.p.rapidapi.com",
        "x-rapidapi-key": "257203434be51bc7c354b3d3db85c138",
      },
    })
      .then((r) => r.json())
      .then((data) => setDrivers(data.response))
      .catch((err) => console.log(err));
  }

  function getTeamNames() {
    return [...new Set(drivers.map((driver) => driver.team.name))];
  }

  return (
    <Container>
      <DriversFilter
        seasonYears={seasonYears}
        seasonValue={filterSeason}
        seasonChangeHandler={(e) => setFilterSeason(e.target.value)}
        getDriversHandler={getDriversHandler}
      />
      <Accordion>
        {getTeamNames().map((team) => (
          <TeamAccordion
            teamName={team}
            driversList={drivers.filter((driver) => driver.team.name === team)}
            key={uuidv4()}
          />
        ))}
      </Accordion>
    </Container>
  );
}

export default Drivers;

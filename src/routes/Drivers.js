import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import DriversFilter from "../DriversFilter";
import Accordion from "react-bootstrap/Accordion";
import TeamAccordion from "../TeamAccordion";
import { v4 as uuidv4 } from "uuid";

function Drivers({ seasonYears }) {
  const [drivers, setDrivers] = useState([]);
  const [teams, setTeams] = useState([]);
  const [filterSeason, setFilterSeason] = useState("Select a season");

  function seasonChangeHandler(event) {
    setFilterSeason(event.target.value);
  }

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

  useEffect(() => {
    function onlyUnique(value, index, self) {
      return self.indexOf(value) === index;
    }

    const teamNames = drivers.map((driver) => driver.team.name);
    const teamsFiltered = teamNames.filter(onlyUnique);
    setTeams(teamsFiltered);
  }, [drivers]);

  return (
    <Container>
      <DriversFilter
        seasonYears={seasonYears}
        seasonValue={filterSeason}
        seasonChangeHandler={seasonChangeHandler}
        getDriversHandler={getDriversHandler}
      />
      <Accordion>
        {teams.map((team) => (
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

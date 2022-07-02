import React, { useEffect, useState } from "react";
import DriverCard from "../DriverCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import driversData from "../testData/driversData";

function Drivers() {
  const [drivers, setDrivers] = useState([]);

  //   useEffect(() => {
  //     fetch("https://v1.formula-1.api-sports.io/rankings/drivers?season=2022", {
  //       method: "GET",
  //       headers: {
  //         "x-rapidapi-key": "257203434be51bc7c354b3d3db85c138",
  //         "x-rapidapi-host": "v1.formula-1.api-sports.io",
  //       },
  //       redirect: "follow",
  //     })
  //       .then((r) => r.json())
  //       .then((data) => postToServer(data.response, "drivers"));
  //   });

  // Temporary to avoid hitting the API too often

  useEffect(() => {
    setDrivers(driversData);
  }, []);

  //   function postToServer(data, endpoint) {
  //     fetch(`http://localhost:3004/${endpoint}`, {
  //       method: "PUT",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(data),
  //     });
  //   }

  const renderedDrivers = drivers.map((driver) => (
    <DriverCard driverStats={driver} />
  ));

  return (
    <Container>
      <Row xs={1} md={4} className="g-4">
        {renderedDrivers}
      </Row>
    </Container>
  );
}

export default Drivers;

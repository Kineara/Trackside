import React, { useEffect, useState } from "react";
import DriverCard from '../DriverCard';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";



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
  const tempDriversData = [
    {
      position: 1,
      driver: {
        id: 25,
        name: "Max Verstappen",
        abbr: "VER",
        number: 1,
        image: "https://media.api-sports.io/formula-1/drivers/25.png",
      },
      team: {
        id: 1,
        name: "Red Bull Racing",
        logo: "https://media.api-sports.io/formula-1/teams/1.png",
      },
      points: 175,
      wins: null,
      behind: null,
      season: 2022,
    },
    {
      position: 2,
      driver: {
        id: 10,
        name: "Sergio Perez",
        abbr: "PER",
        number: 11,
        image: "https://media.api-sports.io/formula-1/drivers/10.png",
      },
      team: {
        id: 1,
        name: "Red Bull Racing",
        logo: "https://media.api-sports.io/formula-1/teams/1.png",
      },
      points: 129,
      wins: null,
      behind: null,
      season: 2022,
    },
    {
      position: 3,
      driver: {
        id: 34,
        name: "Charles Leclerc",
        abbr: "LEC",
        number: 16,
        image: "https://media.api-sports.io/formula-1/drivers/34.png",
      },
      team: {
        id: 3,
        name: "Scuderia Ferrari",
        logo: "https://media.api-sports.io/formula-1/teams/3.png",
      },
      points: 126,
      wins: null,
      behind: null,
      season: 2022,
    },
    {
      position: 4,
      driver: {
        id: 51,
        name: "George Russell",
        abbr: "RUS",
        number: 63,
        image: "https://media.api-sports.io/formula-1/drivers/51.png",
      },
      team: {
        id: 5,
        name: "Mercedes-AMG Petronas",
        logo: "https://media.api-sports.io/formula-1/teams/5.png",
      },
      points: 111,
      wins: null,
      behind: null,
      season: 2022,
    },
    {
      position: 5,
      driver: {
        id: 24,
        name: "Carlos Sainz Jr",
        abbr: "SAI",
        number: 55,
        image: "https://media.api-sports.io/formula-1/drivers/24.png",
      },
      team: {
        id: 3,
        name: "Scuderia Ferrari",
        logo: "https://media.api-sports.io/formula-1/teams/3.png",
      },
      points: 102,
      wins: null,
      behind: null,
      season: 2022,
    },
  ];

  useEffect(() => {
    setDrivers(tempDriversData);
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

  const renderedDrivers = drivers.map((driver) => <DriverCard driverStats={driver} />)

  return (
    <Container>
        <Row xs={1} md={4} className="g-4">
        {renderedDrivers}
        </Row>
    </Container>
  )
}

export default Drivers;

import { React, useEffect, useState } from "react";
import CardGroup from "react-bootstrap/CardGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import EventCard from "../EventCard";

function Schedule() {
  const apiKey = "257203434be51bc7c354b3d3db85c138";

  const [scheduledEvents, setScheduledEvents] = useState([]);

  // useEffect(() => {
  //   fetch(
  //     "https://v1.formula-1.api-sports.io/races?season=2022", {
  //       method: 'GET',
  //       headers: {
  //           "x-rapidapi-key": "257203434be51bc7c354b3d3db85c138",
  //           "x-rapidapi-host": "v1.formula-1.api-sports.io"
  //       },
  //       redirect: 'follow'
  //     }
  //   )
  //     .then(r => r.json())
  //     .then(data => postToServer(data.response, "schedule"))
  // }, []);

  useEffect(() => {
    //Temporary to avoid hitting the API too often
    fetch("http://localhost:3004/schedule")
      .then((r) => r.json())
      .then((data) => setScheduledEvents(data));
  }, []);

  function postToServer(data, endpoint) {
    fetch(`http://localhost:3004/${endpoint}`, {
      method: "DELETE",
    }).then(() => {
      fetch(`http://localhost:3004/${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    });
  }

  return (
    <Container>
      <Row xs={1} md={2} className="g-4">
        
          {scheduledEvents.map((event) =>
            event.type === "Race" ? (
              <EventCard event={event} key={event.id} />
            ) : null
          )}
        
      </Row>
    </Container>
  );
}

export default Schedule;

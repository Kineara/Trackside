import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Accordion from "react-bootstrap/Accordion";
import Event from "../Event";
import { v4 as uuidv4 } from "uuid";

function Schedule({ currentDate, handleWatchClick }) {
  const [scheduledEvents, setScheduledEvents] = useState([]);

  function parseEvents(events) {
    // Filter out past events to only display future events in Schedule
    const futureEvents = events.filter((event) => event.date >= currentDate);
    const eventIds = [
      ...new Set(futureEvents.map((event) => event.competition.id)),
    ];
    return eventIds.map((eventId) => {
      return events.filter((event) => event.competition.id === eventId);
    });
  }

  useEffect(() => {
    fetch("https://v1.formula-1.api-sports.io/races?season=2022", {
      method: "GET",
      headers: {
        "x-rapidapi-key": "257203434be51bc7c354b3d3db85c138",
        "x-rapidapi-host": "v1.formula-1.api-sports.io",
      },
      redirect: "follow",
    })
      .then((r) => r.json())
      .then((data) => setScheduledEvents(parseEvents(data.response)));
  }, []);

  return (
    <Container>
      <div>Scheduled Events as of {currentDate}</div>
      <Accordion>
        {scheduledEvents.map((event) => (
          <Event
            eventInfo={event}
            handleWatchClick={handleWatchClick}
            key={uuidv4()}
          />
        ))}
      </Accordion>
    </Container>
  );
}

export default Schedule;

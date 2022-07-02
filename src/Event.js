import React from "react";
import Accordion from "react-bootstrap/Accordion";
import EventSessions from "./EventSessions";
import Button from 'react-bootstrap/Button'


function Event({ eventInfo }) {
  const [eventRace] = eventInfo.filter((event) => {
    return event.type === "Race";
  });

  const eventPractice = eventInfo.filter((event) => {
    return event.type.indexOf("Practice") !== -1;
  });

  const eventQuali = eventInfo.filter((event) => {
    return event.type.indexOf("Qualifying") !== -1;
  });

  function watchBtnHandler(individualEvent) {
    fetch("http://localhost:3004/watchedEvents", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(individualEvent)
    })
    .then(r => r.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
  }

  return (
    <Accordion.Item eventKey={eventRace.id}>
      <Accordion.Header>
        <b>{eventRace.date.slice(0, 10)}</b>..........{" "}
        {eventRace.competition.name}
      </Accordion.Header>
      <Accordion.Body>
        <div>
        <Button variant="primary" size="sm" onClick={() => watchBtnHandler(eventInfo)}>Watch Event</Button>
          <div>
            <b>Race Information:</b>
          </div>
          <div>Time: {eventRace.date.slice(11, 16)}</div>
          <div>
            Location: {eventRace.competition.location.city},{" "}
            {eventRace.competition.location.country}
          </div>
          <div>Track: {eventRace.circuit.name}</div>
          <div>
            Distance: {eventRace.laps.total} laps ({eventRace.distance})
          </div>
          <div>Status: {eventRace.status}</div>
        </div>
        <img src={eventRace.circuit.image} alt={eventRace.circuit.name} />
        <Accordion>
          <Accordion.Item eventKey="practiceSessions">
            <Accordion.Header>Practice Sessions</Accordion.Header>
            <Accordion.Body>
              <EventSessions
                sessionInfo={eventPractice.sort(
                  (a, b) => a.type[0] - b.type[0]
                )}
                key={eventPractice.id}
              />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="qualiSessions">
            <Accordion.Header>Qualifying Sessions</Accordion.Header>
            <Accordion.Body>
              <EventSessions
                sessionInfo={eventQuali.sort((a, b) => a.type[0] - b.type[0])}
                key={eventQuali.id}
              />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Accordion.Body>
    </Accordion.Item>
  );
}

export default Event;

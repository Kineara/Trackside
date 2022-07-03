import React from "react";
import Accordion from "react-bootstrap/Accordion";
import EventSessions from "./EventSessions";
import Button from "react-bootstrap/Button";

function Event({
  eventInfo,
  watchBtnText = "Add to Watchlist",
  watchBtnType = "success",
  handleWatchClick,
}) {
  const [eventRace] = eventInfo.filter((event) => {
    return event.type === "Race";
  });

  const eventPractice = eventInfo.filter((event) => {
    return event.type.indexOf("Practice") !== -1;
  });

  const eventQuali = eventInfo.filter((event) => {
    return event.type.indexOf("Qualifying") !== -1;
  });

  return (
    <Accordion.Item eventKey={eventRace.id}>
      <Accordion.Header>
        <b>{eventRace.date.slice(0, 10)}</b>..........{" "}
        {eventRace.competition.name}
      </Accordion.Header>
      <Accordion.Body>
        <div>
          <Button
            variant={watchBtnType}
            size="sm"
            onClick={() => handleWatchClick(eventInfo)}
          >
            {watchBtnText}
          </Button>
          <img src={eventRace.circuit.image} alt={eventRace.circuit.name} />
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

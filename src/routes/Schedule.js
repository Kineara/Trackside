import React from "react";
import { Container, Accordion } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import Event from "../components/Event";

function Schedule({ currentDate, handleWatchClick, scheduledEvents }) {
  //console.log(scheduledEvents);
  return (
    <Container>
      <h5>Scheduled Events as of {currentDate}</h5>
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

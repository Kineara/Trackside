import React from "react";
import Container from "react-bootstrap/Container";
import Accordion from "react-bootstrap/Accordion";
import Event from "../Event";
import { v4 as uuidv4 } from "uuid";

function Schedule({ currentDate, handleWatchClick, scheduledEvents }) {
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

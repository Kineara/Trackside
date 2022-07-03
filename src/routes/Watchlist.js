import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import Container from "react-bootstrap/Container";
import Event from "../Event";
import { v4 as uuidv4 } from "uuid";

function Watchlist({ handleRemoveClick, watchedEventsInfo }) {

  return (
    <Container>
      <div>My Watched Events</div>
      <Accordion>
        {watchedEventsInfo.map((event) => (
          <Event
            eventInfo={event}
            key={uuidv4()}
            watchBtnText={"Remove from Watchlist"}
            watchBtnType={"danger"}
            handleWatchClick={() => handleRemoveClick(event[0].competition.id)}
          />
        ))}
      </Accordion>
    </Container>
  );
}

export default Watchlist;

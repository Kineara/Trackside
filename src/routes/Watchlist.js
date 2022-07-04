import React from "react";
import { Accordion, Container } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import Event from "../components/Event";

function Watchlist({ handleRemoveClick, watchedEventsInfo }) {
  //console.log(watchedEventsInfo);
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

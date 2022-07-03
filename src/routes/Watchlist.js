import React, { useEffect, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Container from "react-bootstrap/Container";
import Event from "../Event";
import { v4 as uuidv4 } from "uuid";



function Watchlist() {
    const [watchedEvents, setWatchedEvents] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3004/watchedEvents")
        .then(r => r.json())
        .then(data => setWatchedEvents(data));
    }, [])

  return (
    <Container>
      <div>My Watched Events</div>
      <Accordion>
        {watchedEvents.map(event => <Event eventInfo={event} watchBtnText={"Remove"} key={uuidv4()} />)}
      </Accordion>
    </Container>
  )
}

export default Watchlist;

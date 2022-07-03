import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import Container from "react-bootstrap/Container";
import Event from "../Event";
import { v4 as uuidv4 } from "uuid";

function Watchlist({ watchedEvents }) {
  const [savedEvents, setSavedEvents] = useState([]);

  function getEventInfo() {
    watchedEvents.forEach((event) => {
      fetch(
        `https://v1.formula-1.api-sports.io/races?competition=${event.id}&season=${event.season}`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-key": "257203434be51bc7c354b3d3db85c138",
            "x-rapidapi-host": "v1.formula-1.api-sports.io",
          },
          redirect: "follow",
        }
      )
        .then((r) => r.json())
        .then((data) => setSavedEvents([...savedEvents, data.response]));
    });
  }

  useEffect(() => {
    getEventInfo();
  }, [watchedEvents]);

  return (
    <Container>
      <div>My Watched Events</div>
      <Accordion>
        {savedEvents.map((event) => (
          <Event eventInfo={event} key={uuidv4()} watchBtnText={"Remove from Watchlist"} watchBtnType={"danger"} />
        ))}
      </Accordion>
    </Container>
  );
}

export default Watchlist;

import React from "react";
import Container from "react-bootstrap/Container";
import Accordion from "react-bootstrap/Accordion";
import Event from "../Event";

function Schedule( { currentDate, futureEvents}) {
  //const [scheduledEvents, setScheduledEvents] = useState([]);

  // useEffect(() => {
  //   fetch("https://v1.formula-1.api-sports.io/races?season=2022", {
  //     method: "GET",
  //     headers: {
  //       "x-rapidapi-key": "257203434be51bc7c354b3d3db85c138",
  //       "x-rapidapi-host": "v1.formula-1.api-sports.io",
  //     },
  //     redirect: "follow",
  //   })
  //     .then((r) => r.json())
  //     //.then((data) => postToServer(data.response, "schedule"))
  //     .then((data) => setScheduledEvents(data.response))
  // }, []);

  // useEffect(() => {
  //   //Temporary to avoid hitting the API too often
  //   fetch("http://localhost:3004/schedule")
  //     .then((r) => r.json())
  //     .then((data) => setScheduledEvents(data));
  // }, []);

  // function postToServer(data, endpoint) {
  //   fetch(`http://localhost:3004/${endpoint}`, {
  //     method: "PUT",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   });
  // }


  // Get array of competition IDs

  

  return (
    <Container>
      <div>Scheduled Events as of {currentDate}</div>
      <Accordion>
        {futureEvents.map((event) => <Event eventInfo={event} />)}
      </Accordion>
    </Container>
  );
}

export default Schedule;

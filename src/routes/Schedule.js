import { React, useEffect } from "react";
import EventCard from "../EventCard";

function Schedule() {
  const apiKey = "257203434be51bc7c354b3d3db85c138";
  console.log("schedule loaded");

  // useEffect(() => {
  //   fetch(
  //     "https://v1.formula-1.api-sports.io/races?season=2022", {
  //       method: 'GET',
  //       headers: {
  //           "x-rapidapi-key": "257203434be51bc7c354b3d3db85c138",
  //           "x-rapidapi-host": "v1.formula-1.api-sports.io"
  //       },
  //       redirect: 'follow'
  //     }
  //   )
  //     .then(r => r.json())
  //     .then(data => postToServer(data.response, "schedule"))
  // }, []);

  useEffect(() => {
    //Temporary to avoid hitting the API too often
    fetch("http://localhost:3004/schedule")
      .then(r => r.json())
      .then(data => displayEvents(data))
  }, [])

  function postToServer(data, endpoint) {
    fetch(`http://localhost:3004/${endpoint}`, {
      method: "DELETE",
    }).then(() => {
      fetch(`http://localhost:3004/${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    });
  }

  function displayEvents(eventArray) {
    const eventCards = eventArray.map((event) => {
      console.log(event.id)
    });
  }

  return (
    <div>
      <h2>Schedule!</h2>
    </div>
  );
}

export default Schedule;

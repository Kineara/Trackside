import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Drivers from "./routes/Drivers";
import Schedule from "./routes/Schedule";
import Results from "./routes/Results";
import Watchlist from "./routes/Watchlist";
import Home from "./routes/Home";
import StatsPage from "./routes/StatsPage";

function App() {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const yyyy = today.getFullYear();
  const currentDate = yyyy + "-" + mm + "-" + dd;

  // Competitions retrieved from the external API share an ID that's common to all
  // events pertaining to that competition, i.e., practice, qualifying, and the race
  const [watchedCompetitions, setWatchedCompetitions] = useState([]);
  const [seasonYears, setSeasonYears] = useState([]);
  const [scheduledEvents, setScheduledEvents] = useState([]);

  function parseWatchedCompetitions() {
    let watchList = [];

    for (const competition of watchedCompetitions) {
      for (const event of scheduledEvents) {
        if (event[0].competition.id === competition.id) {
          watchList.push(event);
        }
      }
    }
    return watchList;
  }

  useEffect(() => {
    fetch("https://v1.formula-1.api-sports.io/races?season=2022", {
      method: "GET",
      headers: {
        "x-rapidapi-key": "257203434be51bc7c354b3d3db85c138",
        "x-rapidapi-host": "v1.formula-1.api-sports.io",
      },
      redirect: "follow",
    })
      .then((r) => r.json())
      .then((data) => setScheduledEvents(parseEvents(data.response)));
  }, []);

  function parseEvents(events) {
    // Filter out past events to only display future events in Schedule
    const futureEvents = events.filter((event) => event.date >= currentDate);
    const eventIds = [
      ...new Set(futureEvents.map((event) => event.competition.id)),
    ];
    return eventIds.map((eventId) => {
      return events.filter((event) => event.competition.id === eventId);
    });
  }

  useEffect(() => {
    // Synchronize watchedCompetitions with current data in local server on initial page load
    fetch("http://localhost:3004/watchedEvents")
      .then((r) => r.json())
      .then((data) => setWatchedCompetitions(data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    // Get available seasons on page load
    fetch("https://v1.formula-1.api-sports.io/seasons", {
      method: "GET",
      headers: {
        "x-rapidapi-key": "257203434be51bc7c354b3d3db85c138",
        "x-rapidapi-host": "v1.formula-1.api-sports.io",
      },
      redirect: "follow",
    })
      .then((r) => r.json())
      .then((data) => setSeasonYears(data.response))
      .catch((error) => console.log(error));
  }, []);

  function handleWatchClick(competitionArray) {
    const compId = {
      id: competitionArray[0].competition.id,
    };

    function checkStateForId() {
      for (const obj of watchedCompetitions) {
        if (compId.id === obj.id) {
          return true;
        }
      }
      return false;
    }

    if (!checkStateForId()) {
      fetch("http://localhost:3004/watchedEvents", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(compId),
      })
        .then((r) => r.json())
        .then((data) => setWatchedCompetitions([...watchedCompetitions, data]))
        .catch((err) => console.log(err));
    }
  }

  function handleRemoveClick(eventId) {
    fetch(`http://localhost:3004/watchedEvents/${eventId}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then((d) => console.log(d));
    const newWatchedCompetitions = watchedCompetitions.filter(
      (competition) => competition.id !== eventId
    );
    setWatchedCompetitions(newWatchedCompetitions);
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StatsPage />}>
            <Route path="/" element={<Home />} />
            <Route
              path="drivers"
              element={<Drivers seasonYears={seasonYears} />}
            />
            <Route
              path="schedule"
              element={
                <Schedule
                  currentDate={currentDate}
                  handleWatchClick={handleWatchClick}
                  scheduledEvents={scheduledEvents}
                />
              }
            />
            <Route
              path="results"
              element={<Results seasonYears={seasonYears} />}
            />
            <Route
              path="watchlist"
              element={
                <Watchlist
                  watchedEventsInfo={parseWatchedCompetitions()}
                  handleRemoveClick={handleRemoveClick}
                />
              }
            />
            <Route
              path="*"
              element={
                <main>
                  <p>There's nothing here!</p>
                </main>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

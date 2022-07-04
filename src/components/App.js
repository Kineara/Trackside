import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Drivers from "../routes/Drivers";
import Schedule from "../routes/Schedule";
import Results from "../routes/Results";
import Watchlist from "../routes/Watchlist";
import Home from "../routes/Home";
import StatsPage from "../routes/StatsPage";

function App() {
  const [watchedCompetitions, setWatchedCompetitions] = useState([]);
  const [seasonYears, setSeasonYears] = useState([]);
  const [scheduledEvents, setScheduledEvents] = useState([]);

  useEffect(() => {
    // Get scheduled event data on render
    fetch("https://v1.formula-1.api-sports.io/races?season=2022", {
      method: "GET",
      headers: {
        "x-rapidapi-key": "257203434be51bc7c354b3d3db85c138",
        "x-rapidapi-host": "v1.formula-1.api-sports.io",
      },
      redirect: "follow",
    })
      .then((r) => r.json())
      .then((data) => setScheduledEvents(data.response));
  }, []);

  useEffect(() => {
    // Synchronize watchedCompetitions with current data in local server on render
    fetch(`${process.env.REACT_APP_API_URL}/watchedEvents`)
      .then((r) => r.json())
      .then((data) => setWatchedCompetitions(data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    // Get available seasons on render
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

  function getCurrentDate() {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const yyyy = today.getFullYear();
    const currentDate = yyyy + "-" + mm + "-" + dd;
    return currentDate;
  }

  function parseWatchedCompetitions() {
    // Filters scheduledEvents data by event ID to return events on watchlist

    let watchList = [];

    for (const comp of watchedCompetitions) {
      watchList.push(
        scheduledEvents.filter(
          (indEvent) => indEvent.competition.id === comp.id
        )
      );
    }
    return watchList;
  }

  function parseEvents(events) {
    // Filter events by date to return future events
    const futureEvents = events.filter(
      (event) => event.date >= getCurrentDate()
    );
    const eventIds = [
      ...new Set(futureEvents.map((event) => event.competition.id)),
    ];
    return eventIds.map((eventId) => {
      return events.filter((event) => event.competition.id === eventId);
    });
  }

  function handleWatchClick(competitionArray) {
    // Checks if event is already being watched, and adds to watchlist if not
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
      fetch(`${process.env.REACT_APP_API_URL}/watchedEvents`, {
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
    fetch(`${process.env.REACT_APP_API_URL}/watchedEvents/${eventId}`, {
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
                  currentDate={getCurrentDate()}
                  handleWatchClick={handleWatchClick}
                  scheduledEvents={parseEvents(scheduledEvents)}
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

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
  const [watchedCompetitionIds, setWatchedCompetitionIds] = useState([]);

  useEffect(() => {
    // Synchronize watchedCompetitionIds with current data in local server on initial page load
    console.log("useEffect state sync fired");
    fetch("http://localhost:3004/watchedEvents")
      .then((r) => r.json())
      .then((data) => setWatchedCompetitionIds(data));
  }, []);

  function handleWatchClick(competitionArray) {
    console.log(competitionArray);
    const compId = { id: competitionArray[0].competition.id, season: competitionArray[0].season };

    function checkStateForId() {
      for (const obj of watchedCompetitionIds) {
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
        .then((data) =>
          setWatchedCompetitionIds([...watchedCompetitionIds, data])
        )
        .catch((err) => console.log(err));
    }
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StatsPage />}>
            <Route path="/" element={<Home />} />
            <Route path="drivers" element={<Drivers />} />
            <Route
              path="schedule"
              element={
                <Schedule
                  currentDate={currentDate}
                  handleWatchClick={handleWatchClick}
                />
              }
            />
            <Route path="results" element={<Results />} />
            <Route path="watchlist" element={<Watchlist watchedEvents={watchedCompetitionIds} />} />
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

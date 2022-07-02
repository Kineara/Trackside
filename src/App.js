import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Drivers from "./routes/Drivers";
import Schedule from "./routes/Schedule";
import Results from "./routes/Results";
import Watchlist from "./routes/Watchlist";
import Home from "./routes/Home";
import StatsPage from "./routes/StatsPage";
import scheduleData from "./testData/schedData";

function App() {
  const [fetchedEvents, setFetchedEvents] = useState([]);
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  const yyyy = today.getFullYear();
  const currentDate = yyyy + "-" + mm + "-" + dd;

  useEffect(() => {
    setFetchedEvents(scheduleData);
  }, []);

  function getFutureEvents() {
    const futureEvents = fetchedEvents.filter(
      (event) => event.date >= currentDate
    );
    const eventIds = [
      ...new Set(futureEvents.map((event) => event.competition.id)),
    ];
    return eventIds.map((eventId) => {
      return fetchedEvents.filter((event) => event.competition.id === eventId);
    });
  }

  function getPastEvents() {
    const pastEvents = fetchedEvents.filter(
      (event) => event.date <= currentDate
    );
    const eventIds = [
      ...new Set(pastEvents.map((event) => event.competition.id)),
    ];
    return eventIds.map((eventId) => {
      return fetchedEvents.filter((event) => event.competition.id === eventId);
    });
  }

  console.log(getPastEvents());

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StatsPage />}>
            <Route path="home" element={<Home />} />
            <Route path="drivers" element={<Drivers />} />
            <Route
              path="schedule"
              element={
                <Schedule
                  currentDate={currentDate}
                  futureEvents={getFutureEvents()}
                />
              }
            />
            <Route
              path="results"
              element={
                <Results
                  currentDate={currentDate}
                  pastEvents={getPastEvents()}
                />
              }
            />
            <Route path="watchlist" element={<Watchlist />} />
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
      {/* <Container>
        <Navigation />
        <Outlet />
      </Container> */}
    </>
  );
}

export default App;

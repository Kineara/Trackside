import React from "react";
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
  const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  const yyyy = today.getFullYear();
  const currentDate = yyyy + "-" + mm + "-" + dd;

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
                />
              }
            />
            <Route path="results" element={<Results />} />
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
    </>
  );
}

export default App;

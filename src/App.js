import React from 'react';
//import Navbar from './Navbar';
//import StatsPage from './StatsPage';

import { Outlet, Link } from "react-router-dom";
//import './App.css';

function App() {
  return (
    <>
      <h1>MotoGP Trackr</h1>
      <p>A MotoGP Stats Tracking App</p>
      <p>Powered by Caffeine(tm)</p>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/results">Results</Link>
        <Link to="/schedule">Schedule</Link>
      </nav>
      <Outlet />
    </>
  );
}

export default App;

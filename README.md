# Trackside
## A Formula One Stat Tracking App

### External API for all data
    https://api-sports.io/documentation/formula-1/v1

### Experience
Overall goal
    - View Formula One stats filtered by seasons, with navigation to pull up data on individual drivers, teams, tracks, sessions, and upcoming events

### Instructions
- Fork and clone the repo to your local environment
- Fork and clone the server repo (https://github.com/Kineara/json-server-template)
- From the server repo, use the command ```npm run dev``` to start the local server
- From the Trackside repo, use the command ```npm start```

### Component Structure
- index
    - App (router) (stateful)
        - StatsPage
            - Navigation
        - Home
        - Drivers (stateful)
            - DriversFilter
            - TeamAccordion
                - DriverCard
        - Results (stateful)
            - ResultsFilter
        - Schedule
            - Event
                - EventSessions
        - Watchlist
            - Event
                - EventSessions

### To-Do List
- Clean up styling
- Refactor App.js for more clarity
- State audit
- Home component styling changes



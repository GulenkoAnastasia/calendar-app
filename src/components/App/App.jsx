import React, { useEffect, useState } from 'react';
import {
  Switch,
  Route,
  useHistory,
  Redirect,
} from "react-router-dom";

import './App.css';
import { 
  MonthPage, 
  NotesContext, 
  DayPage, 
  Year } from "../index";

export const App = function () {

  const history = useHistory();

  const [notes, setNotes] = useState({});

  useEffect(() => {
    console.log("Load from the localStorage");
    setNotes({
      "2021-01-31": "MyNotes",
    });
    
  }, []);
  

  const handleYearChange = function (yearNumber) {
    history.push(`/year/${yearNumber}`);
  };

  const handleMonthChange = function(monthNumber) {
    history.push(`${monthNumber}`);
}

  return (
    <NotesContext.Provider value={notes}>
    <div className="app">
      <Switch>
        <Route
          path="/year/:yearNumber/month/:monthNumber/day/:day"
          render={({ match }) => (
            <DayPage
              year={match.params.yearNumber}
              month={match.params.monthNumber}
              day={match.params.day}
            ></DayPage>
          )}
        ></Route>

        <Route
          path="/year/:yearNumber/month/:monthNumber"
          render={({ match }) => (
            <MonthPage
              year={match.params.yearNumber}
              month={match.params.monthNumber}
              onMonthChange={handleMonthChange}
            />
          )}
        ></Route>

        <Route
          path="/year/:yearNumber"
          render={(props) => (
            <Year
              year={props.match.params.yearNumber}
              onYearChange={handleYearChange}
            />
          )}
        />

        <Route path="/today">
          <Redirect to={`/year/${new Date().getFullYear()}/month/${new Date().getMonth()}/day/${new Date().getDate()}`} />
        </Route>

        <Route path="/">
          <Redirect to={`/year/${new Date().getFullYear()}`} />
        </Route>
      </Switch>
    </div>
    </NotesContext.Provider>
  );
};

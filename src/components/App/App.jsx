import React from 'react';
import { Year } from '../index';
import './App.css';
import { DayPage } from "../index";
import { MonthPage } from "../index";

import {
  Switch,
  Route,
  useHistory,
  Redirect,
} from "react-router-dom";

export const App = function () {

  const history = useHistory();

  const handleYearChange = function (yearNumber) {
    history.push(`/year/${yearNumber}`);
  };

  const handleMonthChange = function(monthNumber) {
    history.push(`${monthNumber}`);
}

  return (
    <div className="app">
      <Switch>
        <Route
        path="/year/:yearNumber/month/:monthNumber/day/:day" render={({match}) => (
          <DayPage 
          year={match.params.yearNumber}
          month={match.params.monthNumber}
          day={match.params.day}
          ></DayPage>
        )}
        >
        </Route>

        <Route
          path="/year/:yearNumber/month/:monthNumber" render={({ match }) => (
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

        <Route path="/">
          <Redirect to={`/year/${new Date().getFullYear()}`} />
        </Route>
      </Switch>
    </div>
  );
};

import React from "react";
import { Year, Month, Day } from "./index.js"; 
import "../styles.css"

export const App = function() {
  const [currentYear, setYear] = React.useState(2021)

  const changeToPrevYear = function() {
    setYear(currentYear - 1);
  }
  const changeToNextYear = function() {
    setYear(currentYear + 1);
  }
  const date = new Date(currentYear, 10, 10);
  const month = date.toLocaleString('default', { month: 'long' });

  return (
    <div className="app">
      <Year
      number={currentYear}
      onPrevClick={changeToPrevYear}
      onNextClick={changeToNextYear}
      />
      <Month
      number={month}
      />
      <Day
      number={18}
      />
    </div>
  );
}


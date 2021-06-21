import React from "react";
import { Year, Month, Day } from "./index.js"; 
import "../styles.css"

export const App = function() {
  const [currentYear, setYear] = React.useState(2021)

  const handleYearChange = function(yearNumber) {
    setYear(yearNumber);
  }

  const date = new Date(currentYear, 10, 10);
  const month = date.toLocaleString('default', { month: 'long' });

  return (
    <div className="app">
      <Year
      number={currentYear}
      onYearChange={handleYearChange}
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


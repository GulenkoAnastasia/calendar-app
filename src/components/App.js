import React from "react";
import { Year, Month, Day } from "./index.js"; 
import "../styles.css"

export const App = function() {
  const [currentYear, setYear] = React.useState(2021);
  const [currentMonth, setMonth] = React.useState(0);

  const handleYearChange = function(yearNumber) {
    setYear(yearNumber);
  }

  const date = new Date(currentYear, currentMonth, 10);
  const month = date.toLocaleString('en', { month: 'long' });

  const handleMonthChange = (month) => {
    setMonth(month)

  }
  
  return (
    <div className="app">
      <Year number={currentYear} onYearChange={handleYearChange} />
      <Month
        number={currentMonth}
        monthName={month}
        onMonthChange={handleMonthChange}
      />
      <Day currentDate={date} />
    </div>
  );
}


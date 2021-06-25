import React from 'react';
import { Year } from '../index';
import './App.css';

export const App = function () {
  const [currentYear, setYear] = React.useState(2021);

  const handleYearChange = function (yearNumber) {
    setYear(yearNumber);
  };

  return (
    <div className="app">
      <Year year={currentYear} onYearChange={handleYearChange} />
    </div>
  );
};

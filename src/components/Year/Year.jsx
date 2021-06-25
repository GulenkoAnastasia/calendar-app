import React from "react";
import { Month } from "../index";
import "./Year.css"

export const Year = function (props) {

  const {year, onYearChange} = props;
  const monthCount = 12;
  const months = [];
  let i = 0;
  while (i < monthCount) {
    months.push(i);
    i = i + 1;
  }
   
  return (
  <div>
    <div className="year">
      <button onClick={() => {onYearChange(year - 1)}}></button>
      <div>{year}</div>
      <button onClick={() => {onYearChange(year + 1)}}></button>
    </div>

    <div className ="month-list">
      {months.map((month) => {
        return  <Month year={year} key={month} month={month}></Month>
      })}
    </div>
  </div>
  );
};
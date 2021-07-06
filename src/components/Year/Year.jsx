import React from "react";
import { Month } from "../index";
import "./Year.css";
import { useHistory } from "react-router";


export const Year = function (props) {

  const history = useHistory();

  const {year} = props;
  const monthCount = 12;
  const months = [];

  let i = 0;
  while (i < monthCount) {
    months.push(i);
    i = i + 1;
  }

  function handleYearChange (event) {
    history.push(`/year/${event.target.value}`);
  }
   
  return (
  <div>
    <div className="year">
      <input type="number" value={year} onChange={handleYearChange}></input>
    </div>

    <div className ="month-list">
      {months.map((month) => {
        return (
          <Month year={year} key={month} month={month}></Month>
        )
      })}
    </div>
  </div>
  );
};
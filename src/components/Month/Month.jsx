import React from "react";
import "./Month.css";
import { DaysName } from "../index";
import { Link } from "react-router-dom";
import { DayList } from "../index";


export const Month = function({year, month}) {
  const date = new Date(year, month);
  const monthName = date.toLocaleString("en", {month: "long"});

  return (
    <div className="month">
     <Link to={`${year}/month/${month}`}>
      <div className="monthName">{monthName}</div>
      </Link>
      <DaysName />
      <DayList year={year} month={month}></DayList>
    </div>
  );
}
import './Daylist.css';
import { Link } from "react-router-dom";
import { Day } from "../index"

export const DayList = ({ day, year, month }) => {

  const days = {
    arrOfDaysInMonth: [],
    arrOfDaysInPrevMonth: [],
    arrOfDaysInNextMonth: [],
  };

  const cellsCount = 42;

  const daysInCurrentMonth = new Date(year, month + 1, 0).getDate();
  let daysInPrevMonth = new Date(year, month, 0).getDate();

  let i = 1;
    while (i < daysInCurrentMonth + 1) {
    days.arrOfDaysInMonth.push(i);
    i = i + 1;
 }

  let firstDayInMonth = new Date(year, month, 1).getDay();
  while(firstDayInMonth > 0) {
     days.arrOfDaysInPrevMonth.unshift(daysInPrevMonth);
     firstDayInMonth = firstDayInMonth - 1;
     daysInPrevMonth = daysInPrevMonth - 1;
  }

  const daysInNextMonth = cellsCount - days.arrOfDaysInMonth.length - days.arrOfDaysInPrevMonth.length;

  let j = 1;
  while(j <= daysInNextMonth) {
      days.arrOfDaysInNextMonth.push(j);
      j = j + 1;
  }

  return (
    <div className="day-list">
      {days.arrOfDaysInPrevMonth.map((day, index) => {
        return (
          <Link to="/">
            <Day year={year} month={month} day={day}></Day>
          </Link>
        );
      })}
      {days.arrOfDaysInMonth.map((day, index) => {
        return (
          <Link to={`/year/${year}/month/${month}/day/${day}`}>
            <Day position={"current"} year={year} month={month} day={day}></Day>
          </Link>
        );
      })}
      {days.arrOfDaysInNextMonth.map((day, index) => {
        return (
          <Link to="/">
            <Day year={year} month={month} day={day}></Day>
          </Link>
        );
      })}
    </div>
  );
}
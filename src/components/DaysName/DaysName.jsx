import "./DaysName.css";
import {createDaysOfWeek } from "../index"

export const DaysName = () => {

  const daysOfWeek = createDaysOfWeek();

  return (
    <div className="dayName">
      {daysOfWeek.map((day, index) => {
        return <div key={index}>{day}</div>
      })}
    </div>
  );
}

import { DaysName } from "./index"

export const Day = (props) => {

const days = {
    date: {
      currentDate: props.currentDate,
      month: props.currentDate.getMonth(), //не знаю почему this не работает тут
      year: props.currentDate.getFullYear(),
    },
    arrOfDaysInMonth: [],
    arrOfDaysInPrevMonth: [],
    arrOfDaysInNextMonth: [],
  };

 const cellsCount = 42;

 const daysInCurrentMonth = new Date(days.date.year, days.date.month + 1, 0).getDate();
 let daysInPrevMonth = new Date(days.date.year, days.date.month, 0).getDate();
 
 
 let i = 1;
 while (i < daysInCurrentMonth + 1) {
    days.arrOfDaysInMonth.push(i);
    i = i + 1;
 }

 let firstDayInMonth = new Date(days.date.year, days.date.month, 1).getDay();
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
   <div>
     <DaysName></DaysName>
     <div className="days">
       {days.arrOfDaysInPrevMonth.map((day) => {
         return <div className="cell grey">{day}</div>;
       })}
       {days.arrOfDaysInMonth.map((day) => {
           return <div className="cell red">{day}</div>;
       })}
       {days.arrOfDaysInNextMonth.map((day) => {
           return <div className="cell grey">{day}</div>;
       })}
     </div>
   </div>
 );
}
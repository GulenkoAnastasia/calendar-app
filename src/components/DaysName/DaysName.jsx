import "./DaysName.css"
export const DaysName = () => {
  const days = ['Su', 'Mo', 'Th', 'We', 'Tu', 'Fr', 'Sa'];
  return (
    <div className="dayName">
      {days.map((day, index) => {
        return <div key={index}>{day}</div>
      })}
    </div>
  );
}

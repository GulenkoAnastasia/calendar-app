import "./Day.css";
export const Day = function({position, year, month, day}) {
    const date = new Date (year, month, day).toLocaleDateString();
    const today = new Date().toLocaleDateString();
    

    if (position === "current") {
        if(date === today) {
          return <div className={"cell today"}>{day}</div>;
        }
    return (
        <div className={"cell red"}>{day}</div>

        )
    } else {
        return(
            <div className={"cell grey"}>{day}</div>
        )
    }
}
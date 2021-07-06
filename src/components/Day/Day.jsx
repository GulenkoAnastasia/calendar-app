import { useContext } from "react";
import { NotesContext } from "../index";
import "./Day.css";

export const Day = function({position, year, month, day}) {
    const date = new Date (year, month, day);
    const today = new Date();

    const notes = useContext(NotesContext);
    const note = notes[date.toISOString().substr(0, 10)];

    if (position === "current") {
        if(date.toLocaleDateString() === today.toLocaleDateString()) {
          return <div className={"cell today"}>{day}</div>;
        }
        if(note) {
          return <div className={"cell notes"}>{day}</div>;
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
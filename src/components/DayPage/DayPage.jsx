import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { NotesContext } from "../../tools/notesProvider";
import "./DayPage.css";
import {storage} from "../index";

export const DayPage = function(props) {
    const date = new Date(props.year, props.month, props.day);
    const dateText = date.toLocaleDateString();

    const notes = useContext(NotesContext);
    const note = notes[date.toISOString().substr(0, 10)];

    const [memo, setMemo] = useState(note);

   
    function handleChangeMemo (event) {
      setMemo(event.target.value);
    }

    function handleBtnClick() {
      storage(date.toISOString().substr(0, 10), memo);
    }

    return (
      <div>
        <div>{dateText}</div>
        <input type="textarea" onChange={handleChangeMemo} value={memo}/>
        <Link to="/"><button onClick={handleBtnClick}>Save</button></Link>
      </div>
    );
}
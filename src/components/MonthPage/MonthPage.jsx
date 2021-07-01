import { Month } from "../index";
import "./MonthPage.css"

export const MonthPage = function (props) {

    return (
      <div>
        <div className="changemonth">
          <button onClick={() => {props.onMonthChange(Number(props.month) - 1)}}>prev</button>
          <button onClick={() => {props.onMonthChange(Number(props.month) + 1)}}>next</button>
        </div>
        <div className="singlemonth">
          <Month year={props.year} month={props.month}></Month>
        </div>
      </div>
    );
}

import { useHistory } from "react-router-dom";
import { createLongMonthNames } from "../../tools/date.tools";
import { Month } from "../index";
import "./MonthPage.css"

export const MonthPage = function (props) {

  const history = useHistory();

  function handleMonthChange (event) {
    history.push(`/year/${props.year}/month/${event.target.value}`)
  }

  const monthNames = createLongMonthNames();

    return (
      <div>        
        <select className="monthslist" onChange={handleMonthChange} value={props.month}>
          {monthNames.map((month, index) => {
           return <option value={index}>{month}</option>
          })}
        </select>
        <div className="singlemonth">
          <Month year={props.year} month={props.month}></Month>
        </div>
      </div>
    );
}

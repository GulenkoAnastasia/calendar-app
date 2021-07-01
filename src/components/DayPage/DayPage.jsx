import "./DayPage.css";

export const DayPage = function(props) {
    const date = new Date(props.year, props.month, props.day);
    const dateText = date.toLocaleDateString();
    console.log(date)
    return (
      <div>
        <div>{dateText}</div>
        <input type="textarea" />
      </div>
    );
}
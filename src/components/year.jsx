import React from "react";

export const Year = function(props) {
    const handlePrevClick = () => {
        props.onYearChange(props.number - 1);
    }
    const handleNextClick = () => {
        props.onYearChange(props.number + 1);
    }
   
    return (
        <div>
       <button onClick={handlePrevClick}></button>
       <div style={{fontWeight: 600, fontSize: "20px"}}>{props.number}</div>
       <button onClick={handleNextClick}></button>
        </div>

    )
};
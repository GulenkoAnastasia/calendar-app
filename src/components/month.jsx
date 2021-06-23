import React from "react";

export const Month = function(props) {
    const handlePrevClick = () => {
        props.onMonthChange(props.number - 1);
    }

    const handleNextClick = () => {
        props.onMonthChange(props.number + 1);
    }

    return (
        <div className="month">
            <span onClick={handlePrevClick} style={{cursor: "pointer"}}>&#8592;</span>
            {props.monthName}
           <span onClick={handleNextClick} style={{cursor: "pointer"}}>&#8594;</span> 
        </div>

    )
}
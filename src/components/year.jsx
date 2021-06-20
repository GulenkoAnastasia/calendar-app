import React from "react";

export const Year = function(props) {
    const handlePrevClick = () => {
        props.onPrevClick(props.number);
    }
    const handleNextClick = () => {
        props.onNextClick(props.number);
    }
   
    return (
        <div>
       <button onClick={handlePrevClick}></button>
       <div style={{fontWeight: 600, fontSize: "20px"}}>{props.number}</div>
       <button onClick={handleNextClick}></button>
        </div>

    )
};
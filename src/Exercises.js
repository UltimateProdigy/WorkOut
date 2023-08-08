import React from "react";

const Exercises = (props) => {
    return (
        <div className="Card">
            <h6 className="font-semibold text-4xl pr-16 mb-6">{props.name}</h6>
            <h3>{props.calories}</h3>
        </div>

    )
}
export default Exercises;
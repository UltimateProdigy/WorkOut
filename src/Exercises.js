import React from "react";

const Exercises = ({name, calories, img}) => {
    return (
        <div className="wholeExercise rounded-lg" style={{ backgroundImage: `url(${img})`,
                                                backgroundRepeat: "no-repeat"
        }}>
            <div className="Card_1">
                <h6 className="font-semibold text-4xl pr-16 mb-6">{name}</h6>
                <h3>{calories}</h3>
            </div>
        </div>
    );
}
export default Exercises;
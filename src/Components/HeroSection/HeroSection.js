import React from "react";
import "./HeroSection.css";


const HeroSection = () => {
    return (
        <div>
        <section className="heroSection">
            <div className='intro'>
                <div className='green'>New</div>
                <h3 className="intensity">High Intensity workout to burn calories</h3>
            </div>
            <div>
                <h1 className="cardio">Cardio <br/>Exercise </h1>
            </div>
            <div>
                <h3 className="lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>
            </div>
            <div>
                <button className="getStarted">Get Started</button>
                <button className="preview">Preview</button>
            </div>
            <div className='timer'>
                <h3 className='timeValue'>38:15</h3>
                <p className='time'>TIME</p>
            </div>
            <div className='timer-2'>
                <h3 className='timeValue-2'>165</h3>
                <p className='time'>Est Calories</p>
            </div>
            <div className="exercises">
                <h1>Popular Exercises</h1>
                <button>SEE MORE EXERCISES</button>  
            </div>
        </section>
        </div>
    )
}
export default HeroSection;
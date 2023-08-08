import React from "react";
import "./App.css";
import Navbar  from "./Navbar";
import Herosection from"./HeroSection";
import Exercises from "./Exercises";


const App = () => {
    return (
    <div className="app">
      <Navbar />
      <Herosection />
      <Exercises name="Treadmill" calories="250 est calories"/>
      <Exercises name="Stretching" calories="210 est calories"/>
      <Exercises name="Yoga" calories="150 est calories" />
      <Exercises name="Running" calories="120 est calories" />
      <Exercises name="Lifting" calories="80 est calories"/>
      <Exercises name="PushUp" calories="300 est calories" />
    </div>
  );
}

export default App;
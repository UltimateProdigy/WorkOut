import React from "react";
import "./App.css";
import Navbar  from "./Navbar";
import Herosection from"./HeroSection";
import Exercises from "./Exercises";
import Secondsection from "./secondSection";


const App = () => {
    return (
    <div className="app">
      <Navbar />
      <Herosection />
      <div className="grid grid-cols-3 gap-12">
      <Exercises name="Threadmill" calories="125 est calories" img="./img/Threadmill.png"/>
      <Exercises name="Running" calories="125 est calories" img="./img/Running.png"/>
      <Exercises name="Yoga" calories="125 est calories" img="./img/yoga.png"/>
      <Exercises name="Stretching" calories="125 est calories" img="./img/Stretching.png"/>
      <Exercises name="Lifting" calories="125 est calories" img="./img/Lifting.png"/>
      <Exercises name="PushUp" calories="125 est calories" img="./img/PushUp.png"/>
      </div>
      <Secondsection />
      
    </div>
  );
}

export default App;
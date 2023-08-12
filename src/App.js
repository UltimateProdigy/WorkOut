import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Herosection from "./Components/HeroSection/HeroSection";
import Exercises from "./Components/Exercises/Exercises";
import Secondsection from "./Components/SecondSection/secondSection";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Registeration/Register.js";



const App = () => {
    return (
    <div className="app">
      <Navbar />
      {/**<Herosection />
      <div className="grid grid-cols-3 gap-12">
        <Exercises name="Threadmill" calories="125 est calories" img="./img/Threadmill.png"/>
        <Exercises name="Running" calories="125 est calories" img="./img/Running.png"/>
        <Exercises name="Yoga" calories="125 est calories" img="./img/yoga.png"/>
        <Exercises name="Stretching" calories="125 est calories" img="./img/Stretching.png"/>
        <Exercises name="Lifting" calories="125 est calories" img="./img/Lifting.png"/>
        <Exercises name="PushUp" calories="125 est calories" img="./img/PushUp.png"/>
      </div>
    <Secondsection />**/}

      
    </div>
  );
}

export default App;
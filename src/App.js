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
      <Exercises />
      <Secondsection />
      
    </div>
  );
}

export default App;
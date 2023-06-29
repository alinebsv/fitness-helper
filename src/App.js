import React from "react";
import ProteinIntake from "./ProteinIntake";
import CalorieIntake from "./CalorieIntake";
import WeightConverter from "./WeightConverter";


import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
      <h1>Fitness Helper</h1>
      <h2>Calculate your protein and calorie intake</h2>
      <div className="row">
        <div className="col-6 mt-4 intakeCalculator">
          <h3>Calculate your ideal <span className="highlight">protein</span> intake</h3>
          <ProteinIntake />
          </div>
        <div className="col-6 mt-4 intakeCalculator">
        <h3>Calculate your ideal <span className="highlight">calorie</span> intake</h3>

          <CalorieIntake />
          </div>
          </div>
    </div>
    <div className="row">
      <div className="col text-center mt-5 weightConverter d-flex justify-content-center">
        
        <WeightConverter />
      </div>
    </div>
    </div>
    );
}

export default App;

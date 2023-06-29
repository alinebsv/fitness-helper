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
        <div className="col-sm-6 mt-4 intakeCalculator">
          <h3>Calculate your ideal <span className="highlight">protein</span> intake</h3>
          <ProteinIntake />
          </div>
        <div className="col-sm-6 mt-4 intakeCalculator">
        <h3>Calculate your ideal <span className="highlight">calorie</span> intake</h3>

          <CalorieIntake />
          </div>
          </div>
    </div>
    <div className="row">
      <div className="col-sm text-center mt-5 weightConverter d-flex justify-content-center">
        
        <WeightConverter />
      </div>
    </div>
    <footer>This project was developed by Ernesto Ibarra and coded by <a href="https://github.com/alinebsv" target="_blank" rel="noreferrer">Aline Vieira</a></footer>
    </div>
    );
}

export default App;

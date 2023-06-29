import React, { useState } from "react";
import "./ConverterForms.css";

export default function CalorieIntake() {
let [weight, setWeight] = useState(0);
let [calories, setCalories] = useState(0)
let [cutCalories, setCutCalories] = useState(0);
let [loaded, setLoaded] = useState(false);

function captureWeight(event) {
setWeight(event.target.value);
}

function handleSubmit(event) {
    event.preventDefault();
    let calculatedCalories = Math.round(weight * 15);
    let calculatedCutCalories = calculatedCalories - 400;
    setCalories(calculatedCalories);
    setCutCalories(calculatedCutCalories);
    setLoaded(true);
}

function returnToHome(event) {
    event.preventDefault();
    setLoaded(false);
}

if (loaded) {
    return (
        <div className="ResponsePage">
            <div className="CalculatedText">Daily <span className="resultText">maintenance</span> calorie intake: <span className="resultText">{calories} calories</span> . 
            <br /> Daily <span className="resultText">weight loss</span> calorie intake: <span className="resultText">{cutCalories} calories</span>.</div>
            <button className="btn btn-primary recalculateBtn" onClick={returnToHome}>Recalculate</button>
        </div>
    );
} else {
    return(
        <div className="Converter">
            <form onSubmit={handleSubmit}>
                <label for="weight" className="enterWeight">Enter your weight in <strong>lbs</strong></label>
                <br />
            <input type="number" className="weightForm" onChange={captureWeight}></input>
            <button type="submit" className="btn btn-primary calculateBtn">Calculate</button>
            </form>
        </div>
    )}
}
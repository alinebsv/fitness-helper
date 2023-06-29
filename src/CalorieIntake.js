import React, { useState } from "react";
import "./CalorieIntake.css";

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
            <div className="CalculatedCalories">Your daily calorie intake to maintain your weight of {weight}lb is of {calories} calories. For weight loss, your ideal daily calorie intake is of {cutCalories} calories.</div>
            <button className="btn btn-primary" onClick={returnToHome}>Recalculate</button>
        </div>
    );
} else {
    return(
        <div className="CalorieIntake">
            <form onSubmit={handleSubmit}>
                <label for="weight" className="enterWeight">Enter your weight in <strong>lbs</strong></label>
                <br />
            <input type="number" className="weightForm" onChange={captureWeight}></input>
            <button type="submit" className="btn btn-primary calculateBtn">Calculate</button>
            </form>
        </div>
    )}
}
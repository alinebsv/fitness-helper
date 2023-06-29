import React, { useState } from "react";
import "./ConverterForms.css"

export default function ProteinIntake() {
let [weight, setWeight] = useState(null);
let [loaded, setLoaded] = useState(false);
let [protein, setProtein] = useState(0);

    function captureWeight(event) {
        setWeight(event.target.value);
    }
    function handleSubmit(event) {
        event.preventDefault();
        let calculatedProtein = Math.round(weight * 0.8);
        setProtein(calculatedProtein);
        setLoaded(true);
    }

    function returnToHome(event){
        event.preventDefault();
        setLoaded(false);
    }

    if (loaded) {
        return (
            <div className="ResponsePage">
            <div className="CalculatedText">Your daily protein intake should be of <span className="resultText">{protein}g</span> per day for your weight of <span className="resultText">{weight}lb</span></div>
            <button className="btn btn-primary recalculateBtn" onClick={returnToHome}>Recalculate</button></div>);
    }
    return(
        <div className="Converter">
            <form onSubmit={handleSubmit}>
                <label for="weight" className="enterWeight">Enter your weight in <strong>lbs</strong></label>
                <br />
            <input type="number" className="weightForm" onChange={captureWeight}></input>
            <button type="submit" className="btn btn-primary calculateBtn">Calculate</button>
            </form>
        </div>
    )
}
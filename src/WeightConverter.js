import React, { useState } from "react";
import "./WeightConverter.css"

export default function WeightConverter() {
    let [weight, setWeight] = useState(0);
    let [lb, setLb] = useState(0);
    let [loaded, setLoaded] = useState(false);

    function captureWeight(event) {
        setWeight(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        let calculatedLb = Math.round(weight * 2.205);
        setLb(calculatedLb);
        setLoaded(true);
    }

    function returnToHome(event) {
        event.preventDefault();
        setLoaded(false);
    }

    if (loaded) {
        return (
            <div className="CalculatedPage">
                <div className="CalculatedLbs">Your weight is {lb}lbs.</div>
                <button className="btn btn-primary" onClick={returnToHome}>Recalculate</button>

            </div>
        )
    }
    return (
        <div className="WeightConverter">
            <form onSubmit={handleSubmit}>
                <label for="weight" className="enterWeight">Enter your weight in kg</label>
                <input type="number" className="weightForm" onChange={captureWeight}></input>
                <button type="submit" className="btn btn-primary calculateBtn">Convert!</button>
            </form>
        </div>
    );
}
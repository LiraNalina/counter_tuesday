import React, {useState} from 'react';
import './App.css';
import {Tablo} from "./components/Tablo/Tablo";
import {Settings} from "./components/Settings/Settings";
import {Buttons} from "./components/Buttons/Buttons";

function App() {

    let startNumber = () => Number(localStorage.getItem("startValue"))
    let maxNumber = () => Number(localStorage.getItem("maxValue"))

    let [startValue, setStartValue] = useState<number>(startNumber)
    let [maxValue, setMaxValue] = useState<number>(maxNumber)

    let setStartNumber = () => {
        localStorage.setItem("startValue", JSON.stringify(startValue))
    }
    let setMaxNumber = () => {
        localStorage.setItem("maxValue", JSON.stringify(maxValue))
    }

    let [min, setMin] = useState(0)
    let [max, setMax] = useState(10)
    let [num, setNum] = useState(startValue) //startNumber
    let [error, setError] = useState("")

    function incrementNumber() {
        if (num <= maxValue) {
            setNum(num = num + 1)
        } else if (num > maxValue && num <= max) {
            setError("incorrect value")
        }
    }

    function resetNumber() {
        setNum(startValue)
    }

    const setValues = () => {
        setStartNumber()
        setMaxNumber()
    }

    return (
        <div className="App">

            <Settings
                maxValue={maxValue}
                startValue={startValue}
                setStartValue={setStartValue}
                setMaxValue={setMaxValue}
                max={max}
                min={min}/>

            <Tablo
                num={num}
                maxValue={maxValue}
                startValue={startValue}
                error={error}
                max={max}
                min={min}/>

            <Buttons max={max}
                     maxValue={maxValue}
                     min={min}
                     num={num}
                     onClickIncrButtonHandler={incrementNumber}
                     onClickResetHandler={resetNumber}
                     startValue={startValue}
                     setValues={setValues}/>
        </div>
    )
}

export default App;

import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./Counter";
import {Settings} from "./Settings";


function App() {

    let [count, setCount] = useState<number>(0)
    let [error, setError] = useState<boolean>(false)

    let [starValue, setStarValue] = useState<number>(Number(localStorage.getItem('max')))
    let [maxValue, setMaxValue] = useState<number>(Number(localStorage.getItem('start')))

    let [inputValueError, setInputValueError] = useState<boolean>(false)

    useEffect(() => errorCheck(), [count, maxValue])
    const errorCheck = () => count === maxValue || starValue >= maxValue ? setError(true) : setError(false)

    const changeCount = () => {
        if (error === false) {
            setCount(count + 1)
        }
    }

    const resetCount = () => {
        setCount(starValue);
        setError(false)
    }

    const setSettings = (start: number, max: number) => {
        setStarValue(start)
        setMaxValue(max)
        setCount(start)

    }

    return (
        <div className="App">
            <Counter inputValueError={inputValueError}
                     starValue={starValue}
                     count={count}
                     changeCount={changeCount}
                     resetCount={resetCount}
                     error={error}
                     setError={setError}
                     maxValue={maxValue}
            />
            <Settings
                starValue={starValue}
                inputValueError={inputValueError}
                setInputValueError={setInputValueError}
                setSettings={setSettings}
            />
        </div>
    );
}

export default App;

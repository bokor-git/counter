import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./Counter";
import {Settings} from "./Settings";

function App() {

    let [count, setCount] = useState<number>(0)
    let [error, setError] = useState<boolean>(false)

    //count===5?setError(true):setError(false) ERROR maximum render loop

    useEffect(() => errorCheck(), [count])
    const errorCheck = () => count === maxValue ? setError(true) : setError(false)

    const changeCount = () => {
        if (error === false) {
            setCount(count + 1)
        }
    }

    const resetCount = () => {
        setCount(starValue);
        setError(false)
    }

    let [starValue, setStarValue] = useState<number>(0)
    let [maxValue, setMaxValue] = useState<number | null>(null)

    const setSettings = (start: number, max: number | null) => {
        setStarValue(start)
        setMaxValue(max)
        setCount(start)
    }

    return (
        <div className="App">
            <Counter starValue={starValue}
                     count={count}
                     changeCount={changeCount}
                     resetCount={resetCount}
                     error={error}
                     setError={setError}
                     maxValue={maxValue}
            />
            <Settings
                setSettings={setSettings}
            />
        </div>
    );
}

export default App;

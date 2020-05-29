import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./Counter";
import {Settings} from "./Settings";

function App() {

    let [count, setCount] = useState<number>(0)
    let [error, setError] = useState<boolean>(false)

    //count===5?setError(true):setError(false) ERROR maximum render loop

    useEffect(() => errorCheck(), [count])
    const errorCheck = () => count + starValue === maxValue ? setError(true) : setError(false)

    const changeCount = () => {
        if (error === false) {
            setCount(count + 1)
        }
    }

    const resetCount = () => {
        setCount(0);
        setError(false)
    }


    let [starValue, setStarValue] = useState<number>(0)
    let [maxValue, setMaxValue] = useState<number>(0)


    const setStart = (value: number) => setStarValue(value)
    const setMax = (value: number) => setMaxValue(value)


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
                setStart={setStart}
                setMax={setMax}
            />
        </div>
    );
}

export default App;

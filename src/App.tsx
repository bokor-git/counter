import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./Counter";
import {Settings} from "./Settings";


function App() {

//=================> Data From LocalStorage
    let storageStartValue = Number(localStorage.getItem('start'))
    let storageMaxValue = Number(localStorage.getItem('max'))

//=================> Counter State
    let [count, setCount] = useState<number>(0)
    let [error, setError] = useState<boolean>(false)
    let [starValue, setStarValue] = useState<number>(storageStartValue)
    let [maxValue, setMaxValue] = useState<number>(storageMaxValue)

//=================> Settings Error State
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
        localStorage.setItem("start", start.toString());
        localStorage.setItem("max", max.toString());
    }

    // return (
    //     <div className="App">
    //         <Counter inputValueError={inputValueError}
    //                  starValue={starValue}
    //                  count={count}
    //                  changeCount={changeCount}
    //                  resetCount={resetCount}
    //                  error={error}
    //                  setError={setError}
    //                  maxValue={maxValue}
    //         />
    //        <Settings
    //             starValue={starValue}
    //             inputValueError={inputValueError}
    //             setInputValueError={setInputValueError}
    //             setSettings={setSettings}
    //             storageStartValue={storageStartValue}
    //             storageMaxValue={storageMaxValue}
    //         />
    //     </div>
    // );
}

export default App;

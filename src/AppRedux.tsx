import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./Counter";
import {Settings} from "./Settings";
import {AppStateType} from "./state/store";
import {useDispatch, useSelector} from "react-redux";
import {
    increaseCountAC,
    resetCountAC,
    setCountStartValueAC,
    setMaxValueAC,
    setStartValueAC
} from "./state/counter-reducer";


function AppRedux() {

//=================> Data From LocalStorage

//=================> Counter State
    let count = useSelector<AppStateType, number>(state => state.counter.count)
    let dispatch = useDispatch()
    let [error, setError] = useState<boolean>(false)
    let starValue = useSelector<AppStateType, number>(state => state.counter.starValue)
    let maxValue = useSelector<AppStateType, number>(state => state.counter.maxValue)
    let storageStartValue = starValue
    let storageMaxValue = maxValue
//=================> Settings Error State
    let [inputValueError, setInputValueError] = useState<boolean>(false)

    useEffect(() => errorCheck(), [count, maxValue])
    const errorCheck = () => count === maxValue || starValue >= maxValue ? setError(true) : setError(false)

    const changeCount = () => {
        if (error === false) {
            dispatch(increaseCountAC())
        }

    }
    const resetToStartValue = () => dispatch(resetCountAC(starValue))
    const resetCount = () => {
        resetToStartValue()
        setError(false)
    }
    const setSettings = (start: number, max: number) => {
        dispatch(setCountStartValueAC(start))
        dispatch(setMaxValueAC(max))
        dispatch(setStartValueAC(start))
        localStorage.setItem("start", start.toString());
        localStorage.setItem("max", max.toString());
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
                storageStartValue={storageStartValue}
                storageMaxValue={storageMaxValue}
            />
        </div>
    );
}

export default AppRedux;

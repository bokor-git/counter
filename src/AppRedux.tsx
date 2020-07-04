import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./Counter";
import {Settings} from "./Settings";
import {AppStateType} from "./state/store";
import {useDispatch, useSelector} from "react-redux";
import {increaseCountAC} from "./state/counter-reducer";


function AppRedux() {

//=================> Data From LocalStorage
    //let storageStartValue = Number(localStorage.getItem('start'))
    //let storageMaxValue = Number(localStorage.getItem('max'))

//=================> Counter State
    let count = useSelector<AppStateType, number>(state => state.counter.count)
    const storageStartValue = useSelector<AppStateType, number>(state => state.counter.starValue)
    const storageMaxValue = useSelector<AppStateType, number>(state => state.counter.maxValue)
    let dispatch = useDispatch()
    //let [count, setCount] = useState<number>(0)
    let [error, setError] = useState<boolean>(false)
    let [starValue, setStarValue] = useState<number>(storageStartValue)
    let [maxValue, setMaxValue] = useState<number>(storageMaxValue)

//=================> Settings Error State
    let [inputValueError, setInputValueError] = useState<boolean>(false)

    useEffect(() => errorCheck(), [count, maxValue])
    const errorCheck = () => count === maxValue || starValue >= maxValue ? setError(true) : setError(false)

    const changeCount = () => {
        dispatch(increaseCountAC())
    }

    const resetCount = () => {
        //dispatch(increaseCountAC())
        setError(false)
    }

    const setSettings = (start: number, max: number) => {
        setStarValue(start)
        setMaxValue(max)
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

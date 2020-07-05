import React, {ChangeEvent, useEffect, useState} from "react";
import {Button} from "./Button";
import {setMaxValueAC, setStartValueAC} from "./state/counter-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./state/store";

type SettingsPropsType = {
    setInputValueError: (value: boolean) => void
    inputValueError: boolean
}

export function Settings({setInputValueError, inputValueError}: SettingsPropsType) {
    let maxValue = useSelector<AppStateType, number>(state => state.counter.maxValue)
    let startValue = useSelector<AppStateType, number>(state => state.counter.startValue)

    let dispatch = useDispatch()

    useEffect(() => settings(), [])

    const settings = () => {
        dispatch(setMaxValueAC(maxInputValue))
        dispatch(setStartValueAC(startInputValue))
        localStorage.setItem("start", startInputValue.toString());
        localStorage.setItem("max", maxInputValue.toString());
    }

    let [maxInputValue, setMaxInputValue] = useState<number>(maxValue || 0)
    let [startInputValue, setStartInputValue] = useState<number>(startValue || 0)

    if (startInputValue >= maxInputValue || startInputValue < 0) {
        setInputValueError(true)
    } else setInputValueError(false)


    const setMax = (e: ChangeEvent<HTMLInputElement>) => setMaxInputValue(Number(e.currentTarget.value))
    const setStart = (e: ChangeEvent<HTMLInputElement>) => setStartInputValue(Number(e.currentTarget.value))

    const setButtonDisabled = maxInputValue === maxValue && startInputValue === startValue;

    return <div className="counter">
        <div className="screen-settings">
            <div className={inputValueError ? "input-settings-error input-settings" : "input-settings"}>
                <span>max value:</span>
                <input value={maxInputValue} type="number" step={1} onChange={setMax}/></div>
            <div className={inputValueError ? "input-settings-error input-settings" : "input-settings"}>
                <span>start value:</span>
                <input value={startInputValue} type="number" step={1} onChange={setStart}/></div>
        </div>
        <div className="controls">
            <Button onClick={settings} disabled={setButtonDisabled || inputValueError} title={"SET"}/>
        </div>
    </div>

}
import React, {ChangeEvent, useEffect, useState} from "react";
import {Button} from "./Button";

type SettingsPropsType = {
    setSettings: (start: number, max: number) => void
    setInputValueError: (value: boolean) => void
    inputValueError: boolean
    starValue: number
    storageStartValue:number,
    storageMaxValue: number
}

export function Settings({setSettings, setInputValueError, inputValueError,storageStartValue,storageMaxValue}: SettingsPropsType) {


    useEffect(() => settings(), [])

    let [maxInputValue, setMaxInputValue] = useState<number>(storageMaxValue||0)
    let [startInputValue, setStartInputValue] = useState<number>(storageStartValue||0)


    if (startInputValue >= maxInputValue || startInputValue < 0) {
        setInputValueError(true)
    } else setInputValueError(false)

    const settings = () => setSettings(startInputValue, maxInputValue)
    const setMax = (e: ChangeEvent<HTMLInputElement>) => setMaxInputValue(Number(e.currentTarget.value))
    const setStart = (e: ChangeEvent<HTMLInputElement>) => setStartInputValue(Number(e.currentTarget.value))

    const setButtonDisabled = maxInputValue===storageMaxValue&&startInputValue===storageStartValue;

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
            <Button onClick={settings} disabled={setButtonDisabled||inputValueError} title={"SET"}/>
        </div>
    </div>

}
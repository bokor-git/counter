import React, {ChangeEvent, useEffect, useState} from "react";

type SettingsPropsType = {
    setSettings: (start: number, max: number) => void
    setInputValueError: (value: boolean) => void
    inputValueError: boolean
    starValue: number
}

export function Settings({setSettings, setInputValueError, inputValueError}: SettingsPropsType) {

    useEffect(() => settings(), [])

    let [maxInputValue, setMaxInputValue] = useState<number>(Number(localStorage.getItem('max')))
    let [startInputValue, setStartInputValue] = useState<number>(Number(localStorage.getItem('start')))

    if (startInputValue >= maxInputValue || startInputValue < 0) {
        setInputValueError(true)
    } else setInputValueError(false)

    const settings = () => {
        setSettings(startInputValue, maxInputValue)
        localStorage.setItem("start", startInputValue.toString());
        localStorage.setItem("max", maxInputValue.toString());
    }
    const setMax = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxInputValue(Number(e.currentTarget.value))
    }
    const setStart = (e: ChangeEvent<HTMLInputElement>) => {
        setStartInputValue(Number(e.currentTarget.value))
    }

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
            <button
                disabled={maxInputValue === Number(localStorage.getItem('max')) && startInputValue === Number(localStorage.getItem('start'))}
                onClick={settings}>SET
            </button>
        </div>
    </div>

}
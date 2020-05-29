import React, {ChangeEvent, useState} from "react";

type SettingsPropsType = {
    setSettings: (start: number, max: number | null) => void
}

export function Settings({setSettings}: SettingsPropsType) {


    let [maxInputValue, setMaxInputValue] = useState<number | null>(null)
    let [startInputValue, setStartInputValue] = useState<number>(0)

    const settings = () => {
        setSettings(startInputValue, maxInputValue)
    }

    const setMax = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxInputValue(Number(e.currentTarget.value))
    }
    const setStart = (e: ChangeEvent<HTMLInputElement>) => {
        setStartInputValue(Number(e.currentTarget.value))
    }

    return <div className="counter">
        <div className="screen-settings">
            <div className="input-settings"><span>max value:</span>
                <input type="number" step={1} onChange={setMax}/></div>
            <div className="input-settings"><span>start value:</span>
                <input type="number" step={1} onChange={setStart}/></div>
        </div>
        <div className="controls">
            <button onClick={settings}>SET</button>
        </div>
    </div>

}
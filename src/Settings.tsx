import React, {ChangeEvent} from "react";

type SettingsPropsType = {
    setStart: (value: number) => void
    setMax: (value: number) => void
}


export function Settings({setStart, setMax}: SettingsPropsType) {



    const max = (e: ChangeEvent<HTMLInputElement>) => {
        setMax(Number(e.currentTarget.value))
    }
    const start = (e: ChangeEvent<HTMLInputElement>) => {
        setStart(Number(e.currentTarget.value))
    }

    return <div className="counter">
            <div className="screen-settings">
                <div className="input-settings"><span>max value:</span>
                    <input type="number" step={1} onChange={max} /></div>
                <div className="input-settings"><span>start value:</span>
                    <input type="number" step={1} onChange={start}/></div>
            </div>
            <div className="controls">
                <button>SET</button>
            </div>
    </div>

}
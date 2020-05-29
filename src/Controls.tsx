import React from "react";


type ControlsPropsType = {
    changeCount: () => void
    resetCount: () => void
    error: boolean
    count: number
    maxValue: number | null
    starValue: number
}

function Controls({changeCount, resetCount, error, count, maxValue, starValue}: ControlsPropsType) {
    return <div className="controls">
        <button disabled={count === maxValue} onClick={changeCount}>INC</button>
        <button disabled={count === starValue} onClick={resetCount}>RESET</button>
    </div>

}

export default Controls
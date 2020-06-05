import React from "react";
import {Button} from "./Button";


type ControlsPropsType = {
    changeCount: () => void
    resetCount: () => void
    error: boolean
    count: number
    maxValue: number
    starValue: number
}

function Controls({changeCount, resetCount, error, count, maxValue, starValue}: ControlsPropsType) {
    return <div className="controls">
        <Button disabled={count === maxValue || error} onClick={changeCount}  title={"INC"}/>
        <Button disabled={count === starValue} onClick={resetCount} title={"RESET"}/>
    </div>
}

export default Controls
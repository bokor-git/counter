import React from "react";
import {Button} from "./Button";
import {increaseCountAC, resetCountAC} from "./state/counter-reducer";
import {useDispatch} from "react-redux";


type ControlsPropsType = {
    setCountIsDone: (countIsDone: boolean) => void
    countIsDone: boolean
    count: number
    maxValue: number
    starValue: number
    inputValueError: boolean
}

function Controls({countIsDone, setCountIsDone, count, maxValue, starValue, inputValueError}: ControlsPropsType) {

    let dispatch = useDispatch()
    const resetCount = () => {
        dispatch(resetCountAC())
        setCountIsDone(false)
    }
    const changeCount = () => {
        if (countIsDone === false) {
            dispatch(increaseCountAC())
        }

    }
    return <div className="controls">
        <Button disabled={count === maxValue || countIsDone || inputValueError} onClick={changeCount} title={"INC"}/>
        <Button disabled={count === starValue || inputValueError} onClick={resetCount} title={"RESET"}/>
    </div>
}

export default Controls
import React from "react";

type ScreenPropsType = {
    count: number
    error: boolean
    starValue: number
    maxValue: number
    inputValueError: boolean

}

function Screen({count, error, starValue, maxValue, inputValueError}: ScreenPropsType) {
    return <div className={`${error || inputValueError ? "error-screen" : "screen"}`}>
        {inputValueError ? "Incorrect values!" : count}

    </div>


}

export default Screen
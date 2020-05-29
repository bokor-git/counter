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
        <div>
            {starValue === 0 && maxValue === 0 ? <div className="start">Set settings!</div>
                : inputValueError ? "Incorrect values!" : count}
        </div>
    </div>
}

export default Screen
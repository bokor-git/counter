import React from "react";

type ScreenPropsType = {
    count: number
    countIsDone: boolean
    starValue: number
    maxValue: number
    inputValueError: boolean
}

function Screen({count, countIsDone, starValue, maxValue, inputValueError}: ScreenPropsType) {
    return <div className={`${countIsDone || inputValueError ? "error-screen" : "screen"}`}>
        <div>
            {starValue === 0 && maxValue === 0 ?
                <div className="start">Set settings!</div>
                : inputValueError ? "Incorrect values!" : count}
        </div>
    </div>
}

export default Screen
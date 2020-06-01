import React from "react";
import Controls from "./Controls";
import Screen from "./Screen";

type CounterPropsType = {
    count: number
    changeCount: () => void
    resetCount: () => void
    error: boolean
    setError: (value: boolean) => void
    starValue: number
    maxValue: number
    inputValueError: boolean
}

export function Counter({count, changeCount, resetCount, error, starValue, maxValue, inputValueError}: CounterPropsType) {

    return <div className="counter">
        <Screen inputValueError={inputValueError}
                starValue={starValue}
                count={count}
                error={error}
                maxValue={maxValue}/>
        <Controls changeCount={changeCount}
                  resetCount={resetCount}
                  error={error}
                  count={count}
                  maxValue={maxValue}
                  starValue={starValue}/>
    </div>

}
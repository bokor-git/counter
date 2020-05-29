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
    maxValue: number | null
}


export function Counter({count, changeCount, resetCount, error, starValue, maxValue}: CounterPropsType) {

    // if (count === 5) {setError(true)} works good
    return <div className="counter">
        <Screen starValue={starValue}
                count={count}
                error={error}/>
        <Controls changeCount={changeCount}
                  resetCount={resetCount}
                  error={error}
                  count={count}
                  maxValue={maxValue}
                  starValue={starValue}/>
    </div>

}
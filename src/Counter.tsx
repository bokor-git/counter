import React from "react";
import Controls from "./Controls";
import Screen from "./Screen";

type CounterPropsType = {
    count: number
    changeCount: () => void
    resetCount: () => void
    error: boolean
    setError: (value: boolean) => void
}


export function Counter({count, changeCount, resetCount, error, setError}: CounterPropsType) {

    if (count === 5) {setError(true)}

    return <div className="counter">
        <Screen count={count}
                error={error}/>
        <Controls changeCount={changeCount}
                  resetCount={resetCount}
                  error={error}
                  count={count}/>
    </div>

}
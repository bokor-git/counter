import React, {useEffect, useState} from "react";
import Controls from "./Controls";
import Screen from "./Screen";
import {useSelector} from "react-redux";
import {AppStateType} from "./state/store";

type CounterPropsType = {
    inputValueError: boolean
}

export function Counter({inputValueError}: CounterPropsType) {

    let maxValue = useSelector<AppStateType, number>(state => state.counter.maxValue)
    let startValue = useSelector<AppStateType, number>(state => state.counter.startValue)
    let count = useSelector<AppStateType, number>(state => state.counter.count)

    let [countIsDone, setCountIsDone] = useState<boolean>(false)

    useEffect(() => errorCheck(), [count, maxValue])
    const errorCheck = () => count === maxValue ? setCountIsDone(true) : setCountIsDone(false)

    return <div className="counter">
        <Screen inputValueError={inputValueError}
                starValue={startValue}
                count={count}
                countIsDone={countIsDone}
                maxValue={maxValue}/>
        <Controls
            setCountIsDone={setCountIsDone}
            countIsDone={countIsDone}
            count={count}
            maxValue={maxValue}
            starValue={startValue}
            inputValueError={inputValueError}/>
    </div>

}
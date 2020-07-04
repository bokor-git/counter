type initStateType = {
    count: number
    starValue: number,
    maxValue: number
}

let initState: initStateType = {
    count: 0,
    starValue: 0,
    maxValue: 0
}

export type increaseCount = { type: "INCREASE-COUNT" }
export type setStartValue = { type: "SET-START-VALUE" }
export const increaseCountAC = (): increaseCount => {
    return {type: "INCREASE-COUNT"}
}
export const setStartValueAC = (): setStartValue => {
    return {type: "SET-START-VALUE"}
}

type actionTypes = increaseCount | setStartValue
export const counterReducer = (state = initState, action: actionTypes): initStateType => {
    switch (action.type) {
        case "INCREASE-COUNT":
            return {...state, count: state.count+1}
        case "SET-START-VALUE":
            return {...state, starValue: state.starValue}
        default:
            return {...state}
    }
}
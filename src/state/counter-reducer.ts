export type initStateType = {
    count: number
    startValue: number,
    maxValue: number
}

let storageStartValue = Number(localStorage.getItem('start'))
let storageMaxValue = Number(localStorage.getItem('max'))

let initState: initStateType = {
    count: 0,
    startValue: storageStartValue,
    maxValue: storageMaxValue
}

export type increaseCount = { type: "INCREASE-COUNT" }
export type setMaxValue = { type: "SET-MAX-VALUE", max: number }
export type setStartValue = { type: "SET-START-VALUE", start: number }
export type resetCount = { type: "RESET-COUNT"}

export const increaseCountAC = (): increaseCount => {
    return {type: "INCREASE-COUNT"}
}
export const resetCountAC = (): resetCount => {
    return {type: "RESET-COUNT"}
}
export const setMaxValueAC = (max: number): setMaxValue => {
    return {type: "SET-MAX-VALUE", max}
}
export const setStartValueAC = (start: number): setStartValue => {
    return {type: "SET-START-VALUE", start}
}


type actionTypes = increaseCount | resetCount  | setMaxValue | setStartValue

export const counterReducer = (state = initState, action: actionTypes): initStateType => {
    switch (action.type) {
        case "INCREASE-COUNT":
            return {...state, count: state.count + 1}
        case "RESET-COUNT":
            return {...state, count: state.startValue}
        case "SET-MAX-VALUE":
            return {...state, maxValue: action.max}
        case "SET-START-VALUE":
            return {...state, startValue: action.start, count:action.start}
        default:
            return {...state}
    }
}
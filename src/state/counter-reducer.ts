type initStateType = {
    count: number
    starValue: number,
    maxValue: number
}

let storageStartValue =Number(localStorage.getItem('start'))
let storageMaxValue =Number(localStorage.getItem('max'))

let initState: initStateType = {
    count: 0,
    starValue: storageStartValue,
    maxValue: storageMaxValue
}

export type increaseCount = { type: "INCREASE-COUNT" }
export type setCountStartValue = { type: "SET-COUNT-START-VALUE", start: number }
export type setMaxValue = { type: "SET-MAX-VALUE", max: number }
export type setStartValue = { type: "SET-START-VALUE", start: number }

export type resetCount = { type: "RESET-COUNT", starValue: number }
export const increaseCountAC = (): increaseCount => {
    return {type: "INCREASE-COUNT"}
}
export const resetCountAC = (starValue: number): resetCount => {
    return {type: "RESET-COUNT", starValue}
}
export const setCountStartValueAC = (start: number): setCountStartValue => {
    return {type: "SET-COUNT-START-VALUE", start}
}
export const setMaxValueAC = (max: number): setMaxValue => {
    return {type: "SET-MAX-VALUE", max}
}
export const setStartValueAC = (start: number): setStartValue => {
    return {type: "SET-START-VALUE", start}
}


type actionTypes = increaseCount | resetCount | setCountStartValue | setMaxValue | setStartValue
export const counterReducer = (state = initState, action: actionTypes): initStateType => {
    switch (action.type) {
        case "INCREASE-COUNT":
            return {...state, count: state.count + 1}
        case "RESET-COUNT":
            return {...state, count: action.starValue}
        case "SET-COUNT-START-VALUE":
            return {...state, count: action.start}
        case "SET-MAX-VALUE":
            return {...state, maxValue: action.max}
        case "SET-START-VALUE":
            return {...state, starValue: action.start}
        default:
            return {...state}
    }
}